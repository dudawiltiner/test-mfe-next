import React, { Suspense, lazy, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { loadComponent } from "../src/remote/loadComponent";

const App = () => {
  const [Component, setComponent] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadedComponent = loadComponent(
        "core",
        "http://localhost:3001/remoteEntry.js",
        "Modal",
        "default",
        window
      );

      const nComponent = lazy(loadedComponent);
      setComponent(nComponent);
    }
  }, []);
  return <Suspense>{Component && <Component />}</Suspense>;
};

const root = createRoot(document.getElementById("app"));
root.render(<App />);
