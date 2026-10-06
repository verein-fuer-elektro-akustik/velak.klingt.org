# [v´el:ak](https://velak.klingt.org/)

Verein für Elektro Akustische Musik

## Develop

```sh
npm install        # requires Node.js
npm start          # dev server at http://localhost:1313/
npm run dev:style  # scss watcher (separate terminal)
```

## Build

```sh
npm run prod                                      # style + site into public/
npm run prod:hugo -- --baseURL https://example.com  # custom baseURL
npm test                                          # validate built html
```

## Content

New content is created from archetypes:

```sh
npx hugo new program/gala-147   # event
npx hugo new artists/jane-doe   # artist
```

Event front matter (`content/program/<event>/index.md`):

```yaml
title: "gala#147"
date: 2026-10-30
location: "chateau rouge"   # key in data/locations
artists: [jane doe]         # names of pages in content/artists
collabs: [jane doe + john roe]  # see below
doors: "19:00"
start: "20:00"
```

`collabs` lists performing groups, one entry per act, with the members
joined by `+`. Each member is linked to their artist page
(`content/artists/<name>`, lowercase, spaces as `-`, dots removed).

```yaml
artists: [solo person]
collabs:
  - billy roisz + peter kutin
  - agnes hvizdalek + seijiro murayama + klaus filip
```

Members of a collab should have an artist page too, otherwise the link is broken.
`artists` entries must have a page, the build fails if one is missing.

Images and audio next to `index.md` are picked up automatically.

---

[![deploy](https://github.com/verein-fuer-elektro-akustik/velak.klingt.org/actions/workflows/deploy.yml/badge.svg)](https://github.com/verein-fuer-elektro-akustik/velak.klingt.org/actions/workflows/deploy.yml)
