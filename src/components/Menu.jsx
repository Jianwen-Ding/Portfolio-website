import { asset, resolveHref } from '../asset.js';
import { contact, menuSections, socials } from '../data/portfolio.js';
import DragDown from './DragDown.jsx';

export default function Menu() {
  return (
    <nav className="menu">
      <h1 className="mainTitle">Jianwen Ding</h1>
      <h3 className="mainSubtitle">Gameplay Programmer</h3>

      <div>
        <a className="textLink" href="#about">
          About
        </a>
      </div>

      {menuSections.map((section) => (
        <DragDown key={section.id} section={section} />
      ))}

      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <div style={{ flex: '50%' }}>
          <a href={contact.email} className="textLink">
            Contact
          </a>
        </div>
        <div style={{ flex: '50%' }}>
          <a href={resolveHref(contact.resume)} className="textLink">
            Resume
          </a>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        {socials.map((social) => (
          <div key={social.href} style={{ flex: '30%' }}>
            <a href={social.href} className="centerLink">
              <img src={asset(social.src)} alt={social.alt} />
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
}
