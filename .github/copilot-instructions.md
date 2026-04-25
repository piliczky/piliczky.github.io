# AI Coding Assistant Instructions

## Project Overview
This is an Astro-based static portfolio website for a game developer & 3D generalist. It uses content collections to manage work/projects and generates pages dynamically.

## Architecture
- **Framework**: Astro for static site generation
- **Content**: Markdown files in `src/content/work/` with frontmatter (title, description, publishDate, tags, img, img_alt)
- **Routing**: Static pages in `src/pages/`, dynamic work pages via `src/pages/work/[...slug].astro`
- **Components**: Reusable Astro components in `src/components/`, using props and slots
- **Styling**: CSS variables in `src/styles/global.css`, responsive design with media queries
- **Icons**: Custom icon system in `src/components/Icon.astro` and `IconPaths.ts` (adapted from Phosphor Icons)

## Key Patterns
- Use `getCollection('work')` to fetch work items, sort by `publishDate` descending
- Components accept `align` prop ('start' | 'center') for text alignment
- Use `class:list` for conditional CSS classes
- Icons: `<Icon icon="strategy" size="1.33em" />` (see `IconPaths.ts` for available icons)
- Pills for tags: `<Pill>Dev</Pill>`
- Layout: Wrap pages with `<BaseLayout title="..." description="...">`

## Workflows
- **Development**: `npm run dev` (starts dev server at localhost:4321)
- **Build**: `npm run build` (outputs to `./dist/`)
- **Preview**: `npm run preview` (preview build locally)
- **Content**: Add new work by creating `.md` files in `src/content/work/` with required frontmatter schema

## Conventions
- Node.js >=22.12.0 required
- Content schema enforced via Zod in `src/content.config.ts`
- Theme support (light/dark) with CSS variables and `:root.theme-dark`
- Responsive breakpoints: `50em` (800px) for desktop styles
- Background images managed via CSS variables in `BaseLayout.astro`

## Examples
- Adding a work item: Create `src/content/work/new-project.md` with frontmatter matching the schema in `content.config.ts`
- Creating a component: Use TypeScript interfaces for props, export from `src/components/`
- Styling: Use CSS variables like `--gray-0`, `--accent-regular`; apply responsive styles with `@media (min-width: 50em)`

Reference: `src/content.config.ts`, `src/components/Hero.astro`, `src/styles/global.css`</content>
<parameter name="filePath">c:\piliczky.github.io\smoggy-solstice\.github\copilot-instructions.md