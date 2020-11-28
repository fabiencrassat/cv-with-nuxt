# fabiencrassat / My Curriculum Vitae with Nuxt

[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://app.renovatebot.com/dashboard#github/fabiencrassat/cv-with-nuxt)
[![Pipeline](https://github.com/fabiencrassat/cv-with-nuxt/workflows/Pipeline/badge.svg)](https://github.com/fabiencrassat/cv-with-nuxt/actions?query=workflow%3APipeline)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cv-with-nuxt&metric=alert_status)](https://sonarcloud.io/dashboard?id=cv-with-nuxt)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=cv-with-nuxt&metric=coverage)](https://sonarcloud.io/dashboard?id=cv-with-nuxt)

Welcome to the fabiencrassat's Curriculum Vitae source code - a development with [NuxtJs][1] framework.

[1]: https://nuxtjs.org/

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Structure](#structure)
  - [Testing files conventions](#testing-files-conventions)
- [Start like production](#start-like-production)
- [Before commit](#before-commit)
  - [Github Workflow](#github-workflow)
  - [Exclude some files](#exclude-some-files)
- [Code Analysis](#code-analysis)
  - [HTML & A11Y validator](#html--a11y-validator)
  - [SonarQube](#sonarqube)
    - [SonarQube Installation [Local Only]](#sonarqube-installation-local-only)
    - [SonarQube Usage [Local Only]](#sonarqube-usage-local-only)
  - [Google Chrome Lighthouse](#google-chrome-lighthouse)
    - [Lightouse Server [Local Only]](#lightouse-server-local-only)
    - [Lighthouse Usage [Local Only]](#lighthouse-usage-local-only)
- [Todos](#todos)
- [SVG images](#svg-images)
- [Licence](#licence)

## Prerequisites

- [GIT](https://git-scm.com/)
- [NodeJS and NPM](https://nodejs.org/) Version 12
- [Yarn](https://yarnpkg.com/) Version 1.22

## Installation

Clone the repository

```bash
git clone https://github.com/fabiencrassat/cv-with-nuxt.git
```

Then install the packages

```bash
cd cv-with-nuxt
yarn
```

Run it!

```bash
yarn dev
# or in the offline mode
yarn dev:offline
```

Go to <http://localhost:3000/fabien>

## Structure

The product source code is structured with:

```text
  .
  ├── config          # Built and runtime configuration.
  ├── lib             # All codes used into the application but that **do not use nuxt and vue**.
  ├── scripts         # All files called in the `package.json` script section.
  └── src
      ├── assets      # All static files that need to be served without i18n.
      ├── components  # All codes imported in the `src/pages/` files, **using nuxt and vue**.
      ├── locales     # All i18n json files.
      ├── pages       # All the application pages called with URL, served with **nuxt** and **i18n**.
      ├── resources   # All resources to build the curriculum vitae.
      └── static      # All public files that can be link from the root website.
```

### Testing files conventions

In order to group test files, they are following a naming convention:

- `*.test.js` are test files name for javascript files (eg. `.js`)
- `*.spec.js` are test files name for vue files (eg. `*.vue`)
- `*.spec.ts` are test files name for typescript files (eg. `*.ts`)

## Start like production

This site is a static website. So to replicate what is deployed in the website there are some things to do first.

```shell
yarn generate
yarn start:static
```

And open the page: <http://localhost:3000/fabien>

## Before commit

### Github Workflow

To ensure the Github CI CD pipeline will stay green, launch the following command before commit and have no error.

```shell
yarn lint & yarn test:coverage
```

### Exclude some files

Adding some files in the root or config folder will change how the pipeline or test coverage will work.  
In this case and depending the context, exclude theses files in:

| Exclude in                 | Why                                                      |
| -------------------------- | -------------------------------------------------------- |
| `config/jest.config.js`    | For the coverage in the key `collectCoverageFrom`.       |
| `.gitignore`               | Files not used in the version control system.            |
| `.vercelignore`            | Files not used in the vercel deployment.                 |
| `sonar-project.properties` | For the coverage in the key `sonar.coverage.exclusions`. |

## Code Analysis

### HTML & A11Y validator

In two shell windows:

1. [Start like production](#start-like-production)
2. Run the validation

    ```bash
    yarn validate:pages
    ```

The source code of the pages from `src/pages` for each languages are output in `build/html-pages`.

If there are some exceptions to exclude, add entries in `config/validators.config.js`.

### SonarQube

#### SonarQube Installation [Local Only]

If you want to know about your code analysis, you can use SonarQube for that. To do so:  
Source: <https://docs.sonarqube.org/display/SONAR/Get+Started+in+Two+Minutes>

#### SonarQube Usage [Local Only]

> Do the [SonarQube Installation](#SonarQube-Installation-Local-Only) before starting any developments in order to know how it will change the metrics.  

Each time you want to know about your quality code, launch a scan with the following
command in the `cv-with-nuxt` folder! And you will have your evolution ;)

```bash
# Start the server if needed
<SONARQUBE BIN PATH>\StartSonar.bat
# Create coverage reports
yarn test:coverage
# Launch the scan
<SONARQUBE SCANNER BIN PATH>\sonar-scanner.bat;
```

### Google Chrome Lighthouse

#### Lightouse Server [Local Only]

If you want to know about your code audit, you can use Google Chrome Lighthouse for that. To do so, use the docker image already published:  
Source: <https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/recipes/docker-server/README.md#building-locally>

> The docker command is wrong for Windows, use instead:
>  
> ```shell
> docker container run --publish 9001:9001 --mount source=lhci-data,target=/data --detach patrickhulce/lhci-server
> ```

It will create a container server you can access at <http://localhost:9001/>.

Then initialize the project inside the server:

```shell
yarn lhci wizard
? Which wizard do you want to run? new-project
? What is the URL of your LHCI server? http://localhost:9001/
? What would you like to name the project? cv-with-nuxt
? Where is the project's code hosted? https://github.com/fabiencrassat/cv-with-nuxt
? What branch is considered the repo's trunk or main branch? master
Created project cv-with-nuxt (9461df84-ee42-4868-9061-62a8391c7fec)!
Use token xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx to add data.
Use admin token xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx to manage data. KEEP THIS SECRET!
```

Use the **LHCI server url** and the **token xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx** in your `.env` file.

```properties
LHCI_SERVER_BASE_URL=http://localhost:9001
LHCI_TOKEN=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

#### Lighthouse Usage [Local Only]

> Do the [Lighthouse Usage](#lightouse-installation-local-only) before starting any developments in order to know how it will change the metrics.  

Each time you want to know about your audit code, launch an audit with the following command in the `cv-with-nuxt` folder! And you will have your evolution ;)

> if needed, configure your `CHROME_PATH` in your `.env` file.

```shell
yarn generate
yarn start:static
```

And in an other shell:

```shell
yarn validate:lighthouse
```

## Todos

- Configuration
  - [ ] Move all configuration files (babel, nuxt, vercel) into `config/` folder.
- Build
  - [ ] Optimize the Sonar cache folders (~/.sonar/cache, .scannerwork) in Github pipeline.
  - [ ] Fix in `config/lighthouserc.js` the exception assertions.
  - [ ] Stop CI when warning is present in `yarn generate` command.
  - [ ] FIXME: The conservative purge mode will be removed in **Tailwind 2.0**, switch to the new layers mode instead.
- Test
  - [ ] Change test runner to cover Single File Component (<https://vue-test-utils.vuejs.org/guides/choosing-a-test-runner.html#testing-single-file-components>).
  - [ ] **[Waiting vue-jest@4.x.x]** Remove executable code in `vue` file to allow coverage with **vue-jest@3.x.x** (`h1.vue`, `leftSide.vue`).
    > Search for *`coverage is successful with vue-jest@4.x.x`* in the code.
  - [ ] Remove `levenary` node module due to import error with `@babel/preset-env:7.12.1`.
- Product
  - [ ] Add one toggle (hide/expand) for experiences from October 2009
  - [ ] Add a reading progress bar
- Extra
  - [ ] Add `vue-styleguidist` package.

## SVG images

The SVG images library comes from <http://www.entypo.com/>

## Licence

MIT
