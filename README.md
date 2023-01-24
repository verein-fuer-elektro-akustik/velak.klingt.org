# [VELAK](https://velak.klingt.org/)

> Verein für Elektro Akustische Musik

[![test](https://github.com/verein-fuer-elektro-akustik/velak.klingt.org/actions/workflows/test.yml/badge.svg)](https://github.com/verein-fuer-elektro-akustik/velak.klingt.org/actions/workflows/test.yml)
[![build](https://github.com/verein-fuer-elektro-akustik/velak.klingt.org/actions/workflows/build.yml/badge.svg)](https://github.com/verein-fuer-elektro-akustik/velak.klingt.org/actions/workflows/build.yml)


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

