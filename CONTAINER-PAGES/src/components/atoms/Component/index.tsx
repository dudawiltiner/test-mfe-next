import { lazy } from 'react';
let RemoteTitle = () => null;
if (process.browser) {
  //useCustomHook = require('shop/customHook').default;
  RemoteTitle = lazy(() => {
    return import('setterMFE/modal');
  });
}
export default function Component() {
  return (
    <div>
      <RemoteTitle />
    </div>
  );
}
