# Repository instructions

- Read `README.md` for the repository structure, setup, development, and validation workflows.
- Run all Node.js and Yarn commands inside the Podman container workflow described in `README.md`, not directly on the host. Use Node.js 24.14.1 or later and Yarn 1.22.22 in the container.
- Before committing, run `yarn lint` and `yarn test:coverage`.
- Follow the existing Vue, Nuxt, TypeScript, and test patterns. Keep changes focused and add tests for behavior changes.
