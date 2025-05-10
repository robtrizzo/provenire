"use client";
import { CharacterFilter } from "@/types/ui";
import {
  useEffect,
  useState,
  createContext,
  ReactNode,
  useContext,
} from "react";

interface CharacterFiltersProps {
  filters: CharacterFilter[];
  updateFilters: (newFilters: CharacterFilter[]) => void;
}

const CharacterFiltersContext = createContext<
  CharacterFiltersProps | undefined
>(undefined);

export const useCharacterFilters = () => {
  const context = useContext(CharacterFiltersContext);
  if (!context) {
    throw new Error(
      "useCharacterFilters must be used within a CharacterFiltersProvider"
    );
  }
  return context;
};

export default function CharacterFiltersProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [filters, setFilters] = useState<CharacterFilter[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const filtersData = localStorage.getItem("gm-character-filters");

    if (filtersData) {
      const parsedFiltersData = JSON.parse(filtersData);
      if (parsedFiltersData) {
        setFilters(parsedFiltersData);
      }
    }
  }, []);

  function updateFilters(newFilters: CharacterFilter[]) {
    setFilters(newFilters);
    localStorage.setItem("gm-character-filters", JSON.stringify(newFilters));
  }

  return (
    <CharacterFiltersContext.Provider
      value={{
        filters,
        updateFilters,
      }}
    >
      {children}
    </CharacterFiltersContext.Provider>
  );
}
