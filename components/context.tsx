// AppContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

interface AppContextProps {
  activeImage: string;
  updateImage: (newValue: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [someValue, setSomeValue] = useState("sweater");

  const updateValue = (newValue: string) => {
    setSomeValue(newValue);
  };

  return (
    <AppContext.Provider value={{ activeImage: someValue, updateImage: updateValue }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};
