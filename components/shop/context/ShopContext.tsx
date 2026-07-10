"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type ShopContextType = {
  search: string;
  setSearch: (value: string) => void;

  sort: string;
  setSort: (value: string) => void;

  category: string[];
  setCategory: (value: string[]) => void;

  colors: string[];
  setColors: (value: string[]) => void;

  sizes: string[];
  setSizes: (value: string[]) => void;

  clearFilters: () => void;
};

const ShopContext = createContext<ShopContextType | null>(null);

export function ShopProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  const [category, setCategory] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);

  function clearFilters() {
  setCategory([]);
  setColors([]);
  setSizes([]);
}

  return (
    <ShopContext.Provider
      value={{
        search,
        setSearch,

        sort,
        setSort,

        category,
        setCategory,

        colors,
        setColors,

        sizes,
        setSizes,

        clearFilters,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error(
      "useShop must be used inside ShopProvider"
    );
  }

  return context;
}