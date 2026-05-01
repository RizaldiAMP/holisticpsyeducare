"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface LayananToggleContextType {
  showLayanan: boolean;
  toggleLayanan: () => void;
}

const LayananToggleContext = createContext<LayananToggleContextType>({
  showLayanan: true,
  toggleLayanan: () => {},
});

export function LayananToggleProvider({ children }: { children: ReactNode }) {
  const [showLayanan, setShowLayanan] = useState(true);

  const toggleLayanan = () => setShowLayanan((prev) => !prev);

  return (
    <LayananToggleContext.Provider value={{ showLayanan, toggleLayanan }}>
      {children}
    </LayananToggleContext.Provider>
  );
}

export function useLayananToggle() {
  return useContext(LayananToggleContext);
}
