import ProjectCard from './ProjectCard.jsx';

// Two-column grid. Expansion lives entirely in ProjectCard's <details>, so this
// holds no state and renders identically on the server. `group` scopes the
// exclusive-accordion behaviour to this grid.
//
// Keyboard handling is a progressive enhancement on top of the native
// behaviour: Tab and Enter already work with scripting off. Arrows step between
// cards, Home/End jump to the ends, Escape closes the card you are inside and
// returns focus to its header. Cards are walked in document order rather than
// by geometry, because an open card spans the full row and makes the grid
// irregular.
export default function ProjectGrid({ projects, group }) {
  const handleKeyDown = (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;

    if (event.key === 'Escape') {
      const card = event.target.closest('.card');
      if (card?.open) {
        card.open = false;
        card.querySelector('.card__summary').focus();
        event.preventDefault();
      }
      return;
    }

    const headers = [...event.currentTarget.querySelectorAll('.card__summary')];
    const index = headers.indexOf(document.activeElement);
    // Only steer when focus is on a card header, so arrows still scroll while
    // reading an opened card's contents.
    if (index === -1) return;

    let next;
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        next = headers[index + 1];
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        next = headers[index - 1];
        break;
      case 'Home':
        next = headers[0];
        break;
      case 'End':
        next = headers[headers.length - 1];
        break;
      default:
        return;
    }

    if (next) {
      next.focus();
      event.preventDefault();
    }
  };

  return (
    <div className="grid" onKeyDown={handleKeyDown}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} group={group} />
      ))}
    </div>
  );
}
