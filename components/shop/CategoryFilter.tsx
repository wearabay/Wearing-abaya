import { categories } from "@/data/categories";

export default function CategoryFilter() {
  return (
    <div className="flex flex-wrap gap-3">

      {categories.map((category) => (

        <button
          key={category.id}
          className="rounded-full border px-5 py-2 text-sm transition hover:bg-black hover:text-white"
        >
          {category.name}
        </button>

      ))}

    </div>
  );
}