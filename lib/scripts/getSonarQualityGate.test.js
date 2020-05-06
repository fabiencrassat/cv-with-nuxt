import mockFs from 'mock-fs';
import fetch from 'node-fetch';
import { delay } from '../utils/timer';

import { getSonarQualityGate, defaultUrl } from './getSonarQualityGate';

jest.mock('node-fetch');
jest.mock('../utils/timer');

const expectUrl = 'http://admin:admin@localhost:9000';
const fetchErrorMessage = 'Fetch error';
const maxRecursiveLimit = 20;
const task = {
  key: 'ceTaskId',
  value: 'sonarTaskId',
};
const mockFetch = (mockImplementation) => {
  fetch
    .mockImplementationOnce(() =>
      Promise.resolve({
        json: () => ({ task: { status: 'SUCCESS' } }),
      })
    )
    .mockImplementation(mockImplementation);
};
const expectConsoleInfo = (callTimes, calledWith = []) => {
  expect(console.info).toHaveBeenCalledTimes(callTimes);
  expect(console.info).toHaveBeenNthCalledWith(
    1,
    `The task to fetch is ${calledWith[0]}`
  );
  if (callTimes > 1) {
    expect(console.info).toHaveBeenNthCalledWith(
      2,
      `Waiting the report processing (try ${maxRecursiveLimit}, waiting 0.5s)`
    );
  }
  if (callTimes > 2) {
    expect(console.info).toHaveBeenNthCalledWith(3, 'Report processed');
  }
  if (callTimes > 3) {
    expect(console.info).toHaveBeenNthCalledWith(
      4,
      `The quality gate is ${calledWith[1]}`
    );
  }
};
const expectFetch = (callTimes = 2) => {
  expect(fetch).toHaveBeenCalledTimes(callTimes);
  expect(fetch).toHaveBeenNthCalledWith(
    1,
    `${expectUrl}/api/ce/task?id=${task.value}`
  );
  if (callTimes === 2) {
    expect(fetch).toHaveBeenNthCalledWith(
      2,
      `${expectUrl}/api/project_branches/list?project=cv-with-nuxt`
    );
  }
  if (callTimes > 2) {
    expect(fetch).toHaveBeenNthCalledWith(
      callTimes,
      `${expectUrl}/api/ce/task?id=${task.value}`
    );
  }
};
const expectConsoleError = (firstCalledWith, calledTimes = 2) => {
  expect(console.error).toHaveBeenCalledTimes(calledTimes);
  if (calledTimes === 2) {
    expect(console.error.mock.calls[0][1].toString()).toMatch(firstCalledWith);
  }
  expect(console.error).toHaveBeenNthCalledWith(
    calledTimes,
    '\n\x1b[31merror\x1b[0m',
    'Command failed with exit code 1.'
  );
};
const expectProcessExit = (exitCode = 1) => {
  expect(process.exit).toHaveBeenCalledTimes(1);
  expect(process.exit).toHaveBeenCalledWith(exitCode);
};

