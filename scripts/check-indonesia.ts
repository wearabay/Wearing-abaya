import { indonesiaRegions } from "../data/indonesia";


const provinceMap = new Map();


for (const province of indonesiaRegions) {


  if (provinceMap.has(province.province)) {

    console.log(
      "DUPLICATE PROVINCE:",
      province.province
    );

  } else {

    provinceMap.set(
      province.province,
      true
    );

  }



  const cityMap = new Map();


  for (const city of province.cities) {


    if (cityMap.has(city.name)) {

      console.log(
        "DUPLICATE CITY:",
        province.province,
        "-",
        city.name
      );

    } else {

      cityMap.set(
        city.name,
        true
      );

    }



    const districtMap = new Map();


    for (const district of city.districts) {


      if (
        districtMap.has(district)
      ) {

        console.log(
          "DUPLICATE DISTRICT:",
          province.province,
          "-",
          city.name,
          "-",
          district
        );

      } else {

        districtMap.set(
          district,
          true
        );

      }

    }

  }

}