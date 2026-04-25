---
title: Getting Started
description: First-run guidance for Motor Sound Editor users.
---

# Getting Started

Motor Sound Editor is built for creators who want to author layered motor sound projects in a visual editor instead of hand-editing raw simulator tables. The app is currently focused on project authoring, real-time preview, and export packaging around the workflows already implemented in the desktop application.

![Motor Sound Editor home screen](/homepage.png)

## What the app does today

You can use the current build to:

- create a new `.msep` project with project metadata and simulator defaults
- open an existing `.msep` project from disk
- import a compatible `.msep` file into the app
- manage multiple motor sound tracks inside one project
- assign `wav` or `ogg` audio to tracks
- edit traction and brake pitch/volume curves visually
- preview audible behavior in traction, coasting, and brake states
- save, save as, undo, redo, and export

## What the app does not promise yet

The current product should not be treated as a finished multi-format export suite. In the present build:

- the export dialog shows **BVE** as the active export target
- `OpenBVE` and `MTR` entries are visible in the dialog but are disabled
- there is a settings store in code, but there is no finished settings screen

That means the tool is already practical for real authoring work, but you should still treat it as an actively evolving desktop editor.

## Before you begin

Prepare the following:

- one or more motor sound source files in `wav` or `ogg`
- a rough idea of your train's maximum speed
- a starting acceleration value
- a working folder where you want to save the `.msep` file

You do not need to prepare CSV files first. The app is explicitly designed so the editor becomes your primary authoring surface.

## The first successful session

Use this sequence if you want to confirm that the app works correctly on your machine:

1. Launch the application and stay on the Home screen.
2. Choose **New Project**.
3. Enter a project name.
4. Set a reasonable maximum speed and acceleration.
5. Enter the editor.
6. Add or activate a track if needed.
7. Assign an audio file to that track.
8. Add a few keyframes in the chart or edit values through the list editor.
9. Press `Space` to preview.
10. Save the project as a `.msep` file.

If you can complete those ten steps, the core workflow is working as intended.

## Understanding `.msep`

`.msep` is the app's project container. It keeps the project description, track setup, curve data, and bundled audio together so you are not forced to manage a fragile collection of loose files by hand.

From a user perspective, the practical meaning is simple:

- save the `.msep` file when you want to preserve work
- reopen the same file later to continue editing
- move the file to another machine or storage location as one project unit

## Recommended first reading

After this page, continue in this order:

1. [Home and Projects](/docs/guide/home)
2. [Interface Overview](/docs/guide/interface-overview)
3. [Editor Workspace](/docs/guide/editor)
4. [First Project](/docs/tutorials/first-project)
