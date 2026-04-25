---
title: SWARMEX
publishDate: 2026-04-25 00:00:00
img: /assets/SWARMEX/logo.jpg
img_alt: Official logo for SWARMEX, a retro-style space shooter.
description: |
  SWARMEX
  A fast-paced, retro-inspired arcade shooter developed in GameMaker Studio 2. This project served as an exploration of procedural enemy swarming and tight arcade-style movement mechanics.
tags:
  - GameMaker Studio 2
  - Steam Published
  - GML
  - Retro Arcade
---

<div class="cta-group" style="display: flex; justify-content: center; gap: 1rem; margin-top: -1rem; margin-bottom: 2rem; flex-wrap: wrap;">
    <a href="https://store.steampowered.com/app/4313330/Swarmex/" target="_blank" style="text-decoration: none;">
        <button style="background: #1b2838; color: #66c0f4; border: 1px solid #66c0f4; padding: 0.6rem 1.5rem; border-radius: 4px; cursor: pointer; font-weight: bold; display: flex; align-items: center; gap: 8px; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            VIEW ON STEAM
        </button>
    </a>
    <a href="https://tangy-orange-games.itch.io/swarmex" target="_blank" style="text-decoration: none;">
        <button style="background: #4040e0; color: white; border: none; padding: 0.6rem 1.5rem; border-radius: 4px; cursor: pointer; font-weight: bold; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            PLAY ON ITCH.IO
        </button>
    </a>
</div>

### Project Overview

**SWARMEX** is a high-energy space shooter that pays homage to the classic arcade era while utilizing modern development techniques in **GameMaker Studio 2**. Now published on Steam and Itch.io, the project represents a complete development cycle from initial concept to commercial release.

The core of the project focused on creating "the swarm"—an efficient enemy AI system that allows for dozens of projectiles and ships on screen simultaneously without performance dips, maintaining a smooth 60FPS experience.

### Official Trailer

<div style="aspect-ratio: 16 / 9; width: 100%; margin-top: 1.5rem; margin-bottom: 2rem;">
    <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/QlJw3tUxEsA" 
        title="SWARMEX Official Trailer" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen 
        style="border-radius: 1.5rem; box-shadow: var(--shadow-lg);">
    </iframe>
</div>

### Art & Asset Breakdown

For SWARMEX, I wanted to capture a distinct 8-bit aesthetic while using modern effects. Below is a breakdown of the various sprites and UI elements I designed for the project.

<div class="stack gap-4">
    <img 
        src="/assets/SWARMEX/Art.png" 
        alt="Artistic breakdown of SWARMEX sprites and UI" 
        style="border-radius: 1.5rem; box-shadow: var(--shadow-md);"
    />
    <p style="text-align: center; font-style: italic; color: var(--gray-400);">
        Asset breakdown: Ships, projectiles, and UI components.
    </p>
</div>

The "Vertical Capsule" art below showcases the assets developed specifically for the game's store presence:

<div class="stack gap-4" style="align-items: center;">
    <img 
        src="/assets/SWARMEX/verticalcapsule.png" 
        alt="SWARMEX Vertical Capsule Art" 
        style="width: 100%; max-width: 400px; border-radius: 1.5rem; box-shadow: var(--shadow-md);"
    />
</div>

### Technical Implementation

Leveraging my 15-year background in IT, I focused on several key GML systems to ensure high technical performance:
* **Dynamic Swarm AI:** Using vector-based movement to allow enemies to flock and surround the player.
* **Object Pooling:** Efficiently managing laser and explosion objects to ensure the game remains lightweight.
* **Custom Particle Systems:** Building retro-style "screen-shake" and debris effects to add "juice" to the combat.
* **Controller Support:** Implementing a seamless input system that switches between keyboard and gamepad on the fly.

SWARMEX was an exercise in balancing speed and functionality, proving that even with a minimalist aesthetic, the underlying technical systems must be robust to provide a satisfying player experience.