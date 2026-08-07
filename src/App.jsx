import { useEffect, useRef, useState } from 'react';

import ExperienceEntry from './components/ExperienceEntry.jsx';
import Hero from './components/Hero.jsx';
import NavBar from './components/NavBar.jsx';
import ProjectGrid from './components/ProjectGrid.jsx';
import { experience, jams, projects } from './data/portfolio.js';

// Game jams share the projects grid; their cards carry a "Game Jam" tag.
const allProjects = [...projects, ...jams];

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
      <Hero innerRef={heroRef} />
      <NavBar showToTop={!heroVisible} />

      <main>
        <section className="section" id="experience">
          <h2 className="sectionHeader">Experience</h2>
          {experience.map((entry) => (
            <ExperienceEntry key={entry.id} entry={entry} />
          ))}
        </section>

        <section className="section" id="projects">
          <h2 className="sectionHeader">Projects</h2>
          <ProjectGrid projects={allProjects} />
        </section>
      </main>
    </>
  );
}
