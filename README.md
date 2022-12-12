# [VELAK](https://velak.klingt.org/)
> Verein für Elektro Akustische Musik


The velak archive is currently under reconstruction with the goal to be as complete as possible.  
Check the raw data table of past events for missing data: https://vvv.disktree.net/raw/  
Help by submitting missing data, create/resolve [issues](https://github.com/verein-fuer-elektro-akustik/velak.klingt.org/issues?q=is%3Aopen+is%3Aissue+milestone%3Av1) and spread the word.

Any change to this repository will rebuild the site and push it to https://verein-fuer-elektro-akustik.github.io/velak.klingt.org/

Test server: https://vvv.disktree.net/  

[![build](https://github.com/disktree/velak/actions/workflows/build.yml/badge.svg)](https://github.com/disktree/velak/actions/workflows/build.yml)


## Develop

Start hugo development server (http://localhost:1313/)
```sh
npm start
```

Start scss compiler
```sh
npm run dev:style
```


## Build

```sh
npm run prod
# or
npm run prod:style
npm run prod:hugo
```

Build hugo project with custom baseurl.
```sh
npm run prod:hugo -- --baseURL https://vvv.disktree.net --buildDrafts
```
