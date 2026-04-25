---
title: Assign Audio and Preview
description: Build a stronger track layer and test it with simulator-state preview.
---

# Assign Audio and Preview

This tutorial focuses on the part of the workflow that most directly answers the question: "Does this layer actually behave the way I expect?"

## Goal

You will:

- assign or replace audio on a track
- configure the track so it is clearly identifiable
- preview the result across multiple simulator states

## Step 1: Prepare the track

1. Activate the target track.
2. Give it a descriptive name.
3. Assign a visible color.

This makes later comparisons much easier when several layers are present.

## Step 2: Assign or replace the file

1. In Track Details, use the **File** picker.
2. Choose the source audio.
3. Confirm the displayed file name changes.

If you are replacing a previous file, remember that the saved project package will keep only referenced audio after save/save-as packaging.

## Step 3: Build a preview-friendly curve

Do not try to perfect the curve yet. Instead, create a shape that is easy to hear:

- make the pitch rise clearly with speed
- keep volume audible across part of the range
- avoid leaving the entire curve at zero volume

## Step 4: Check traction

1. Switch to **Traction**.
2. Set a low speed and preview.
3. Raise speed and preview again.

Listen for:

- whether pitch evolves
- whether volume remains audible
- whether the assigned file is the expected one

## Step 5: Check coasting

Switch to **Coasting** and preview again. In the current build, coasting follows the traction-side authoring path, so use this step to judge listening behavior rather than to expect a separate dedicated curve set.

## Step 6: Check brake

Switch to **Brake** and preview again. If the result is too similar or too different, you now know whether to edit the brake curve set separately.

## Step 7: Isolate the layer if needed

If the project contains multiple tracks:

- mute other layers temporarily
- hide other layers if the chart becomes visually crowded

This makes it much easier to judge one layer in isolation.

## Next tutorial

Continue with [Refine Curves and Export](/docs/tutorials/refine-curves-and-export).
