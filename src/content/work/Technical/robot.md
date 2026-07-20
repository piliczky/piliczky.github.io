---
title: Robot VFX Integration
publishDate: 2024-11-10 00:00:00
img: /assets/Tech/Robot/Robot.png
img_alt: 3D Robot model integrated into a real-world warehouse environment.
description: |
  A full-pipeline VFX shot combining live-action cinematography, matchmoving, 3D modelling, animation, and compositing in Nuke.
tags:
  - Technical
  - Rigging
  - VFX
  - Nuke
---

### Animation & Compositing

* **Camera Tracking:** Establishing a stable 3D point cloud from the handheld footage.
* **Lighting Match:** Aligning the CG lighting to the natural light of the warehouse bay.
* **Shadow Catching:** Integrating the robot into the floor geometry to ground it in the scene.

![Still frame of the robot model showing textures and lighting integration](/assets/Tech/Robot/Robot.png)

*Robot model, texture maps, and presentation views created for the VFX shot.*

### Final VFX Shot

<div style="aspect-ratio: 16 / 9; width: 100%; margin-top: 1.5rem; margin-bottom: 2rem;">
    <video 
        controls 
        width="100%" 
        style="border-radius: 1.5rem; box-shadow: var(--shadow-lg);"
    >
        <source src="/assets/Tech/Robot/Robot_Comp.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>

*Final composite of the animated robot in the tracked warehouse footage.*

### Summary

- Captured the live-action plate and matchmoved the camera in Nuke.
- Modelled in Maya and textured in Substance Painter.
- Animated, lit, shadow-matched, and composited the robot into the shot.
