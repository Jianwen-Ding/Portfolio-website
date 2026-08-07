import ProjectCard from './ProjectCard.jsx';

// Two-column grid. Expansion lives entirely in ProjectCard's <details>, so this
// holds no state and renders identically on the server.
export default function ProjectGrid({ projects }) {
  return (
    <div className="grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
