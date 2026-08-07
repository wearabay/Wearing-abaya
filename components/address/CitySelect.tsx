"use client";

import {
  indonesiaRegions,
} from "@/data/indonesia";


type CitySelectProps = {
  province: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
};


export default function CitySelect({
  province,
  value,
  error,
  onChange,
}: CitySelectProps) {


  const selectedProvince =
    indonesiaRegions.find(
      (item) =>
        item.province === province
    );


  const cities =
    selectedProvince?.cities ?? [];



  return (
    <div className="space-y-2">


      <label
        htmlFor="city"
        className="
          text-xs
          uppercase
          tracking-[0.2em]
          text-neutral-600
        "
      >
        City / Regency
      </label>



      <select

        id="city"

        value={value}

        disabled={!province}

        onChange={(e) =>
          onChange(e.target.value)
        }

        aria-invalid={!!error}

        className={`
          h-14
          w-full
          rounded-md
          border
          bg-white
          px-5
          outline-none
          transition

          ${
            error
              ? "border-red-400"
              : "border-neutral-300"
          }

          disabled:cursor-not-allowed
          disabled:bg-neutral-100
          disabled:text-neutral-400

          focus:border-black
        `}

      >

        <option value="">

          {
            province
              ? "Select City / Regency"
              : "Select Province First"
          }

        </option>



        {cities.map((city) => (

          <option
            key={city.name}
            value={city.name}
          >

            {city.name}

          </option>

        ))}


      </select>



      {error && (

        <p
          className="
            text-sm
            text-red-500
          "
        >

          {error}

        </p>

      )}


    </div>
  );
}