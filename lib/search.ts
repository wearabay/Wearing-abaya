const STORAGE_KEY = "wearing-abaya-recent-searches";

export function getRecentSearches(): string[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(STORAGE_KEY);

  return data ? JSON.parse(data) : [];
}

export function saveRecentSearch(query: string) {
  if (!query.trim()) return;

  const searches = getRecentSearches();

  const updated = [
    query,
    ...searches.filter(
      (item) =>
        item.toLowerCase() !== query.toLowerCase()
    ),
  ].slice(0, 6);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
}

export function clearRecentSearches() {
  localStorage.removeItem(STORAGE_KEY);
}