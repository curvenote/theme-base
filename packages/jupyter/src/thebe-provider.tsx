import React, { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
export type ThebeCore = typeof import('thebe-core');

// Don't know how to get rid of the undefined here in the case of an async provider
const ThebeCoreContext = React.createContext<{ core?: ThebeCore } | undefined>(undefined);

export function ThebeCoreProvider({ children }: React.PropsWithChildren) {
  const [core, setCore] = useState<ThebeCore | undefined>();

  useEffect(() => {
    console.debug('importing thebe-core...');
    import('thebe-core')
      .then((thebeCore) => {
        console.debug('thebe-core loaded');
        setCore(thebeCore);
      })
      .catch(({ reason }) => {
        console.error(`thebe-core load failed ${reason}`);
      });
  }, []);

  return (
    <ThebeCoreContext.Provider value={{ core }}>
      <>{children}</>
    </ThebeCoreContext.Provider>
  );
}

export function useThebeCore() {
  const context = React.useContext(ThebeCoreContext);
  if (context === undefined) {
    throw new Error('useThebeCore must be used inside a ThebeCoreProvider');
  }
  return context;
}
