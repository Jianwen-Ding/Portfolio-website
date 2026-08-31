import { asset } from '../asset.js';

// A slow horizontal ticker of the work, sitting between the intro and the nav.
//
// The track holds the list twice and slides exactly -50%, so the loop is
// seamless. The animation is pure CSS, so it runs with scripting off, and it
// pauses on hover or keyboard focus so the links can actually be used. The
// second copy is decorative: hidden from assistive tech and skipped by Tab, or
// every project would be announced and tabbed through twice.
function Item({ project, duplicate }) {
  return (
    <a
      className="marquee__item"
      href={`#${project.id}`}
      tabIndex={duplicate ? -1 : undefined}
      aria-hidden={duplicate || undefined}
    >
      <span className="marquee__frame">
        <img src={asset(project.image.src)} alt="" loading="lazy" />
      </span>
      <span className="marquee__label">{project.title}</span>
    </a>
  );
}

export default function ProjectMarquee({ projects }) {
  return (
    <div className="marquee">
      <div
        className="marquee__track"
        // Keeps a constant pace as the list grows rather than speeding up.
        style={{ animationDuration: `${projects.length * 7}s` }}
      >
        {projects.map((project) => (
          <Item key={project.id} project={project} />
        ))}
        {projects.map((project) => (
          <Item key={`${project.id}-dup`} project={project} duplicate />
        ))}
      </div>
    </div>
  );
}
