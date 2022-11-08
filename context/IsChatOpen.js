import React, { createContext, useContext, useState, useMemo } from 'react';

const IsChatOpenContext = createContext(null);

export default function IsChatOpenProvider({ children }) {
  const [isChatOpen, setIsChatOpen] = useState(true);

  const toggleIsChatOpen = () => setIsChatOpen(!isChatOpen);

  const state = useMemo(() => ({ isChatOpen, toggleIsChatOpen }), [isChatOpen]);

  return (
    <IsChatOpenContext.Provider value={state}>
      {children}
    </IsChatOpenContext.Provider>
  );
};

export const useIsChatOpen = () => useContext(IsChatOpenContext);
