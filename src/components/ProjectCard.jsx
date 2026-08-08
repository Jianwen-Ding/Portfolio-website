import { asset } from '../asset.js';
import FlatContent, { ExternalLinks } from './InfoBlocks.jsx';

// Boxed plus/minus. The vertical stroke collapses away when the card opens, so
// the same glyph reads as "expand" closed and "shrink" open.
function ToggleGlyph() {
  return (
    <svg className="card__glyph" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="1.5" y="1.5" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <line x1="6.5" y1="12" x2="17.5" y2="12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line
        className="card__glyphStem"
        x1="12"
        y1="6.5"
        x2="12"
        y2="17.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

// A grid tile that expands in place into a full-width detail panel.
//
// Built on <details>, so open/close is entirely native: it works with
// JavaScript disabled, and cards sharing a `name` form an exclusive accordion
// without any state. Nothing scrolls on open — the card grows where it sits and
// the reader's position stays put.
export default function ProjectCard({ project, group }) {
  return (
    <details className="card" name={group} id={project.id}>
      <summary className="card__summary">
        <span className="card__titleRow">
          <span className="card__title">{project.title}</span>
          <ToggleGlyph />
        </span>

        <span className="card__thumb">
          <img src={asset(project.image.src)} alt={project.image.alt} loading="lazy" />
        </span>

        <span className="card__subtitle">{project.subtitle}</span>
      </summary>

      <div className="card__detail">
        <div className="card__meta">
          {project.meta.map((entry) => (
            <p key={entry.label} className="card__metaLine">
              <b>{entry.label}</b> {entry.value}
            </p>
          ))}
          <ExternalLinks links={project.links} />
        </div>

        <FlatContent tabs={project.tabs} />
      </div>
    </details>
  );
}
