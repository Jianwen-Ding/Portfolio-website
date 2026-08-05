import { useRef, useState } from 'react';

import { asset } from '../asset.js';

// Matches the 0.5s drag animations in style.css.
const DRAG_DURATION_MS = 500;

export default function DragDown({ section }) {
  // 'initial' means never opened, which leaves the drawer clipped shut with no
  // animation class attached.
  const [state, setState] = useState('initial');
  const lockedUntil = useRef(0);

  const toggle = () => {
    const now = Date.now();
    if (now < lockedUntil.current) return;
    lockedUntil.current = now + DRAG_DURATION_MS;
    setState((current) => (current === 'open' ? 'closed' : 'open'));
  };

  const open = state === 'open';
  const stateClass = state === 'initial' ? '' : open ? 'draggedDown' : 'draggedUp';

  return (
    <div>
      <a className="textLink" href={section.href}>
        {section.label}
      </a>
      <img
        className="dragButton"
        onClick={toggle}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggle();
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-label={`Toggle ${section.label} list`}
        src={asset(open ? 'Resources/UpIcon.png' : 'Resources/DownIcon.png')}
        alt="Dragdown button"
        width="15px"
        height="15px"
      />
      <div className={`${section.dragClass} ${stateClass}`}>
        {section.rows.map((row, rowIndex) => (
          <div key={rowIndex}>
            <div style={{ display: 'flex' }}>
              {row.map((item) => (
                <div key={item.href} style={{ flex: `${100 / row.length}%` }} className="tinyDiv">
                  <p className="tinyTitle">{item.label}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex' }}>
              {row.map((item) => (
                <div key={item.href} style={{ flex: `${100 / row.length}%` }} className="tinyDiv">
                  <a href={item.href} className="tinyImage">
                    <img src={asset(item.src)} alt={item.alt} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
