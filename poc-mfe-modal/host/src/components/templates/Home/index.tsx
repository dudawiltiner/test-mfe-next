"use client";
import { loadComponent } from "@/remote/loadComponent";
import { ComponentType, lazy, useEffect, useState } from "react";

export default function HomeTemplate() {
  const [Component, setComponent] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined" && process.browser) {
      const loadedComponent = loadComponent(
        "core",
        "http://localhost:3001/remoteEntry.js",
        "Modal",
        "default",
        window
      );

      const nComponent = lazy(loadedComponent) as ComponentType<>;
      setComponent(nComponent);
    }
  }, []);

  return <>{Component && <Component />}</>;
}
