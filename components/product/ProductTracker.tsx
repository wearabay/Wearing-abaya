"use client";

import { useEffect } from "react";
import { addRecentlyViewed } from "@/lib/recently-viewed";

export default function ProductTracker({
  slug,
}: {
  slug: string;
}) {
  useEffect(() => {
    addRecentlyViewed(slug);
  }, [slug]);

  return null;
}