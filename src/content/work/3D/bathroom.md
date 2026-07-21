---

title: Bathroom
publishDate: 2026-06-17 00:00:00
img: /assets/3D/Bathroom/Bathroom_Recreation_Day.png
img_alt: Bathroom scene recreation created in Unreal Engine as part of a university environment art project.
img_caption: Final daytime bathroom recreation rendered in Unreal Engine.
description: |
    A real-time bathroom recreation built in Unreal Engine from a photographic reference, including custom props and materials.
    
tags:

- Environment Art
- 3D Modeling
- Unreal Engine
- Blender
- Substance Painter
- Substance Designer
- ArchViz

---

<div class="stack gap-4">
    <img 
        src="/assets/3D/Bathroom/Bathroom_Original.png" 
        alt="Original bathroom reference image" 
        style="border-radius: 1.5rem; box-shadow: var(--shadow-md);"
    />
    <p style="text-align: center; font-style: italic; color: var(--gray-400);">
        Original bathroom reference used for the university scene recreation project.
    </p>
</div>

Custom props were modelled, UV mapped, and textured for the final Unreal Engine scene.

<div style="aspect-ratio: 16 / 9; width: 100%; margin-top: 1.5rem; margin-bottom: 2rem;">
    <video 
        controls 
        width="100%" 
        style="border-radius: 1.5rem; box-shadow: var(--shadow-lg);"
    >
        <source src="/assets/3D/Bathroom/Piliczky_Gavin_Vanity.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>

*Turntable of the vanity, sink, countertop, and dressing props.*

<div style="aspect-ratio: 16 / 9; width: 100%; margin-top: 1.5rem; margin-bottom: 2rem;">
    <video
        controls
        width="100%"
        style="border-radius: 1.5rem; box-shadow: var(--shadow-lg);"
    >
        <source src="/assets/3D/Bathroom/Piliczky_Gavin_Shelf.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>

*Turntable of the decorative metal-and-wood wall shelf.*

### Procedural Tile Materials

I created the bathroom's floor and wall tile materials procedurally in Substance Designer. The node graphs generate the repeating patterns and supporting texture maps used in the Unreal Engine environment.

<div class="stack gap-4">
    <img
        src="/assets/3D/Bathroom/Substance_Designer_Floor_Tile_Graph.png"
        alt="Substance Designer node graph and material preview for the bathroom's decorative patterned floor tiles."
    />
    <p style="text-align: center; font-style: italic; color: var(--gray-400);">
        Procedural floor-tile graph, including the generated repeating pattern and material preview.
    </p>
</div>

<div class="stack gap-4">
    <img
        src="/assets/3D/Bathroom/Substance_Designer_Wall_Tile_Graph.png"
        alt="Substance Designer node graph for the bathroom's green wall tile material."
    />
    <p style="text-align: center; font-style: italic; color: var(--gray-400);">
        Procedural wall-tile graph used to generate the green tiled surfaces in the final scene.
    </p>
</div>

### Technical Implementation

- Recreated the layout, lighting, colours, and prop placement from reference.
- Modelled and textured the vanity, heater, light fixture, jar, towel rack, and other supporting assets.
- Authored wood, ceramic, metal, glass, tile, and painted materials, including procedural floor and wall tiles in Substance Designer.
- Assembled, lit, and rendered the environment in Unreal Engine.
