const STORAGE_KEY = "wearing-abaya-recent-search";

export function getRecentSearches(): string[] {
  if (typeof window === "undefined") {
    return [];
  }

  return JSON.parse(
    localStorage.getItem(STORAGE_KEY) ?? "[]"
  ) as string[];
}

export function addRecentSearch(keyword: string) {
  const list = getRecentSearches();

  const updated = [
    keyword,
    ...list.filter((item) => item !== keyword),
  ].slice(0, 8);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
}

export function clearRecentSearches() {
  localStorage.removeItem(STORAGE_KEY);
}