---
title: The Fortune Taker
publishDate: 2026-04-25 00:00:00
img: /assets/Fortune_Taker/Fortune_Taker_Title.jpg
img_alt: The unsettling title screen for The Fortune Taker.
description: |
  The Fortune Taker
  A high-stakes, single-player tarot and dice game developed for the Flinders GRL Spooky Game Jam 2025. I served as the Lead Programmer and Concept Designer.
tags:
  - Game Development
  - Lead Programmer
  - Unreal Engine
  - Blueprints
  - Rapid Prototyping
---

<p style="text-align: center; font-style: italic; color: var(--gray-400); margin-top: -1.5rem; margin-bottom: 2rem;">
    Drawn by Arien Van Stralen
</p>

<div class="cta" style="display: flex; justify-content: center; margin-top: -1rem; margin-bottom: 2rem;">
    <a href="https://millie-doherty.itch.io/the-fortune-taker" target="_blank" style="text-decoration: none;">
        <button style="background: #a333c8; color: white; border: none; padding: 0.6rem 2rem; border-radius: 999px; cursor: pointer; font-weight: bold; transition: background 0.2s ease, transform 0.2s ease;" onmouseover="this.style.background='#c04ad9'; this.style.transform='scale(1.05)'" onmouseout="this.style.background='#a333c8'; this.style.transform='scale(1)'">
            Play on Itch.io
        </button>
    </a>
</div>

### Project Overview

**The Fortune Taker** is a psychological horror card game developed under a strict two-week deadline for the Flinders GRL: Spooky Game Jam 2025. I designed the initial concept and served as the Lead Programmer, focusing on rapid prototyping and the creation of the game's core interactive systems.

Players find themselves in the "Space Between Hours," forced into a cruel game of tarot and bone-casting by the Foremother. Survival depends on tactical planning and the ability to turn a twisted game of fate back on its creator.

### Official Trailer

<video controls preload="metadata" playsinline style="width:100%; max-width:960px; border-radius: 1.5rem; box-shadow: var(--shadow-lg); margin-top: 1.5rem;">
    <source src="/assets/Fortune_Taker/thefortunetakeroverviewreelc.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
<p style="text-align: center; font-style: italic; color: var(--gray-400); margin-top: -2rem; margin-bottom: 2rem;">
    Artwork by Arien Van Stralen
</p>

### Technical Implementation

My primary focus was building the underlying systems that defined the game's unique mechanics. Utilizing **Unreal Engine Blueprints**, I developed:

* **Bone-Casting Physics:** A system for rolling "bones" onto a pentagram board where landing locations dynamically activate specific card triggers.
* **Modular Card Framework:** A flexible architecture that allowed for rapid iteration of card abilities and effects.
* **State Management:** Handling the complex turn logic between the player and the Foremother’s AI.
* **Narrative Integration:** Implementing a dialogue system that triggers unique responses from the Foremother based on gameplay events.

### How to Play

To see these systems in action, including the health mechanics (doll pins and crystal ball flames) and the re-roll logic, view the tutorial below:

<div style="aspect-ratio: 16 / 9; width: 100%; margin-top: 1.5rem;">
    <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/Yd2Qa3Rk9FQ" 
        title="The Fortune Taker Gameplay Tutorial" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen 
        style="border-radius: 1.5rem; box-shadow: var(--shadow-lg);">
    </iframe>
</div>

### The Team

Managing scope was critical for a two-week jam. I worked closely with a multidisciplinary team to ensure technical systems supported the creative vision:

* **Gavin Piliczky:** Lead Programming, Concept Design, Special Effects.
* **Dennis Feklistov:** Additional Programming, Sound Design, Music.
* **Millie Doherty:** Object Modeling, Texturing, UI Design.

* **Arien Van Stralen:** Tarot Card Illustration.
* **Alex Konstandinou:** Character Modeling.
* **Edith Morris:** Narrative and Dialogue.

---

> **Content Warning:** This project contains depictions of gore and an unsettling atmosphere intended to be frightening.