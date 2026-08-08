import { useEffect, useRef, useState } from 'react';

import ExperienceEntry from './components/ExperienceEntry.jsx';
import Hero from './components/Hero.jsx';
import NavBar from './components/NavBar.jsx';
import ProjectGrid from './components/ProjectGrid.jsx';
import SectionHeader from './components/SectionHeader.jsx';
import { experience, jams, projects } from './data/portfolio.js';

export default function App() {
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(true);

  // The "to top" control only appears once the hero has scrolled out of view.
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;

    const observer = new IntersectionObserver(([entry]) => setHeroVisible(entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* First tab stop on the page, so keyboard users can jump the hero. */}
      <a className="skipLink" href="#content">
        Skip to content
      </a>

      <Hero innerRef={heroRef} />
      <NavBar showToTop={!heroVisible} />

      {/* tabIndex lets the skip link move focus here, so Tab continues from the
          content rather than restarting at the top of the page. */}
      <main id="content" tabIndex={-1}>
        <section className="section" id="experience">
          <SectionHeader title="Experience" />
          {experience.map((entry) => (
            <ExperienceEntry key={entry.id} entry={entry} />
          ))}
        </section>

        <section className="section" id="projects">
          <SectionHeader title="Projects" />
          {/* Each grid is its own accordion group, so opening a jam does not
              collapse an open project. */}
          <ProjectGrid projects={projects} group="projects" />
        </section>

        <section className="section" id="jams">
          <SectionHeader title="Game Jams" />
          <ProjectGrid projects={jams} group="jams" />
        </section>
      </main>
    </>
  );
}
