---
title: List Editor
description: Edit traction and brake keyframes in a table-based view.
---

# List Editor

The chart editor is the primary authoring surface, but it is not the only one. Motor Sound Editor also includes a **List View Editor** for table-based keyframe work.

## When to use the list editor

Use the list editor when:

- you want exact numeric values
- the chart feels too dense to read quickly
- you need to compare traction and brake data side by side
- you want to insert or remove points in a more tabular workflow

The list editor is especially useful when the shape is already mostly decided and you are polishing exact values.

## Table layout

The list editor presents two main groups:

- **traction**
- **brake**

Each group is split into columns for:

- speed / volume
- speed / pitch

This lets you compare related data without switching away from the current track.

## Draft editing model

The list editor works on a draft version of the active track's curve data. That matters because it gives you a controlled commit point:

- **Apply** writes the edited draft back into the project
- **Cancel** closes the dialog without keeping the draft changes

This is one of the safest ways to make several numeric adjustments before committing them as a group.

## Editing cells

Cells use numeric inputs. You can change:

- speed values
- pitch values
- volume values

As values change, the app keeps the relevant keyframe lists sorted by speed so the resulting data remains coherent.

## Adding a keyframe from the list editor

The list editor includes an **Add keyframe** action. Use it when you need a new point in a specific traction/brake and pitch/volume context without returning to the chart first.

The add-keyframe panel asks for:

- target kind
- speed
- value

After insertion, the draft is re-sorted by speed.

## Deleting a keyframe from the list editor

The list editor can remove the current row's keyframe through its contextual commands. This is helpful when a point is easier to identify by row than by chart position.

## Sync actions

The list editor includes sync-oriented context actions between traction and brake data. Use these carefully. They are powerful when you want one side to inherit the structure of the other, but they can also overwrite intentional differences if used too early.

## Best practices

- Use the chart to establish shape.
- Use the list editor to polish numbers.
- Apply only after reviewing both traction and brake columns.
- Cancel if you opened the dialog only to inspect current values.

## Related reading

- [Curve Editing](/docs/guide/curve-editing)
- [Project Details and Save](/docs/guide/project-details-and-save)
