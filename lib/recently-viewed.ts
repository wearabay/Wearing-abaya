const KEY = "wearing-abaya-recent";

export function getRecentlyViewed(): string[] {

  if (typeof window === "undefined") {
    return [];
  }

  return JSON.parse(
    localStorage.getItem(KEY) || "[]"
  ) as string[];

}

export function addRecentlyViewed(slug: string) {

  if (typeof window === "undefined") return;

  let items = getRecentlyViewed();

  items = [
    slug,
    ...items.filter((item) => item !== slug),
  ];

  localStorage.setItem(
    KEY,
    JSON.stringify(items.slice(0, 8))
  );

}