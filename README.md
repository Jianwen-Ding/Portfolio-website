# Jianwen Ding — Portfolio Website

A React (Vite) portfolio site: hero, experience list, and an expandable project
grid. Built from the layout wireframes — one adaptive page that works on phones
and with JavaScript disabled.

## Running it

```bash
npm install
npm run dev      # dev server with hot reload
npm run build    # production build into dist/ (includes prerendering)
npm run preview  # serve the production build locally
```

## Layout of the source

```
index.html                 Vite entry point
prerender.js               Bakes rendered markup into dist/index.html after build
public/Resources/          Images, logos, resume PDF (served as-is)
src/
  main.jsx                 Client entry; hydrates the prerendered markup
  entry-server.jsx         Build-time render used by prerender.js
  App.jsx                  Page skeleton: hero, nav, Experience, Projects
  asset.js                 Resolves resource paths against the deployment base
  data/portfolio.js        All site content lives here
  components/
    Hero.jsx               Portrait, intro and the gradient field
    NavBar.jsx             Sticky nav with the "to top" control
    ExperienceEntry.jsx    Logo + name + detail for one role
    ProjectGrid.jsx        Two-column grid
    ProjectCard.jsx        Grid tile that expands in place
    InfoBlocks.jsx         Paragraph / image / video / link blocks
  styles/style.css         The whole stylesheet
```

## How the page behaves

**Nav.** Sits at the bottom of the hero and sticks to the top of the viewport
once the hero scrolls away (`position: sticky`). The "to top" chevron is
revealed by an `IntersectionObserver` watching the hero.

**Project cards.** Each card is a `<details>` element. Opening one sets
`grid-column: 1 / -1` so it expands to a full-width row where it already sat,
and the grid reflows around it — the page stays scrollable and the other cards
stay put. All ten cards share `name="projects"`, which makes the grid an
exclusive accordion natively. Script only adds the smooth scroll to a freshly
opened card.

**Game jams** share the projects grid; their cards carry a "Game Jam" tag.

## Mobile

Everything is one responsive page — no separate mobile build. Below 900px the
hero stacks, the experience layout and project grid collapse to a single column,
content rows stack vertically, and the "to top" control becomes a floating
button (the nav has no spare room at that width).

## Working without JavaScript

`npm run build` renders the app to static HTML and injects it into
`dist/index.html`, so all content is present before any script runs. React then
hydrates that same markup.

With JavaScript off the site is fully usable: every project and experience entry
is readable, card expansion works (native `<details>`), the exclusive accordion
works, and the "to top" control is a plain `#top` anchor with CSS smooth scroll.
The stylesheet keeps script-dependent affordances visible by default and only
hides them under a `.js` class, which a one-line inline script adds — so nothing
ends up invisible-but-required for unscripted visitors.

The build has three steps: the client bundle, an SSR bundle into `dist-ssr/`,
then `prerender.js`. Only `dist/` needs deploying.

## Editing content

Almost every change is a `src/data/portfolio.js` change — no component edits
needed.

A project is one object in the `projects` or `jams` array:

```js
{
  id: 'strand',                     // anchor target, e.g. #strand
  image: { src: 'Resources/StrandTitle.png', alt: '...' },
  title: 'Strand',
  subtitle: 'A survival rougelike about fending off zombies.',
  meta: [{ label: 'Time Span:', value: '2022-2024' }],
  links: [{ type: 'itch', href: '...' }, { type: 'github', href: '...' }],
  tabs: [ tab('Overview', row(cell('50%', p('...')), cell('50%', img('...')))) ],
}
```

The `tab` / `row` / `cell` / `p` / `img` / `video` / `link` helpers at the top of
the file build the detail panel: a tab holds rows, a row holds cells, and a cell
holds blocks. Tabs render stacked under sub-headings (a single tab renders with
no heading), so the grouping stays useful for organising long entries.

Resource paths are relative to `public/`, so `Resources/Foo.png` refers to
`public/Resources/Foo.png`.

## Deploying

`npm run build` writes a self-contained site to `dist/`. `vite.config.js` sets
`base: './'`, so it works from a domain root, a GitHub Pages project sub-path,
or a local `file://` open.

If this repo is published with GitHub Pages serving the branch root, that will
need to change to publishing the `dist/` output (either via a GitHub Actions
Pages workflow or by pushing `dist/` to a `gh-pages` branch).
