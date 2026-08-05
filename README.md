# Jianwen Ding — Portfolio Website

A React (Vite) rewrite of the original static site. The layout, styling and
interactions are unchanged; only the implementation moved from hand-written
HTML plus two DOM-manipulating scripts to React components driven by a single
content file.

## Running it

```bash
npm install
npm run dev      # dev server with hot reload
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Layout of the source

```
index.html                 Vite entry point
public/Resources/          Images, logos, resume PDF (served as-is)
src/
  main.jsx                 React entry point
  App.jsx                  Page skeleton: sidebar + About / Experience / Projects / Game Jams
  asset.js                 Resolves resource paths against the deployment base
  data/portfolio.js        All site content lives here
  components/
    Menu.jsx               Fixed left sidebar
    DragDown.jsx           Collapsible menu drawers (was Scripts/dragDown.js)
    Project.jsx            Project header card
    ProjectInfo.jsx        Tabbed sliding info panel (was Scripts/projectNav.js)
    InfoBlocks.jsx         Paragraph / image / video / link blocks inside a tab
  styles/style.css         The original stylesheet
```

## Editing content

Almost every change is a `src/data/portfolio.js` change — no component edits
needed.

A project is one object in the `experience`, `projects` or `jams` array:

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

The `tab` / `row` / `cell` / `p` / `img` / `video` / `link` helpers at the top
of the file build the tabbed panel: a tab holds rows, a row holds cells, and a
cell holds blocks. Tab buttons size themselves evenly, so adding a tab needs no
percentage bookkeeping.

The sidebar drawers come from `menuSections` in the same file; each drawer is a
list of rows so the original grid groupings (three across, then two across) are
preserved.

Resource paths are relative to `public/`, so `Resources/Foo.png` refers to
`public/Resources/Foo.png`.

## Deploying

The site is now a build step rather than files served straight from the repo
root: `npm run build` writes a self-contained site to `dist/`.

`vite.config.js` sets `base: './'`, so `dist/` works from any path — a domain
root, a GitHub Pages project sub-path, or a local `file://` open.

If this repo is published with GitHub Pages serving the branch root, that will
need to change to publishing the `dist/` output (either via a GitHub Actions
Pages workflow or by pushing `dist/` to a `gh-pages` branch).
