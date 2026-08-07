import { asset } from '../asset.js';
import { contact, socials } from '../data/portfolio.js';

// Double chevron, matching the "to top" marker in the wireframe.
function ChevronUp() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <path d="M4 13 L12 6 L20 13" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M4 19 L12 12 L20 19" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

// Sits at the bottom of the hero and sticks to the top of the viewport once the
// hero scrolls away. `showToTop` is driven by whether the hero is still visible.
export default function NavBar({ showToTop }) {
  return (
    <nav className="nav" aria-label="Main">
      {/* A plain anchor so it still works without JS (CSS handles the smooth
          scroll). Script only controls when it is revealed. */}
      <a
        className={`nav__toTop${showToTop ? ' is-visible' : ''}`}
        href="#top"
        aria-label="Back to top"
      >
        <ChevronUp />
      </a>

      <div className="nav__inner">
        <a className="nav__link" href="#experience">
          Experience
        </a>
        <a className="nav__link" href="#projects">
          Projects
        </a>

        <span className="nav__gap" />

        {socials.map((social) => (
          <a key={social.href} className="nav__icon" href={social.href} title={social.label}>
            <img src={asset(social.src)} alt={social.alt} />
          </a>
        ))}
        <a className="nav__icon nav__icon--text" href={contact.email} title="Email">
          Mail
        </a>
      </div>
    </nav>
  );
}
