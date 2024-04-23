---
title: help
rss_ignore: true
---
## Content

### Program

To add an event create a `content/program/<event-name>/index.md` markdown file.

```yml
---
title: "gala#123"
date: 2001-09-11
artists: [
  roland panzer,
  archibald düsenberg
]
collabs: [
  roy cohen + artist-c + someone,
  aa + bb
]
location: "echoraum"
tags: [gala]
photos: Bon Alog
---
Some extra text for this event.
Open doors 19:00
Start 19:30
```

* `title`: Event title
* `date`: Event date
* `artists`: List of (solo) artists
* `collabs`: List of artist collaborations (separated by `+`)
* `location`: Either id of a location stored in `data/locations.json` data file or the full address
* `tags`: List of tags used to generate taxonomy lists (fe: `[gala]` or `[export]`)
* `photos`: Name of this events photographer
* `online`: Set this to true if it is an online event

#### Image files

Image files (jpg) placed into a program directory will automatically resized and shown in the gallery of an event.

#### Audio files

Audio files (wav, mp3, ogg, flac) placed into a program directory will automatically get listed as links on a event pages.

### Artists

To add an artist create a `content/artist/<artist-name>/index.md` markdown file.

```yml
---
title: "archibald düsenberg"
links: [https://düsenberg.at, https://soundcloud.com/duesenberg]
email: [archibald@düsenberg.at]
aliases: [düsenberg]
---
Some extra text for this artist.
```

* `title`: Full name of the artist
* `links`: List of links to artists website(s)
* `aliases`: List of aliases this artists will aslo be available
* `email`: Email address of the artist

---

### Locations

List of locations reside in a json data file [data/locations.json](https://github.com/verein-fuer-elektro-akustik/velak.klingt.org/blob/master/data/locations.json).  
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

Updates to the master branch of the repository gets automatically build and deployed once a day (00:00).  
To manually deploy go to the [actions tab](https://github.com/verein-fuer-elektro-akustik/velak.klingt.org/actions/workflows/deploy.yml) and hit the __Run workflow__ button.  
Visit [velak.klingt.org/version](https://velak.klingt.org/version/) to check the currently deployed version.
