import { asset, resolveHref } from '../asset.js';
import { LINK_LOGOS } from '../data/portfolio.js';

// A real <ul>. Items are plain strings, or objects carrying children, which
// nest a second <ul> inside the <li> rather than faking depth with a margin.
function BulletList({ items }) {
  return (
    <ul className="block__list">
      {items.map((entry, i) => {
        const { text, children } = typeof entry === 'string' ? { text: entry, children: [] } : entry;
        return (
          <li key={i}>
            {text}
            {children.length > 0 && <BulletList items={children} />}
          </li>
        );
      })}
    </ul>
  );
}

function Block({ block }) {
  switch (block.kind) {
    case 'list':
      return <BulletList items={block.items} />;

    case 'text':
      return <p className="block__text">{block.text}</p>;

    case 'image':
      return block.note ? (
        <figure className="block__figure">
          {/* The caption below carries the description, so the image is decorative. */}
          <img className="block__image" src={asset(block.src)} alt="" />
          <figcaption className="block__note">{block.note}</figcaption>
        </figure>
      ) : (
        <img className="block__image" src={asset(block.src)} alt="" />
      );

    case 'video':
      return (
        <figure className="block__figure">
          <iframe
            className="block__video"
            src={block.src}
            title={block.note || 'YouTube video player'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          {block.note && <figcaption className="block__note">{block.note}</figcaption>}
        </figure>
      );

    case 'link':
      return (
        <a className="button" href={resolveHref(block.href)}>
          {block.text}
        </a>
      );

    default:
      return null;
  }
}

function ContentRow({ cells }) {
  return (
    <div className="contentRow">
      {cells.map((cell, i) => (
        <div key={i} className="contentCell" style={{ flex: cell.flex }}>
          {cell.blocks.map((block, j) => (
            <Block key={j} block={block} />
          ))}
        </div>
      ))}
    </div>
  );
}

// Renders every tab stacked into one scrollable block. Tab labels become
// sub-headings, and are dropped when an entry has only a single tab.
export default function FlatContent({ tabs }) {
  const showHeadings = tabs.length > 1;

  return tabs.map((tab) => (
    <section key={tab.label} className="flatSection">
      {showHeadings && <h4 className="flatSection__heading">{tab.label}</h4>}
      {tab.rows.map((cells, i) => (
        <ContentRow key={i} cells={cells} />
      ))}
    </section>
  ));
}

export function ExternalLinks({ links }) {
  if (!links || links.length === 0) return null;

  return (
    <div className="externalLinks">
      {links.map((link) => {
        const logo = LINK_LOGOS[link.type];
        return (
          <a key={link.href} href={link.href} className="externalLink" title={logo.alt}>
            <img src={asset(logo.src)} alt={logo.alt} />
          </a>
        );
      })}
    </div>
  );
}
