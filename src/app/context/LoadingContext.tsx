"use client";

import { createContext, useContext, useState } from "react";
import BarLoading from "../components/shared/loading/BarLoading";

const LoadingContext = createContext({
  openLoading: () => {},
  closeLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  const openLoading = () => {
    setIsLoading(true);
  };

  const closeLoading = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ openLoading, closeLoading }}>
      {children}
      {isLoading && <BarLoading />}
    </LoadingContext.Provider>
  );
}
