import About from './components/About.jsx';
import Menu from './components/Menu.jsx';
import Project from './components/Project.jsx';
import { experience, jams, projects } from './data/portfolio.js';

// The section headings sit above an empty anchor paragraph so that jumping to
// `#experience` / `#projects` / `#jams` lands on the heading itself.
function SectionAnchor({ id }) {
  return (
    <p style={{ marginBottom: '-35px' }} id={id}>
      <br />
    </p>
  );
}

export default function App() {
  return (
    <div className="row">
      <div className="column left">
        <Menu />
      </div>
      <div className="column right">
        <main className="projects">
          <About />

          <SectionAnchor id="experience" />
          <h2 className="divison">Experience</h2>
          {experience.map((project) => (
            <Project key={project.id} project={project} />
          ))}

          <div>
            <SectionAnchor id="projects" />
            <h2 className="divison" style={{ marginBottom: '0px' }}>
              Projects
            </h2>
            {projects.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </div>

          <div>
            <SectionAnchor id="jams" />
            <h2 className="divison" style={{ marginBottom: '0px' }}>
              Game Jams
            </h2>
            {jams.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
