import { useRef, useState } from 'react';

import { ContentRow } from './InfoBlocks.jsx';

// Matches the 0.5s slide animations in style.css; further clicks are ignored
// until the running transition finishes.
const SLIDE_DURATION_MS = 500;

function slideClass(index, current, previous, direction) {
  if (index === current) {
    if (previous === null) return 'startSlide';
    return direction === 'forward' ? 'rightInSlide' : 'leftInSlide';
  }
  if (index === previous) {
    return direction === 'forward' ? 'leftOutSlide' : 'rightOutSlide';
  }
  return '';
}

export default function ProjectInfo({ tabs, panelStyle, slidesStyle }) {
  const [slide, setSlide] = useState({ current: 0, previous: null, direction: 'forward' });
  const lockedUntil = useRef(0);

  const moveToSlide = (next) => {
    const now = Date.now();
    if (now < lockedUntil.current || next === slide.current) return;
    lockedUntil.current = now + SLIDE_DURATION_MS;
    setSlide({
      current: next,
      previous: slide.current,
      direction: next > slide.current ? 'forward' : 'backward',
    });
  };

  const tabFlex = `${100 / tabs.length}%`;

  return (
    <div className="projectInfo" style={panelStyle}>
      <div className="infoButton">
        {tabs.map((tab, i) => (
          <div
            key={tab.label}
            className={`indNav ${i === slide.current ? 'activeButton' : 'inactiveButton'}`}
            style={{ flex: tabFlex }}
          >
            <button type="button" className="indNavButton" onClick={() => moveToSlide(i)}>
              {tab.label}
            </button>
          </div>
        ))}
      </div>
      <div className="infoElem" style={slidesStyle}>
        {tabs.map((tab, i) => (
          <div
            key={tab.label}
            className={`indInfoElem ${slideClass(i, slide.current, slide.previous, slide.direction)}`}
          >
            <div className="indContentElem">
              {tab.rows.map((cells, j) => (
                <ContentRow key={j} cells={cells} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
