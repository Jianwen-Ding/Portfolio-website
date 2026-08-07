// Bakes the rendered markup into dist/index.html after `vite build`, so the
// page is fully readable with JavaScript disabled. React then hydrates the
// same markup to add the scripted enhancements.
import { readFileSync, writeFileSync } from 'node:fs';

import { render } from './dist-ssr/entry-server.js';

const OUTPUT = 'dist/index.html';
const PLACEHOLDER = '<div id="root"></div>';

const template = readFileSync(OUTPUT, 'utf8');

if (!template.includes(PLACEHOLDER)) {
  throw new Error(`Could not find ${PLACEHOLDER} in ${OUTPUT}`);
}

writeFileSync(OUTPUT, template.replace(PLACEHOLDER, `<div id="root">${render()}</div>`));

console.log(`prerendered ${OUTPUT}`);
