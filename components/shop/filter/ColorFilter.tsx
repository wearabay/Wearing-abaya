"use client";

import { colors } from "@/data/colors";
import { useShop } from "../context/ShopContext";

export default function ColorFilter() {
  const { colors: selectedColors, setColors } = useShop();

  function toggleColor(name: string) {
    if (selectedColors.includes(name)) {
      setColors(selectedColors.filter((item) => item !== name));
    } else {
      setColors([...selectedColors, name]);
    }
  }

  return (
    <div className="flex flex-wrap gap-4">

      {colors.map((color) => {

        const active = selectedColors.includes(color.name);

        return (
          <button
            key={color.name}
            onClick={() => toggleColor(color.name)}
            title={color.name}
            className={`
              h-9
              w-9
              rounded-full
              border-2
              transition-all
              ${
                active
                  ? "border-black scale-110"
                  : "border-neutral-300 hover:scale-105"
              }
            `}
            style={{
              backgroundColor: color.value,
            }}
          />
        );
      })}

    </div>
  );
}