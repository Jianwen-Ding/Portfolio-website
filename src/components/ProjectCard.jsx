import { asset } from '../asset.js';
import FlatContent, { ExternalLinks } from './InfoBlocks.jsx';

// A grid tile that expands in place into a full-width detail panel.
//
// Built on <details> so the whole open/close interaction is native: it works
// with JavaScript disabled, and the shared `name` makes the grid an exclusive
// accordion without any state. The only scripted part is scrolling a freshly
// opened card into view, which is a pure enhancement.
export default function ProjectCard({ project }) {
  const handleToggle = (event) => {
    if (event.currentTarget.open) {
      event.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <details className="card" name="projects" id={project.id} onToggle={handleToggle}>
      <summary className="card__summary">
        <span className="card__titleRow">
          <span className="card__title">{project.title}</span>
          {project.tag && <span className="card__tag">{project.tag}</span>}
          <span className="card__shrink">Shrink</span>
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
