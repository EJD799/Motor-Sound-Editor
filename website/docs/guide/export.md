---
title: Export Workflow
description: Prepare and export a project package from Motor Sound Editor.
---

# Export Workflow

Export packages the project into a deliverable archive. In the current user build, the active export target exposed by the dialog is **BVE**.

## Where export starts

Export is available from the editor. Open the export dialog when you are ready to turn the current project into a packaged output.

## Export dialog fields

The dialog currently includes:

- **Export format**
- **Sample rate**

### Export format

The interface shows these entries:

- `BVE`
- `OpenBVE`
- `MTR`

At the moment:

- `BVE` is the active selectable target
- `OpenBVE` and `MTR` are visible but disabled

The documentation reflects the current behavior of the application, not future roadmap assumptions.

### Sample rate

The current build allows these sample rates:

- `22050`
- `32000`
- `44100`
- `48000`
- `96000`

Choose a rate based on your workflow requirements, compatibility expectations, and file-size tolerance.

## OGG handling during export

If the project includes `ogg` tracks, the export dialog can warn that OGG audio will be converted to WAV for BVE export.

As a user, the practical takeaway is:

- you may author with `ogg`
- the packaged output can convert that audio for the active export pipeline

## Output format

The export output is written as a `.zip` archive. The native backend assembles the package structure, generates table content from the project curves, and writes the necessary audio files.

From a user's perspective, export is successful when you receive a finished archive at the selected output location.

## Before you export

Check these items first:

- the correct project is open
- track names and assignments are what you expect
- the intended curves are active and previewed
- muted or hidden tracks are not accidentally left out of your plan
- the sample rate is appropriate
- the project has been saved recently

## Recommended export routine

1. Save the project.
2. Preview the key speed ranges one more time.
3. Open the export dialog.
4. Confirm the active export format and sample rate.
5. Choose an output location.
6. Run export.
7. Archive the resulting `.zip` alongside the `.msep` source file.

## Common export questions

### Why is only BVE active?

Because that is the current implemented export target in the present build.

### Does export require WAV only?

No. The editor can work with `wav` and `ogg`, and the current export pipeline can convert OGG audio to WAV when required by the active BVE path.

### Should I export instead of saving?

No. Save preserves the editable `.msep` source project. Export produces a packaged output. They serve different purposes and you usually want both.

## Related reading

- [Project Details and Save](/docs/guide/project-details-and-save)
- [Refine Curves and Export](/docs/tutorials/refine-curves-and-export)
