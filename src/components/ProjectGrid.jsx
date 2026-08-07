import ProjectCard from './ProjectCard.jsx';

// Two-column grid. Expansion lives entirely in ProjectCard's <details>, so this
// holds no state and renders identically on the server. `group` scopes the
// exclusive-accordion behaviour to this grid.
export default function ProjectGrid({ projects, group }) {
  return (
    <div className="grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} group={group} />
      ))}
    </div>
  );
}
