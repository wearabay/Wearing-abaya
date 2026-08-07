"use client";

import {
  indonesiaRegions,
} from "@/data/indonesia";


type DistrictSelectProps = {
  province: string;
  city: string;
  value: string;
  error?: string;
  onChange: (value:string)=>void;
};


export default function DistrictSelect({
  province,
  city,
  value,
  error,
  onChange,
}: DistrictSelectProps) {


  const selectedProvince =
    indonesiaRegions.find(
      (item)=>
        item.province === province
    );


  const selectedCity =
    selectedProvince?.cities.find(
      (item)=>
        item.name === city
    );


  const districts =
    selectedCity?.districts ?? [];



  return (

    <div className="space-y-2">

      <label
        htmlFor="district"
        className="
          text-xs
          uppercase
          tracking-[0.2em]
          text-neutral-600
        "
      >
        District / Kecamatan
      </label>


      <select

        id="district"

        value={value}

        disabled={!city}

        onChange={(e)=>
          onChange(e.target.value)
        }

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
            city
            ? "Select District"
            : "Select City First"
          }
        </option>


        {
          districts.map(
            (district)=>(
              <option
                key={district}
                value={district}
              >
                {district}
              </option>
            )
          )
        }


      </select>


      {
        error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )
      }


    </div>

  );
}