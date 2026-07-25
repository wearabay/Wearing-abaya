"use client";

import {
  indonesiaRegions,
} from "@/data/indonesia";


type ProvinceSelectProps = {
  value: string;
  onChange: (value: string) => void;
};


export default function ProvinceSelect({
  value,
  onChange,
}: ProvinceSelectProps) {


  const provinces =
    indonesiaRegions.map(
      (item) => item.province
    );


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
        Province
      </label>


      <select
        value={value}
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
          focus:border-black
        "
      >

        <option value="">
          Select Province
        </option>


        {provinces.map((province) => (

          <option
            key={province}
            value={province}
          >
            {province}
          </option>

        ))}


      </select>


    </div>
  );
}