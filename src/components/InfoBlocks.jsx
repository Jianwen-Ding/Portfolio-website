import { asset, resolveHref } from '../asset.js';

// Renders one block inside a content cell.
function Block({ block }) {
  switch (block.kind) {
    case 'text':
      return (
        <p className="infoText" style={block.indent ? { marginLeft: '30px' } : undefined}>
          {block.text}
        </p>
      );

    case 'image':
      return block.note ? (
        <>
          {/* The caption below carries the description, so the image is decorative. */}
          <img className="imageInfoWithNote" src={asset(block.src)} alt="" />
          <p className="imageNote">{block.note}</p>
        </>
      ) : (
        <img className="imageInfo" src={asset(block.src)} alt="" />
      );

    case 'video':
      return (
        <>
          <iframe
            className="videoInfo"
            src={block.src}
            title={block.note || 'YouTube video player'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          {block.note && <p className="imageNote">{block.note}</p>}
        </>
      );

    case 'link':
      return (
        <a className="textLink" href={resolveHref(block.href)}>
          {block.text}
        </a>
      );

    default:
      return null;
  }
}

// A row of cells; cells split the row by their flex percentage.
export function ContentRow({ cells }) {
  return (
    <div className="indContentFlexDiv">
      {cells.map((cell, i) => (
        <div key={i} className="indContentDiv" style={{ flex: cell.flex }}>
          {cell.blocks.map((block, j) => (
            <Block key={j} block={block} />
          ))}
        </div>
      ))}
    </div>
  );
}
