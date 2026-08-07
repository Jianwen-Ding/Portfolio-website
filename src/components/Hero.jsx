import { asset, resolveHref } from '../asset.js';
import { about, contact } from '../data/portfolio.js';

// The landing panel: portrait and intro on the left, a grey gradient field on
// the right that fades down into the work sections below.
export default function Hero({ innerRef }) {
  return (
    <header className="hero" ref={innerRef} id="top">
      <div className="hero__gradient" aria-hidden="true" />

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

          <div className="hero__actions">
            <a className="button" href={resolveHref(contact.resume)}>
              Resume
            </a>
            <a className="button" href={contact.email}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
