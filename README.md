# [VELAK](https://velak.klingt.org/)

> Verein für Elektro Akustische Musik


The velak archive is currently under reconstruction with the goal to be as complete as possible.  
Check the raw data table of past events for missing data: https://vvv.disktree.net/raw/  

Test server: https://vvv.disktree.net/  

Any change to this repository will rebuild the site and push it to https://verein-fuer-elektro-akustik.github.io/velak.klingt.org/


[![test](https://github.com/verein-fuer-elektro-akustik/velak.klingt.org/actions/workflows/test.yml/badge.svg)](https://github.com/verein-fuer-elektro-akustik/velak.klingt.org/actions/workflows/test.yml)
[![build](https://github.com/disktree/velak/actions/workflows/build.yml/badge.svg)](https://github.com/disktree/velak/actions/workflows/build.yml)


## Develop

```sh
# Install dependencies
npm install

# Start hugo development server (http://localhost:1313/)
npm start

# Start scss compiler
npm run dev:style
```


## Build

```sh
npm run prod
# or
npm run prod:style
npm run prod:hugo

# Build hugo project with custom baseurl.
npm run prod:hugo -- --baseURL https://vvv.disktree.net --buildDrafts
```

## Content

Create new program/event:
```sh
hugo new content/program/<name>/index.md
```

Create new artist:
```sh
hugo new content/artist/<name>/index.md
```

