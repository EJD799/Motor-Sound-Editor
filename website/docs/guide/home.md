---
title: Home & Projects
description: Home page and project management behavior.
---

# Home & Projects

The home page is the project-entry surface for the desktop app. It is not just a welcome screen; it already manages project creation, loading, importing, search, sorting, and recent-project browsing.

## What the home page includes

- A left-side action rail
  - `New Project`
  - `Open File`
  - `Import File`
  - `Settings` as a reserved entry
- A central workspace
  - project search
  - date / name sorting
  - recent-project gallery
- A bottom status area
  - current app version display

## Creating a new project

`New Project` opens a dialog where the current implementation lets you set:

- project name
- max speed
- acceleration

After choosing a save location, the app writes the `.msep` project immediately and moves into the editor.

## Opening vs importing

### Open File

- opens a `.msep` project directly
- loads project content into the active editor session
- transitions straight from the home page into editing

### Import File

- reads a `.msep` file into the recent-project gallery
- does not immediately open the editor
- is useful when building a local working set of projects first

## Recent project gallery

Project cards can display:

- project name
- last modified timestamp
- generated preview lines sampled from project curve data

That preview treatment helps users distinguish projects without opening each file.

## Search and sorting

- search filters by project name
- sorting supports `Date` and `Name`
- the empty state encourages either a different query or creating a new project

## Drag and drop import

The desktop window supports dropping `.msep` files directly onto the app:

- only `.msep` files are accepted
- multiple files can be imported at once
- successful imports show a result toast

## Current limitations

- `Import File` adds a project to the gallery but does not enter the editor
- `Settings` is still a reserved entry, not a completed settings workflow
- home-page management is centered on `.msep`, not arbitrary external project formats
