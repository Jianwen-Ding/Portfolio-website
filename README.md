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
public/Resources/          Images and logos (served as-is)
src/
  main.jsx                 Client entry; hydrates the prerendered markup
  entry-server.jsx         Build-time render used by prerender.js
  App.jsx                  Page skeleton: hero, nav, Experience, Projects, Game Jams
  asset.js                 Resolves resource paths against the deployment base
  data/portfolio.js        All site content lives here
  components/
    Hero.jsx               Portrait, intro and the gradient field
    ProjectMarquee.jsx     Moving strip of the work along the hero's bottom
    NavBar.jsx             Sticky nav with the "to top" control
    ExperienceEntry.jsx    Logo + name + detail for one role
    SectionHeader.jsx      The ruled band between sections
    ProjectGrid.jsx        Two-column grid, plus keyboard navigation
    ProjectCard.jsx        Grid tile that expands in place
    InfoBlocks.jsx         List / paragraph / image / video / link blocks
  styles/style.css         The whole stylesheet
```

## How the page behaves

**Nav.** Sits at the bottom of the hero and sticks to the top of the viewport
once the hero scrolls away (`position: sticky`). The "to top" chevron is
revealed by an `IntersectionObserver` watching the hero.

**Project cards.** Each card is a `<details>` element. Opening one sets
`grid-column: 1 / -1` so it expands to a full-width row where it already sat,
and the grid reflows around it — the page stays scrollable and the other cards
stay put. Cards within a grid share a `name`, which makes each grid an exclusive
accordion natively. Nothing scrolls on open — the card grows where it sits and
your position on the page does not change.

**Game jams** are their own section and grid below Projects, with their own
accordion group — opening a jam does not collapse an open project.

**The marquee** runs along the bottom of the hero, between the intro and the
nav. Its track holds the project list twice and slides exactly -50%, so the loop
is seamless; the animation is pure CSS, so it runs with scripting off. It pauses
on hover and on keyboard focus, since the tiles are links to each project. The
second copy is `aria-hidden` and `tabindex="-1"`, or every project would be
announced and tabbed through twice. `prefers-reduced-motion` stops it entirely.

## Keyboard

The whole site is operable without a mouse. A skip link is the first tab stop
and jumps past the hero into the content. Everything focusable draws a visible
ring.

Tab and Enter work with scripting off, since the cards are native `<details>`.
Script adds the rest, as a progressive enhancement, while focus is on a card
header:

| Key | Action |
| --- | --- |
| `Enter` / `Space` | Open or close the card |
| `Arrow` keys | Step to the previous or next card in the section |
| `Home` / `End` | Jump to the first or last card in the section |
| `Escape` | Close the card you are in, returning focus to its header |

The marquee tiles are ordinary links in the tab order, and focusing one pauses
the strip so it can be followed.

Arrows walk cards in document order rather than by geometry, because an open
card spans the full row and makes the grid irregular. They only steer while
focus is on a card header, so they still scroll normally while you are reading
an opened card.

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
works, the skip link works, and the "to top" control is a plain `#top` anchor
with CSS smooth scroll.
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

The `tab` / `row` / `cell` / `list` / `p` / `img` / `video` / `link` helpers at
the top of the file build the detail panel: a tab holds rows, a row holds cells,
and a cell holds blocks. Tabs render stacked under sub-headings (a single tab
renders with no heading), so the grouping stays useful for organising long
entries.

Bullet points go through `list`, which renders a real `<ul>`. Pass plain strings,
or `item(parent, ...children)` where a point needs sub-points — that nests a
second `<ul>` inside the `<li>`:

```js
list(
  'A flat point.',
  item('A point with detail under it.', 'First detail.', 'Second detail.'),
)
```

Resource paths are relative to `public/`, so `Resources/Foo.png` refers to
`public/Resources/Foo.png`.

## Deploying

`npm run build` writes a self-contained site to `dist/`. `vite.config.js` sets
`base: './'`, so it works from a domain root, a GitHub Pages project sub-path,
or a local `file://` open.

If this repo is published with GitHub Pages serving the branch root, that will
need to change to publishing the `dist/` output (either via a GitHub Actions
Pages workflow or by pushing `dist/` to a `gh-pages` branch).
