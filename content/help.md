---
title: help
rss_ignore: true
---
## Content

### Program

* `title`: Event title
* `date`: Event date
* `artists`: List of (solo) artists
* `collabs`: List of artist collaborations (separated by `+`)
* `location: Either id of a location stored in `data/locations.json` data file or the full address
* `tags`: List of tags used to generate taxonomy lists (fe: `[gala]` or `[export]`)
* `photos`: Name of this events photographer

```yml
---
title: "gala#123"
date: 2001-09-11
artists: [
  roland panzer,
  archibald düsenberg
]
collabs: [
  roy cohen + samba + someone,
  aa + bb
]
location: "echoraum"
tags: [gala]
photos: Bon Alog
---
Open doors 19:00
Start 19:30
```

#### Image files

Image files (jpg) placed into a program directory will automatically be shown in the gallery of an event.

#### Audio files

Audio files (wav, mp3, ogg, flac) placed into a program directory will automatically get listed as links on a event page.

### Artists

* `title`: Full name of the artist
* `links`: List of links to artists website(s)
* `aliases`: List of aliases this artists will be available too
* `email`: Email address of the artist

#### Example

```yml
---
title: "archibald düsenberg"
links: [https://düsenberg.at]
email: [archibald@düsenberg.at]
aliases: [düsenberg]
---
Some extra text for this artist.
```

---

### Locations

List of locations reside in a json data file: [data/locations.json](https://github.com/verein-fuer-elektro-akustik/velak.klingt.org/blob/master/data/locations.json)
With an locations entry you can just use the id of the location for the program/location field which inserts the address and url automatically.

```json
"echoraum": {
    "name": "Echoraum",
    "address": "Sechshauser Straße 66, 1150 Wien",
    "url": "https://echoraum.at"
},
```

---

## Deploy

TODO:
