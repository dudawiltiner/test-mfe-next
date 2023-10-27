'use client';
import { Locale } from '@config/i18n.config';
import CustomThemeProvider from '@context/CustomThemeProvider';
import { Button } from '@mui/material';
import { Suspense, lazy, useState } from 'react';
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = (error) => {
      reject(new Error(`Error loading script: ${src}`));
    };
    document.head.appendChild(script);
  });
}



function loadComponent(scope, module) {
  return async () => {
      await __webpack_init_sharing__('default');

      await loadScript('http://localhost:3001/remoteEntry.js');

     // Initializes the shared scope. Fills it with known provided modules from this build and all remotes
     const container = window[scope]; // or get the container somewhere else
     // Initialize the container, it may provide shared modules
     await container.init(__webpack_share_scopes__.default);
     const factory = await window[scope].get(module);
     const Module = factory();
     return Module;
   };
}

let LazyComponent = () => null;

if (process.browser && typeof window !== 'undefined') {
  LazyComponent = lazy(loadComponent('core', './Modal'));
}

export default function HomePage({ params }: { params: { lang: Locale } }) {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <CustomThemeProvider options={{ key: 'mui' }} >
      <Button onClick={() => setShowComponent(true)}>Click</Button>
      <Suspense fallback={<p>Loading...</p>}>
        {showComponent && <LazyComponent />}
      </Suspense>
    </CustomThemeProvider>
  );
}
