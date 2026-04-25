---
title: Home and Projects
description: Use the home screen to create, open, import, search, and manage projects.
---

# Home and Projects

The Home screen is your project hub. It is where you create new work, reopen existing files, import external `.msep` packages, and browse recent projects.

![Motor Sound Editor home gallery](/homepage.png)

## Sidebar actions

The left sidebar is action-oriented. It contains the entry points that start or resume work:

- **New Project** opens the new-project dialog and creates a fresh working document.
- **Open File** opens an existing `.msep` file from disk.
- **Import File** imports a `.msep` file through the app's import route.
- **Settings** is present in the layout, but there is no finished settings screen in the current user build.

## The recent projects area

The main area lists recent projects as cards. Each card can show:

- the project name
- the last modified timestamp
- a compact preview of the project's line structure

These cards are meant to reduce context-switching. Instead of remembering which file belonged to which sound set, you can visually identify a recent project and reopen it quickly.

## Search

The search field filters the recent project list by text. Use it when:

- your recent list is long
- you remember part of a project name
- you want to narrow the list before sorting

Search is most useful when your naming scheme is consistent, for example by train class, operator, or project stage.

## Sorting

The Home screen supports at least two useful sort modes:

- **Date**: best when you want to return to the project you touched most recently
- **Name**: best when you manage multiple parallel projects and rely on naming conventions

Use date sorting during active production and name sorting during library-style browsing.

## Opening a project

You can open a project from:

- the **Open File** action
- the **Import File** action
- a card in the recent-project gallery

If the file is valid, the app will load its project metadata, tracks, curves, and bundled audio into the editor.

## Removing a project from the recent list

The recent-project view can remove a project entry from the recent list. This affects the list, not the project's actual file on disk. Use it when:

- the file has moved
- the entry is no longer relevant
- you want a cleaner recent-project panel

## New project fields

When you create a new project, the app asks for core metadata and simulator defaults. Expect fields for:

- project name
- maximum speed
- acceleration
- brake deceleration or a related braking default

These values do more than label the file. They shape how the editor clamps curve speed ranges and how the preview system interprets the project.

## Practical advice

- Name the project clearly before doing detailed edits. It makes recent-project browsing much easier later.
- Set a believable maximum speed early, because many editing decisions depend on the visible speed range.
- Use **Import File** when the project already exists as a packaged `.msep`.
- Use **Open File** when you simply want to continue normal editing from disk.

## Next steps

Continue with [Interface Overview](/docs/guide/interface-overview) to understand how the home screen connects to the editor.
