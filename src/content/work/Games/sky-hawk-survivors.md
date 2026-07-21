---
title: Sky Hawk Survivors
publishDate: 2026-07-21 00:00:00
img: /assets/Games/Sky_Hawk_Survivors/SHS_Title.png
img_alt: A helicopter defending a procedurally generated city from invading UFOs in Sky Hawk Survivors.
description: |
  A helicopter combat game developed in Unreal Engine 5 over approximately six months, featuring flight controls, state-driven UFO AI, procedural city generation, destructible buildings, automated turrets, and a grappling hook.
tags:
  - Game Development
  - Unreal Engine 5
  - Blueprints
  - Systems Design
  - Procedural Generation
---

### Systems Breakdown

<div style="aspect-ratio: 16 / 9; width: 100%; margin-top: 1.5rem;">
    <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/FERPhgX0Fwo"
        title="Sky Hawk Survivors gameplay and systems breakdown"
        frameborder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        style="border-radius: 1.5rem; box-shadow: var(--shadow-lg);">
    </iframe>
</div>

*A gameplay demonstration and technical breakdown of the systems developed for Sky Hawk Survivors.*

### Project Overview

Sky Hawk Survivors is a personal project I developed in my spare time over approximately six months while studying. The player pilots an armed helicopter and defends a city from an invading UFO force, supported by automated friendly turrets.

I programmed all gameplay systems using Unreal Engine Blueprints and created the primary helicopter model. The project allowed me to combine vehicle controls, combat, artificial intelligence, procedural generation, physics interactions, and destructible environments in one playable prototype.

### Gameplay Systems

* **Helicopter Flight:** Built responsive flight controls covering lift, pitch, rotation, stabilisation, and main and rear propeller behaviour.
* **Weapons & Targeting:** Implemented machine guns, missiles, weapon switching, crosshair targeting, and enemy tracking.
* **Enemy UFO AI:** Created state-machine behaviour that allows UFOs to attack both the city and the player's helicopter.
* **Friendly Turrets:** Developed automated defensive turrets that acquire targets and shoot down attacking UFOs.
* **Destructible Buildings:** Added city structures that can be damaged and destroyed during an invasion.
* **Procedural City:** Used Unreal Engine 5 Procedural Content Generation to create a city system that can be placed and reshaped in the editor.
* **Grappling Hook:** Created a physics-based system for collecting, carrying, and moving objects with the helicopter.
* **Crash & Death Logic:** Implemented collision detection and player-death behaviour for severe crashes.

### Blueprint Implementation

<div class="stack gap-4">
    <img
        src="/assets/Games/Sky_Hawk_Survivors/SHS_Blueprint_Code.png"
        alt="Colour-coded Unreal Engine Blueprint overview showing the connected flight, propeller, weapons, targeting, AI, and crash systems in Sky Hawk Survivors."
    />
    <p style="text-align: center; font-style: italic; color: var(--gray-400);">
        Blueprint overview of the connected flight, combat, targeting, and crash systems.
    </p>
</div>

### Credits

* **Gavin Piliczky:** Game design, Blueprint programming, gameplay systems, and primary helicopter model.
* **Tom Walker:** Darker green helicopter and green turret models.
