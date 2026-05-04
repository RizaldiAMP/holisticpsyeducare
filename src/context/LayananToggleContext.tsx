"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface LayananToggleContextType {
  showLayanan: boolean;
  toggleLayanan: () => void;
}

const LayananToggleContext = createContext<LayananToggleContextType>({
  showLayanan: false,
  toggleLayanan: () => {},
});

export function LayananToggleProvider({ children }: { children: ReactNode }) {
  const [showLayanan, setShowLayanan] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("showLayanan");
    if (stored !== null) {
      setShowLayanan(stored === "true");
    }
  }, []);

  const toggleLayanan = () => {
    setShowLayanan((prev) => {
      const newVal = !prev;
      localStorage.setItem("showLayanan", String(newVal));
      return newVal;
    });
  };

  return (
    <LayananToggleContext.Provider value={{ showLayanan, toggleLayanan }}>
      {children}
    </LayananToggleContext.Provider>
  );
}

export function useLayananToggle() {
  return useContext(LayananToggleContext);
}
