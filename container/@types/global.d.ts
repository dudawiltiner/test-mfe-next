// globals.d.ts

interface Window {
  setterMFE?: {
    get: (path: string) => unknown;
  };
}
