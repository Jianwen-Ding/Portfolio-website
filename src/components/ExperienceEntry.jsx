import { asset } from '../asset.js';
import FlatContent, { ExternalLinks } from './InfoBlocks.jsx';

// Name and info across the top, circular logo on the left, detail on the right.
export default function ExperienceEntry({ entry }) {
  const info = entry.meta.map((m) => `${m.label} ${m.value}`).join(' · ');

  return (
    <article className="exp" id={entry.id}>
      <h3 className="exp__name">{entry.title}</h3>
      <p className="exp__info">
        {entry.subtitle}
        {info && ` · ${info}`}
      </p>

      <div className="exp__body">
        <div className="exp__aside">
          <div className="exp__logo">
            <img src={asset(entry.image.src)} alt={entry.image.alt} />
          </div>
          <ExternalLinks links={entry.links} />
        </div>

        <div className="exp__detail">
          <FlatContent tabs={entry.tabs} />
        </div>
      </div>
    </article>
  );
}
