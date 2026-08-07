import { renderToString } from 'react-dom/server';

import App from './App.jsx';

// Used by prerender.js at build time to bake the page into dist/index.html, so
// the site renders fully with JavaScript disabled.
export function render() {
  return renderToString(<App />);
}
