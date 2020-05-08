# fabiencrassat / My Curriculum Vitae with Nuxt

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for mys site.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)
![Continuous Integration](https://github.com/fabiencrassat/cv-with-nuxt/workflows/Continuous%20Integration/badge.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cv-with-nuxt&metric=alert_status)](https://sonarcloud.io/dashboard?id=cv-with-nuxt)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=cv-with-nuxt&metric=coverage)](https://sonarcloud.io/dashboard?id=cv-with-nuxt)

Welcome to the fabiencrassat's Curriculum Vitae source code - a development with [NuxtJs][1] framework.

[1]: https://nuxtjs.org/

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Structure](#structure)
- [Before commit](#before-commit)
  - [Github Workflow](#github-workflow)
- [Code Analysis](#code-analysis)
  - [SonarQube Installation [Local Only]](#sonarqube-installation-local-only)
  - [SonarQube Usage [Local Only]](#sonarqube-usage-local-only)
- [Todo](#todo)
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

Go to <http://localhost:3000>

## Structure

The product source code is structured with:

| Folder            | Explanation                                                                   |
|-------------------|-------------------------------------------------------------------------------|
| `config/`         | Built and runtime configuration files.                                        |
| `lib/`            | All codes used into the application but that **do not use nuxt and vue**.     |
| `scripts/`        | All files called in the `package.json` script section.                        |
| `src/assets/`     | All static files that need to be served without i18n.                         |
| `src/components/` | All codes imported in the `src/pages/` files, **using nuxt and vue**.         |
| `src/locales/`    | All i18n json files.                                                          |
| `src/middleware/` | All files used in the server side.                                            |
| `src/pages/`      | All the application pages called with URL, served with **nuxt** and **i18n**. |

## Before commit

### Github Workflow

To ensure the Github CI CD pipeline will stay green, launch the following command before commit and have no error.

```shell
yarn lint & yarn test:coverage
```

## Code Analysis

### SonarQube Installation [Local Only]

If you want to know about your code analysis, you can use SonarQube for that. To
do so:  
Source: [https://docs.sonarqube.org/display/SONAR/Get+Started+in+Two+Minutes](https://docs.sonarqube.org/display/SONAR/Get+Started+in+Two+Minutes)

### SonarQube Usage [Local Only]

> Do the [SonarQube Installation](#SonarQube-Installation-Local-Only) before starting any developments in order to know how it will change the metrics.  

Each time you want to know about your quality code, launch a scan with the following
command in the `cv-with-nuxt` folder! You will have your evolution ;)

```bash
# Start the server if needed
<SONARQUBE BIN PATH>\StartSonar.bat
# Create coverage reports
yarn test:coverage
# Launch the scan
<SONARQUBE SCANNER BIN PATH>\sonar-scanner.bat;
```

## Todo

- [ ] Move all configuration files (babel, nuxt, now) into `config/` folder.
- [ ] Optimize the Yarn cache folder in the Github pipeline (<https://github.com/actions/cache/blob/master/examples.md#node---yarn>).
- [ ] Optimize the Sonar cache folders (~/.sonar/cache, .scannerwork) in Github pipeline.

## Licence

MIT
