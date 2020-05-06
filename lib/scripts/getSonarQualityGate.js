const fs = require('fs');
const fetch = require('node-fetch');
const process = require('process');
const { delay } = require('../utils/timer');

const defaultUrl = 'http://admin:admin@localhost:9000';
const projectId = 'cv-with-nuxt';

const consoleError = (...arg) => {
  console.error('\n\x1b[31merror\x1b[0m', ...arg);
};

const getValueByKey = (content, key) => {
  const regex = new RegExp(`^${key}=(.*)$`, 'm');
  const match = regex.exec(content);
  if (match) {
    return match[1];
  }
  return null;
};

const getTaskId = () => {
  try {
    const content = fs.readFileSync('.scannerwork/report-task.txt');
    return getValueByKey(content, 'ceTaskId');
  } catch (error) {
    consoleError(error);
    return null;
  }
};

const doRecursiveRequest = (url, limit = 20, setTimeoutLoop = 500) => {
  console.info(
    `Waiting the report processing (try ${limit}, waiting ${
      setTimeoutLoop / 1000
    }s)`
  );
  return fetch(url)
    .then((response) => response.json())
    .then(async (json) => {
      const { status } = json.task;
      limit -= 1;
      if (status !== 'SUCCESS' && limit) {
        await delay(setTimeoutLoop);
        return doRecursiveRequest(url, limit, setTimeoutLoop * 2);
      }
      if (status !== 'SUCCESS') {
        return 1;
      }
      console.info('Report processed');
      return 0;
    })
    .catch((error) => {
      consoleError(error);
      return 1;
    });
};

const fetchTaskStatus = (url, taskId) =>
  doRecursiveRequest(`${url}/api/ce/task?id=${taskId}`).then(
    (processExitCode) => processExitCode
  );

const fetchMasterQualityGateStatus = (url) =>
  fetch(`${url}/api/project_branches/list?project=${projectId}`)
    .then((res) => res.json())
    .then((json) => {
      const { branches } = json;
      const masterBranch = branches.filter((el) => el.name === 'master');
      if (masterBranch.length !== 1) {
        consoleError('The branch "master" is not found');
        return 1;
      }
      const { qualityGateStatus } = masterBranch[0].status;
      console.info(`The quality gate is ${qualityGateStatus}`);
      if (qualityGateStatus !== 'OK') {
        return 1;
      }
      return 0;
    })
    .catch((error) => {
      consoleError(error);
      return 1;
    });

module.exports.defaultUrl = defaultUrl;
module.exports.getSonarQualityGate = async function getSonarQualityGate({
  url = defaultUrl,
} = {}) {
  let processExitCode = 1;
  const taskId = getTaskId();
  console.info(`The task to fetch is ${taskId}`);
  if (!taskId) {
    consoleError(`Command failed with exit code ${processExitCode}.`);
    return process.exit(processExitCode);
  }
  processExitCode = await fetchTaskStatus(url, taskId);
  if (processExitCode > 0) {
    consoleError(`Command failed with exit code ${processExitCode}.`);
    return process.exit(processExitCode);
  }
  processExitCode = await fetchMasterQualityGateStatus(url);
  if (processExitCode >= 1) {
    consoleError(`Command failed with exit code ${processExitCode}.`);
  }
  return process.exit(processExitCode);
};
