---
title: SWARMEX
publishDate: 2026-04-25 00:00:00
img: /assets/SWARMEX/logo.jpg
img_alt: Official logo for SWARMEX, a retro-style strategy hybrid.
description: |
  SWARMEX
  A unique hybrid of Tower Defense, RTS, and Incremental gameplay. Developed in GameMaker, this project focuses on high-level strategy, automation, and large-scale swarm management without the friction of micromanagement.
tags:
  - GameMaker Studio 2
  - Strategy / RTS
  - Automation
  - Tower Defense
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

**SWARMEX** is a strategic space-defense hybrid that challenges the traditional click-heavy RTS model. Published on Steam and Itch.io, the game focuses on macro-management and automation, allowing players to build massive defensive networks and automated swarms to combat escalating threats.

The project was an exploration in balancing deep, incremental systems with a hands-off design philosophy: ensuring that the complexity comes from your build order and infrastructure rather than your reaction speed.

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

While the systems are complex, the aesthetic is rooted in authentic 8-bit styling. I designed the visual language to clearly communicate unit roles and resource flows at a glance, which is critical for a game focused on automation.

<div class="stack gap-4">
    <img 
        src="/assets/SWARMEX/Art.png" 
        alt="Artistic breakdown of SWARMEX units and UI" 
        style="border-radius: 1.5rem; box-shadow: var(--shadow-md);"
    />
    <p style="text-align: center; font-style: italic; color: var(--gray-400);">
        Asset breakdown: Automated ships, defensive towers, and resource UI.
    </p>
</div>

The Vertical Capsule art below showcases the assets developed specifically for the game's store presence:

<div class="stack gap-4" style="align-items: center;">
    <img 
        src="/assets/SWARMEX/verticalcapsule.png" 
        alt="SWARMEX Vertical Capsule Art" 
        style="width: 100%; max-width: 400px; border-radius: 1.5rem; box-shadow: var(--shadow-md);"
    />
</div>

### Technical Implementation

I built SWARMEX with a focus on robust backend logic and efficient data management:

* **Zero-Micro AI:** Developed custom autonomous behaviors for friendly swarms, ensuring they react intelligently to threats without player input.
* **Incremental Scalability:** Engineered a math-heavy upgrade system that handles exponential power growth while maintaining game balance.
* **Efficient Swarm Rendering:** Optimized GameMaker’s drawing pipeline to handle hundreds of active entities, ensuring smooth performance as the player’s automation grows.
* **Systems Architecture:** Built a modular building system that allows for easy expansion of new tower types and resource loops.

SWARMEX demonstrates my ability to design complex, interlinked systems and translate high-level technical requirements into a cohesive, commercially released product.