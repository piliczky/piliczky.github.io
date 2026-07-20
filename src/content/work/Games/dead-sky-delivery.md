---
title: Dead Sky Delivery
publishDate: 2026-07-20 00:00:00
img: /assets/Games/Dead_Sky_Delivery/Main_Title_Image.png
img_alt: Dead Sky Delivery title artwork showing a delivery blimp flying above a floating city.
description: |
  A team-built aerial delivery game developed as a university project. As Lead Programmer, I created the blimp controls and combat, initial UI, and the data-driven map and quest systems.
tags:
  - Game Development
  - Lead Programmer
  - Systems Design
  - Team Project
---

### Gameplay

<div style="aspect-ratio: 16 / 9; width: 100%; margin-top: 1.5rem;">
    <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/1rCdzjN44Jc"
        title="Dead Sky Delivery gameplay footage"
        frameborder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        style="border-radius: 1.5rem; box-shadow: var(--shadow-lg);">
    </iframe>
</div>

*Gameplay from the university project demo.*

### Project Overview

Dead Sky Delivery was created by a multidisciplinary team of around ten students. After pitching and selecting a concept, the class split into two development groups and I was elected Lead Programmer for this project.

The game puts the player in control of a blimp travelling between floating locations, taking delivery quests from characters and defending the aircraft along the way. My work focused on turning that core loop into connected, playable systems while collaborating with the project's designers, programmers, 3D artists, and illustrators.

<div class="stack gap-4">
    <img
        src="/assets/Games/Dead_Sky_Delivery/Game_Play1.PNG"
        alt="The player's blimp flying through the floating city in Dead Sky Delivery."
    />
    <p style="text-align: center; font-style: italic; color: var(--gray-400);">
        Blimp flight through the floating city environment.
    </p>
</div>

<div class="stack gap-4">
    <img
        src="/assets/Games/Dead_Sky_Delivery/Game_Play_2.PNG"
        alt="Combat gameplay from Dead Sky Delivery with the blimp firing its weapons."
    />
    <p style="text-align: center; font-style: italic; color: var(--gray-400);">
        Aerial combat and blimp weapon systems.
    </p>
</div>

### My Contribution

* **Blimp Controls:** Programmed the player's flight controls and movement behaviour.
* **Combat:** Implemented the blimp's shooting mechanics.
* **User Interface:** Built the initial UI implementation that connected the game's core systems.
* **Map Architecture:** Designed a data-driven map system, using large data tables to define locations, characters, and their relationships.
* **Quest System:** Created the quest flow for collecting delivery jobs, tracking objectives, and locating destinations on the map.

### Data-Driven Map & Quest Systems

The map and quest features contain the largest share of my code for the project. I structured them around data tables so each map point and NPC quest giver could be configured as an entry rather than requiring one-off logic. This made the content easier for the team to extend and kept travel, quest selection, destinations, rewards, and map markers connected through a shared structure.

<div class="stack gap-4">
    <img
        src="/assets/Games/Dead_Sky_Delivery/Map_System.png"
        alt="Dead Sky Delivery map showing named destinations, route lines, map markers, and the active quest list."
    />
    <p style="text-align: center; font-style: italic; color: var(--gray-400);">
        The map connects destinations, NPCs, active delivery routes, and quest tracking.
    </p>
</div>

<div class="stack gap-4">
    <img
        src="/assets/Games/Dead_Sky_Delivery/NPC_QuestSystem.png"
        alt="Dead Sky Delivery NPC dialogue screen offering several delivery quests with items, destinations, and rewards."
    />
    <p style="text-align: center; font-style: italic; color: var(--gray-400);">
        NPC quest selection driven by configurable delivery requirements, destinations, and rewards.
    </p>
</div>

### Demo Outcome

The team presented a playable demo of Dead Sky Delivery at AVCon. Showing the project to a public audience was a rewarding milestone and a valuable opportunity to see players interact with the systems we had built together.