describe('getSonarQualityGate', () => {
  // eslint-disable-next-line jest/prefer-spy-on
  process.exit = jest.fn();
  // eslint-disable-next-line jest/prefer-spy-on
  console.info = jest.fn();
  // eslint-disable-next-line jest/prefer-spy-on
  console.error = jest.fn();

  // eslint-disable-next-line jest/no-hooks
  afterEach(() => {
    mockFs.restore();
    jest.clearAllMocks();
  });
  it('should export default url', () => {
    expect.assertions(1);
    expect(defaultUrl).toBe(expectUrl);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should exit with error because no scanner folder', async () => {
    expect.hasAssertions();
    mockFs({});
    await getSonarQualityGate();
    expectConsoleInfo(1, ['null']);
    expectConsoleError(
      /Error: ENOENT(:|,) no such file or directory(, open|) '.*\.scannerwork(\\|\/)report-task\.txt'/
    );
    expectProcessExit();
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should exit with error because no report task file', async () => {
    mockFs({ '.scannerwork': mockFs.directory({ mode: 0o755, items: {} }) });
    await getSonarQualityGate();
    expectConsoleInfo(1, ['null']);
    expectConsoleError(
      /Error: ENOENT(:|,) no such file or directory(, open|) '.*\.scannerwork(\\|\/)report-task\.txt'/
    );
    expectProcessExit();
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it(`should exit with error because no ${task.key} key in the file`, async () => {
    expect.hasAssertions();
    mockFs({
      '.scannerwork': mockFs.directory({
        mode: 0o755,
        items: {
          'report-task.txt': mockFs.file({
            content: '',
            mtime: new Date(1),
          }),
        },
      }),
    });
    await getSonarQualityGate();
    expectConsoleInfo(1, ['null']);
    expectConsoleError(null, 1);
    expectProcessExit();
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should exit fetching task status', async () => {
    expect.hasAssertions();
    mockFs({
      '.scannerwork': mockFs.directory({
        mode: 0o755,
        items: {
          'report-task.txt': mockFs.file({
            content: `${task.key}=${task.value}`,
            mtime: new Date(1),
          }),
        },
      }),
    });
    fetch.mockImplementation(() => Promise.reject(fetchErrorMessage));
    await getSonarQualityGate();
    expectConsoleInfo(2, [task.value]);
    expectFetch(1);
    expectConsoleError(fetchErrorMessage);
    expectProcessExit();
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should exit retrieving task status', async () => {
    expect.hasAssertions();
    mockFs({
      '.scannerwork': mockFs.directory({
        mode: 0o755,
        items: {
          'report-task.txt': mockFs.file({
            content: `${task.key}=${task.value}`,
            mtime: new Date(1),
          }),
        },
      }),
    });
    fetch.mockImplementation(() => Promise.resolve({ json: () => {} }));
    await getSonarQualityGate();
    expectConsoleInfo(2, [task.value]);
    expectFetch(1);
    // eslint-disable-next-line quotes
    expectConsoleError("TypeError: Cannot read property 'task' of undefined");
    expectProcessExit();
  });

  const expectConsoleInfoByFetching = (nth) => {
    expect(console.info).toHaveBeenNthCalledWith(
      nth,
      `Waiting the report processing (try ${
        maxRecursiveLimit + 2 - nth
      }, waiting ${Math.pow(2, nth - 3)}s)`
    );
  };
  it('should exit retrieving task status without success', async () => {
    expect.hasAssertions();
    mockFs({
      '.scannerwork': mockFs.directory({
        mode: 0o755,
        items: {
          'report-task.txt': mockFs.file({
            content: `${task.key}=${task.value}`,
            mtime: new Date(1),
          }),
        },
      }),
    });
    fetch.mockImplementation(() =>
      Promise.resolve({
        json: () => ({ task: { status: '' } }),
      })
    );
    delay.mockImplementation(() => Promise.resolve());
    await getSonarQualityGate();
    expect(console.info).toHaveBeenCalledTimes(maxRecursiveLimit + 1);
    expect(console.info).toHaveBeenNthCalledWith(
      1,
      `The task to fetch is ${task.value}`
    );
    for (let nthCalled = 1; nthCalled <= maxRecursiveLimit; nthCalled++) {
      expectConsoleInfoByFetching(nthCalled + 1);
    }
    expectFetch(maxRecursiveLimit);
    expectConsoleError(null, 1);
    expectProcessExit();
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should exit retrieving project_branches list', async () => {
    expect.hasAssertions();
    mockFs({
      '.scannerwork': mockFs.directory({
        mode: 0o755,
        items: {
          'report-task.txt': mockFs.file({
            content: `${task.key}=${task.value}`,
            mtime: new Date(1),
          }),
        },
      }),
    });
    mockFetch(() => Promise.reject(fetchErrorMessage));
    delay.mockImplementation(() => Promise.resolve());
    await getSonarQualityGate();
    expectConsoleInfo(3, [task.value]);
    expectFetch();
    expectConsoleError(fetchErrorMessage);
    expectProcessExit();
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should exit retrieving no master project branch', async () => {
    expect.hasAssertions();
    mockFs({
      '.scannerwork': mockFs.directory({
        mode: 0o755,
        items: {
          'report-task.txt': mockFs.file({
            content: `${task.key}=${task.value}`,
            mtime: new Date(1),
          }),
        },
      }),
    });
    mockFetch(() =>
      Promise.resolve({
        json: () => ({ branches: [] }),
      })
    );
    delay.mockImplementation(() => Promise.resolve());
    await getSonarQualityGate();
    expectConsoleInfo(3, [task.value]);
    expectFetch();
    expectConsoleError('The branch "master" is not found');
    expectProcessExit();
  });

  const mocks = ({ qualityGateStatus }) => {
    mockFs({
      '.scannerwork': mockFs.directory({
        mode: 0o755,
        items: {
          'report-task.txt': mockFs.file({
            content: `${task.key}=${task.value}`,
            mtime: new Date(1),
          }),
        },
      }),
    });
    mockFetch(() =>
      Promise.resolve({
        json: () => ({
          branches: [{ name: 'master', status: { qualityGateStatus } }],
        }),
      })
    );
    delay.mockImplementation(() => Promise.resolve());
  };
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should exit because the quality gate is not ok', async () => {
    expect.hasAssertions();
    mocks({ qualityGateStatus: 'KO' });
    await getSonarQualityGate();
    expectConsoleInfo(4, [task.value, 'KO']);
    expectFetch();
    expectConsoleError(null, 1);
    expectProcessExit();
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should exit because the quality gate is ok', async () => {
    expect.hasAssertions();
    mocks({ qualityGateStatus: 'OK' });
    await getSonarQualityGate();
    expectConsoleInfo(4, [task.value, 'OK']);
    expectFetch();
    expectProcessExit(0);
  });
});
