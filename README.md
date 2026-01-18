# fabiencrassat / My Curriculum Vitae with Nuxt

[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://app.renovatebot.com/dashboard#github/fabiencrassat/cv-with-nuxt)
[![Pipeline](https://github.com/fabiencrassat/cv-with-nuxt/actions/workflows/pipeline.yml/badge.svg)](https://github.com/fabiencrassat/cv-with-nuxt/actions/workflows/pipeline.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cv-with-nuxt&metric=alert_status)](https://sonarcloud.io/dashboard?id=cv-with-nuxt)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=cv-with-nuxt&metric=coverage)](https://sonarcloud.io/dashboard?id=cv-with-nuxt)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/fabiencrassat/cv-with-nuxt/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/fabiencrassat/cv-with-nuxt/?branch=master)

Welcome to the fabiencrassat's Curriculum Vitae source code - a development with the [NuxtJs][1] framework.

[1]: https://nuxtjs.org/

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Structure](#structure)
- [Start like production](#start-like-production)
- [Before commit](#before-commit)
  - [GitHub Workflow](#github-workflow)
- [Code Analysis](#code-analysis)
  - [HTML validator](#html-validator)
  - [SonarQube](#sonarqube)
    - [SonarQube Installation \[Local Only\]](#sonarqube-installation-local-only)
    - [SonarQube Usage \[Local Only\]](#sonarqube-usage-local-only)
  - [Google Chrome Lighthouse](#google-chrome-lighthouse)
    - [Lighthouse Server \[Local Only\]](#lighthouse-server-local-only)
    - [Lighthouse Usage \[Local Only\]](#lighthouse-usage-local-only)
- [SVG images](#svg-images)
- [License](#license)

## Prerequisites

- [GIT](https://git-scm.com/)
- [NodeJS and NPM](https://nodejs.org/) Version 20

Or

- [GIT](https://git-scm.com/)
- [Podman](https://podman.io/)

## Installation

Clone the repository

```bash
git clone https://github.com/fabiencrassat/cv-with-nuxt.git
```

Then install the packages

```bash
cd cv-with-nuxt
YARN_ENABLE_SCRIPTS=false yarn install --frozen-lockfile

# Or with Podman
podman run --interactive --name cv-with-nuxt-dev -p 3000:3000 --rm --tty --entrypoint /bin/sh --volume "$(pwd):/app" -w /app docker.io/node:20.19.3-alpine3.22
# After existing the container, the ports 8000 & 9000 are still in used "sudo netstat -tulpn" and need to be killed "kill -9 PID"
YARN_ENABLE_SCRIPTS=false yarn install --frozen-lockfile
```

Run it!

```bash
# Start the development server on http://localhost:3000
yarn dev
```

Go to <http://localhost:3000/fabien>

## Structure

The product source code is structured with:

```text
  .
  ├── app
  |   ├── assets      # All static files that need to be served without i18n.
  |   ├── components  # All codes imported in the `app/pages/` files, **using nuxt and vue**.
  |   ├── pages       # All the application pages called with URL, served with **nuxt** and **i18n**.
  |   └── resources   # All resources to build the curriculum vitae.
  ├── config          # Built and runtime configuration.
  ├── i18n            # Nuxt i18n json files for translations.
  ├── lib             # All codes used into the application but that **do not use nuxt and vue**.
  ├── public          # All public files that can be link from the root website.
  └── scripts         # All files called in the `package.json` script section.
```

## Start like production

This site is a static website. So to replicate what is deployed on the website there are some things to do first.

```shell
# Build the application for production
yarn build:node_server
# Locally preview production build
yarn preview
```

And open the page: <http://localhost:3000/fabien>

## Before commit

### GitHub Workflow

To ensure the GitHub CI CD pipeline will stay green, launch the following command before committing and have no error.

```shell
yarn lint & yarn test:coverage
```

## Code Analysis

### HTML validator

```bash
yarn generate
yarn validate:html
```

### SonarQube

#### SonarQube Installation [Local Only]

If you want to know about your code analysis, you can use SonarQube for that. To do so:  
Source: <https://docs.sonarqube.org/display/SONAR/Get+Started+in+Two+Minutes>

#### SonarQube Usage [Local Only]

> Do the [SonarQube Installation](#sonarqube-installation-local-only) before starting any developments in order to know how it will change the metrics.  

Each time you want to know about your quality code, launch a scan with the following
command in the root folder! And you will have your evolution ;)

```bash
# Start the server if needed
<SONARQUBE BIN PATH>\StartSonar.bat
# Create coverage reports
yarn test:coverage
# Launch the scan
<SONARQUBE SCANNER BIN PATH>\sonar-scanner.bat;
```

### Google Chrome Lighthouse

#### Lighthouse Server [Local Only]

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

Use the **LHCI server URL** and the **token xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx** in your `.env` file.

```properties
LHCI_SERVER_BASE_URL=http://localhost:9001
LHCI_TOKEN=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

#### Lighthouse Usage [Local Only]

> Do the [Lighthouse Usage](#lighthouse-usage-local-only) before starting any developments in order to know how it will change the metrics.  

Each time you want to know about your audit code, launch an audit with the following command in the root folder! And you will have your evolution ;)

> if needed, configure your `CHROME_PATH` in your `.env` file.

```shell
yarn generate
yarn start:static
```

And in another shell:

```shell
yarn validate:lighthouse
```

## SVG images

The SVG images library comes from <http://www.entypo.com/>

## License

MIT
