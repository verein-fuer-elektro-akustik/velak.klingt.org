# [v´el:ak](https://velak.klingt.org/)

Verein für Elektro Akustische Musik

## Develop

```sh
# Install development dependencies
npm install

# Start hugo development server (http://localhost:1313/)
npm start

# Start scss compiler
npm run dev:style
```


## Build

```sh
npm run prod:style
npm run prod:hugo
# or
npm run prod

# Build with custom baseurl
npm run prod:hugo -- --baseURL https://example.com
```

---

[![test](https://github.com/verein-fuer-elektro-akustik/velak.klingt.org/actions/workflows/test.yml/badge.svg)](https://github.com/verein-fuer-elektro-akustik/velak.klingt.org/actions/workflows/test.yml)
[![build](https://github.com/verein-fuer-elektro-akustik/velak.klingt.org/actions/workflows/build.yml/badge.svg)](https://github.com/verein-fuer-elektro-akustik/velak.klingt.org/actions/workflows/build.yml)
