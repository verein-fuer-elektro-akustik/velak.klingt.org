#!/usr/bin/env python3
"""Move door/start times from free text in event bodies to front matter.

  doors: "19:00"
  start: "20:00"

Usage: scripts/migrate/times.py [--write] [--strip] [content/program]
  (default)  dry run, prints what would change plus lines it could not parse
  --write    update front matter of index.md files
  --strip    also remove body lines that contained only times (with --write)
"""
import re, sys
from pathlib import Path

args = [a for a in sys.argv[1:] if not a.startswith("--")]
WRITE, STRIP = "--write" in sys.argv, "--strip" in sys.argv
root = Path(args[0] if args else "content/program")

TIME = r"(\d{1,2})(?:[.:](\d{2}))?\s*(pm|am|h)?"
KEYS = {
    "doors": r"(?:open\s+)?doors",
    "start": r"(?:program\s+)?start|begin|concerts?|films?",
}

def norm(h, m, suffix):
    h, m = int(h), int(m or 0)
    if suffix == "pm" and h < 12:
        h += 12
    if suffix == "am" and h == 12:
        h = 0
    if h > 24 or m > 59:
        return None
    return f"{h:02d}:{m:02d}"

def parse_line(line):
    """Return ({doors,start}, leftover text) for a line, or None."""
    found, rest = {}, line
    for key, kw in KEYS.items():
        m = re.search(rf"\b(?:{kw})\b\s*[:\-]?\s*{TIME}", rest, re.I)
        if m:
            t = norm(m.group(1), m.group(2), (m.group(3) or "").lower())
            if t:
                found.setdefault(key, t)
                rest = rest[:m.start()] + " " + rest[m.end():]
    if not found:
        return None
    rest = re.sub(r"\(?sharp!?\)?|_sharp!_|</?br\s*/?>|[/,;_*]", " ", rest, flags=re.I)
    return found, rest.strip()

changed = skipped = 0
for f in sorted(root.glob("*/index.md")):
    text = f.read_text()
    m = re.match(r"---\n(.*?\n)---\n(.*)", text, re.S)
    if not m:
        continue
    fm, body = m.groups()
    if re.search(r"^(doors|start):", fm, re.M):
        skipped += 1
        continue
    times, drop = {}, []
    lines = body.split("\n")
    for i, line in enumerate(lines):
        if len(line) > 120:
            continue
        r = parse_line(line)
        if not r:
            continue
        found, rest = r
        for k, v in found.items():
            times.setdefault(k, v)
        if not rest:
            drop.append(i)
    if not times:
        continue
    d, st = times.get("doors"), times.get("start")
    if d and st and int(d[:2]) < 12 <= int(st[:2]):  # "doors 7:30 / 8:30 pm"
        times["doors"] = f"{int(d[:2]) + 12:02d}{d[2:]}"
    changed += 1
    print(f"{f.parent.name}: {times}" + ("" if not drop else f"  (strip lines {[d+1 for d in drop]})"))
    if WRITE:
        add = "".join(f'{k}: "{times[k]}"\n' for k in ("doors", "start") if k in times)
        if STRIP:
            lines = [l for i, l in enumerate(lines) if i not in drop]
        f.write_text(f"---\n{fm}{add}---\n" + "\n".join(lines))

print(f"\n{changed} events {'updated' if WRITE else 'would be updated'}, {skipped} already have times")
