---
title: SWARMEX
publishDate: 2026-04-25 00:00:00
img: /assets/Games/SWARMEX/logo.jpg
img_alt: Official logo for SWARMEX, a retro-style strategy hybrid.
description: |
  A commercially released tower-defence, RTS, and incremental hybrid built in GameMaker around automation and large-scale swarm management.
tags:
  - GameMaker Studio 2
  - Strategy / RTS
  - Automation
  - Tower Defense
  - Game Development
---

<div class="cta-group" style="display: flex; justify-content: center; gap: 1rem; margin-top: -1rem; margin-bottom: 2rem; flex-wrap: wrap;">
    <a href="https://store.steampowered.com/app/4313330/Swarmex/" target="_blank" style="text-decoration: none;">
        <button style="background: #a333c8; color: white; border: 1px solid #a333c8; padding: 0.6rem 1.5rem; border-radius: 4px; cursor: pointer; font-weight: bold; display: flex; align-items: center; gap: 8px; transition: background 0.2s ease, transform 0.2s ease;" onmouseover="this.style.background='#c04ad9'; this.style.transform='scale(1.05)'" onmouseout="this.style.background='#a333c8'; this.style.transform='scale(1)'">
            VIEW ON STEAM
        </button>
    </a>
    <a href="https://tangy-orange-games.itch.io/swarmex" target="_blank" style="text-decoration: none;">
        <button style="background: #a333c8; color: white; border: 1px solid #a333c8; padding: 0.6rem 1.5rem; border-radius: 4px; cursor: pointer; font-weight: bold; transition: background 0.2s ease, transform 0.2s ease;" onmouseover="this.style.background='#c04ad9'; this.style.transform='scale(1.05)'" onmouseout="this.style.background='#a333c8'; this.style.transform='scale(1)'">
            PLAY ON ITCH.IO
        </button>
    </a>
</div>

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

*Official trailer showing the automated combat, building systems, and progression loop.*

### Art & Asset Breakdown

<div class="stack gap-4">
    <img 
        src="/assets/Games/SWARMEX/Art.png" 
        alt="Artistic breakdown of SWARMEX units and UI" 
        style="border-radius: 1.5rem; box-shadow: var(--shadow-md);"
    />
    <p style="text-align: center; font-style: italic; color: var(--gray-400);">
        Asset breakdown: Automated ships, defensive towers, and resource UI.
    </p>
</div>

<div class="stack gap-4" style="align-items: center;">
    <img 
        src="/assets/Games/SWARMEX/verticalcapsule.png" 
        alt="SWARMEX Vertical Capsule Art" 
        style="width: 100%; max-width: 400px; border-radius: 1.5rem; box-shadow: var(--shadow-md);"
    />
    <p style="text-align: center; font-style: italic; color: var(--gray-400);">
        Vertical capsule artwork created for the game's store listing.
    </p>
</div>

### Technical Implementation

* **Zero-Micro AI:** Developed custom autonomous behaviors for friendly swarms, ensuring they react intelligently to threats without player input.
* **Incremental Scalability:** Engineered a math-heavy upgrade system that handles exponential power growth while maintaining game balance.
* **Efficient Swarm Rendering:** Optimized GameMaker’s drawing pipeline to handle hundreds of active entities, ensuring smooth performance as the player’s automation grows.
* **Systems Architecture:** Built a modular building system that allows for easy expansion of new tower types and resource loops.

**Release:** Published on Steam and Itch.io.
