![qit logo](https://github.com/codingblocks/podcast-app/blob/master/website-react/public/images/icons/icon-144x144.png)

[![Build Status](https://travis-ci.org/codingblocks/podcast-app.svg?branch=master)](https://travis-ci.org/codingblocks/podcast-app)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# qit: Listen to Programming Podcasts by Topic
qit...get it? get it? Like...Queue I.T.!

Ok so yeah, the title needs work, but the idea is to let programmers find and listen to podcasts by topic.

Check out a preview here: [https://qit.cloud](https://qit.cloud)

### Important Note!

Currently any changes to the website project require bumping the service worker version. See [issue #28](https://github.com/codingblocks/podcast-app/issues/28)

## Running the website

The website is a [Progressive Web App](https://developers.google.com/web/progressive-web-apps/) built on [ReactJs](https://reactjs.org/) that uses [styled components](https://www.styled-components.com/docs/basics).

```bash
cd website-react

npm install
npm start
```

### Linting the React website

This website uses the [Standard](https://github.com/standard/standard) style guide.
To auto-lint, just run:

```bash
standard --fix
```
### E2E the React website

#### With the Dev Server running

To run cypress interactive mode, run the following commands:

```bash
cd website-react
npm run cypress:open
<click run all tests on the GUI>
```

To run cypress headless mode, run the following commands:

```bash
cd website-react
npm run e2e
```

#### Without the Dev Server running

```bash
cd website-react
npm run ci
```

#### Vladimir`s version of docker
Before running dockers, run
```bash
docker network create codingblocks
```
so that in future containers are able to see each others, within this network

###### Spin docker containers
Go to desired folder.
```
# test docker enviroment bindings before creating containers
docker-compose config

# start local development
docker-compose -f docker-compose.yml -f docker-compose.local.yml up -d

# start regular docker
docker-compose build && docker-compose up [ OPTIONAL ] -d (if console is not needed)  
```

Command to stop container:

```;bash

# to stop containers
docker-compose stop
```

## Podcast Feed Loader

This is the part of the product that is responsible for importing the data.

It loads podcast feed urls from a file, normalizes them, and then updates them in a search engine. Currently only supports Azure Search.

Read more about it here: [Podcast Feed Loader on the wiki](https://github.com/codingblocks/podcast-app/wiki/Podcast-Feed-Loader)

## Contributors
- [Joe Zack](https://github.com/THEjoezack)
- [Nicolas Marcora](https://github.com/nmarcora)
- [Mikkel Madsen](https://github.com/Madsn)
- [Adam Lantz](https://github.com/AdamLantz)
- [Ben Steward](https://github.com/tehpsalmist)
- [Aaron Clawson](https://github.com/MadVikingGod)
- [Vladimir Kunarac](https://github.com/vlado92)
- [Dave Follett](https://github.com/davefollett)
- [Sung Kim](https://github.com/dance2die/)

## Trello for additional insight 
[QIT Trello Board](https://trello.com/b/RTgaMRh0/qit)
