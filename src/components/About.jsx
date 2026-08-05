import { asset } from '../asset.js';
import { about } from '../data/portfolio.js';

export default function About() {
  return (
    <div>
      <h2 className="divison" id="about">
        About Me
      </h2>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '30%' }}>
          <img src={asset(about.photo.src)} alt={about.photo.alt} className="pic" />
        </div>
        <div style={{ flex: '70%', paddingLeft: '10px' }}>
          {about.paragraphs.map((text, i) => (
            <p key={i} className="infoText">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
