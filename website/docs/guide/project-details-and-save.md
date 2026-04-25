---
title: Project Details and Save
description: Review project metadata, statistics, save behavior, and history controls.
---

# Project Details and Save

Serious editing work depends on more than curves and playback. You also need to understand what the project is called, how it is described, how large it is becoming, and when your changes are safely stored.

## Project details

The editor includes a project-details view that summarizes key information about the current file. Expect it to surface values such as:

- project name
- creation or update timestamps
- track count
- keyframe count
- speed and acceleration metadata

Use this view when you want a quick structural check before saving or exporting.

## Why project details matter

Project details are especially helpful when:

- the file has grown into a multi-track project
- you want to confirm the correct project is open
- you are checking whether a revision changed the project more than expected

It is much easier to catch a wrong max-speed value or an unexpectedly large keyframe count here than after export.

## Save vs Save As

The application supports both:

- **Save**
- **Save As**

### Save

Use Save when the current file path is already correct and you want to update the existing `.msep` file in place.

### Save As

Use Save As when:

- you want a new project revision
- you want to branch an experiment
- you need to move the project to a new location

Save As is especially useful before making large structural edits such as replacing many audio assets or reworking an entire curve set.

## What gets saved

Saving writes the packaged project state, including:

- project metadata
- track definitions
- curve/keyframe data
- referenced audio payloads

The current save path also prunes audio that is no longer referenced by any track, so replaced sound files do not keep accumulating inside the saved `.msep` package.

## Dirty state and unsaved changes

The project becomes dirty when edits change the current document. Typical dirtying actions include:

- editing project metadata
- changing track properties
- assigning or removing audio
- editing keyframes
- changing active project content through list-editor apply actions

If you try to leave the editor or close the app with unsaved changes, the app can prompt you so the work is not lost by accident.

## Undo and redo

Motor Sound Editor keeps editing history so you can move backward and forward through recent work.

Use:

- `Ctrl+Z` for undo
- `Ctrl+Y` or `Ctrl+Shift+Z` for redo

History is most helpful during curve shaping, track edits, and rapid experimentation.

## Good save habits

- Save after important structural milestones.
- Use Save As before risky experiments.
- Check project details before export.
- Do not rely on memory alone for revision control.

## Related reading

- [Export Workflow](/docs/guide/export)
- [Shortcuts](/docs/guide/shortcuts)
