"use client";

import {
  indonesiaRegions,
} from "@/data/indonesia";


type CitySelectProps = {
  province: string;
  value: string;
  onChange: (value: string) => void;
};


export default function CitySelect({
  province,
  value,
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
        className="
          text-xs
          uppercase
          tracking-[0.2em]
          text-neutral-600
        "
      >
        City
      </label>



      <select
        value={value}
        disabled={!province}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="
          h-14
          w-full
          rounded-md
          border
          border-neutral-300
          bg-white
          px-5
          outline-none
          transition
          disabled:bg-neutral-100
          focus:border-black
        "
      >

        <option value="">
  {province ? "Select City" : "Select Province"}
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


    </div>
  );
}