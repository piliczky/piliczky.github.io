---
title: Robot VFX Integration
publishDate: 2024-11-10 00:00:00
img: /assets/Robot/Robot.png
img_alt: 3D Robot model integrated into a real-world warehouse environment.
description: |
  Robot VFX Integration
  A full-pipeline VFX project involving live-action cinematography, matchmoving, 3D modeling, and compositing in Nuke.
tags:
  - Technical
  - Rigging
  - VFX
  - Nuke
---

This project was a comprehensive exercise in the VFX pipeline, focusing on Integrating a CG element into live-action footage. The shot features a robot animated within a warehouse entrance bay at the TAFE SA College of the Arts.

### Full Pipeline Execution

The process began with cinematography, using a high-end film camera supplied by TAFE SA to capture the base plate. I then moved into **Nuke** for the matchmoving stage, tracking the camera motion to ensure the 3D space accurately reflected the real-world environment. 

The robot itself was modeled in **Maya** and textured in **Substance Painter**. While this project represents an earlier stage in my 3D modeling journey, it was critical for learning how to balance asset detail with the requirements of a compositing workflow.

### Animation & Compositing

After the 3D assets were finalized, I handled the animation and final compositing back in Nuke. This involved:
* **Camera Tracking:** Establishing a stable 3D point cloud from the handheld footage.
* **Lighting Match:** Aligning the CG lighting to the natural light of the warehouse bay.
* **Shadow Catching:** Integrating the robot into the floor geometry to ground it in the scene.

![Still frame of the robot model showing textures and lighting integration](/assets/Robot/Robot.png)

### Final VFX Shot

The final result is a seamless integration of 3D animation and live-action cinematography. This project served as a foundational milestone in understanding how 3D assets interact with real-world optics and film grain.

<div style="aspect-ratio: 16 / 9; width: 100%; margin-top: 1.5rem; margin-bottom: 2rem;">
    <video 
        controls 
        width="100%" 
        style="border-radius: 1.5rem; box-shadow: var(--shadow-lg);"
    >
        <source src="/assets/Robot/Robot_Comp.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>