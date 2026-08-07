import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

import App from './App.jsx';
import './styles/style.css';

const container = document.getElementById('root');
const tree = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// The production build ships prerendered markup, so hydrate it rather than
// throwing it away. `npm run dev` serves an empty root and mounts normally.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
