// Agentation — visual feedback tool for AI coding agents
// https://github.com/benjitaylor/agentation
//
// Loaded into every prototype as a shared module. Mounts the <Agentation />
// toolbar in the bottom-right corner. React + ReactDOM are pulled from a CDN
// so the static prototypes don't need a build step.

import React from 'https://esm.sh/react@18.3.1';
import { createRoot } from 'https://esm.sh/react-dom@18.3.1/client';
import { Agentation } from 'https://esm.sh/agentation@3?deps=react@18.3.1,react-dom@18.3.1';

const mount = document.createElement('div');
mount.id = 'agentation-root';
document.body.appendChild(mount);

createRoot(mount).render(React.createElement(Agentation));
