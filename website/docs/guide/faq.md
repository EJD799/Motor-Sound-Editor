---
title: FAQ
description: Common questions about file formats, limits, and current behavior.
---

# FAQ

## What is `.msep`?

`.msep` is the editable project container used by Motor Sound Editor. It stores project metadata, track definitions, curve data, and referenced audio together so the project can be reopened and moved as one unit.

## Which audio formats can I assign to tracks?

The current build supports assigning:

- `wav`
- `ogg`

## Why do I see traction, coasting, and brake if only traction and brake curve sets are editable?

Because the preview system exposes three simulator states, while the current authoring model stores dedicated traction and brake curve sets. In the present build, coasting remains part of the traction-side authoring path.

## Can I preview multiple tracks at the same time?

Yes. The preview engine is designed for layered playback as long as the tracks are audible and have valid assigned audio.

## Are hidden tracks audible?

No. In the current implementation, preview uses tracks that are enabled, not muted, and not hidden.

## Does replacing track audio keep old files in the saved project forever?

No. Save and Save As prune unreferenced audio from the resulting `.msep` package so replaced audio does not continue to accumulate inside the saved file.

## Is there a finished settings page?

No. There is a settings store in the codebase, but there is no finished settings screen in the current user-facing build.

## Which export targets work right now?

The export dialog currently exposes BVE as the active working target. Other listed targets are visible but disabled.

## Should I rely only on export output and skip saving the `.msep` file?

No. The `.msep` file is your editable source project. Exported packages are deliverables, not replacements for the editable master file.
