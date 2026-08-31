import { asset } from '../asset.js';
import { about, jams, projects } from '../data/portfolio.js';
import ProjectMarquee from './ProjectMarquee.jsx';

// The landing panel: portrait and intro centred in the panel, with a moving
// strip of the work running along the bottom, just above the nav. The whole
// section is a grey wash that fades into the sections below.
export default function Hero({ innerRef }) {
  return (
    <header className="hero" ref={innerRef} id="top">
      <div className="hero__inner">
        <div className="hero__intro">
          <div className="hero__head">
            <img className="hero__face" src={asset(about.photo.src)} alt={about.photo.alt} />
            <div>
              <h1 className="hero__name">Jianwen Ding</h1>
              <p className="hero__role">Gameplay Programmer</p>
            </div>
          </div>

          <h2 className="hero__label">About me</h2>
          {about.paragraphs.map((text, i) => (
            <p key={i} className="hero__text">
              {text}
            </p>
          ))}
        </div>
      </div>

      <ProjectMarquee projects={[...projects, ...jams]} />
    </header>
  );
}
