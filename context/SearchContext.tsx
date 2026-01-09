"use client";
import { createContext, useContext, useState } from "react";

const SearchContext = createContext<any>(null);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <SearchContext.Provider value={{
    searchText,
    setSearchText,
    selectedCategory,
    setSelectedCategory,
  }}
>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
