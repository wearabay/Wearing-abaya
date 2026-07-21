"use client";

import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";


type Address = {
  id: string;
  label: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  isDefault: boolean;
};


const STORAGE_KEY =
  "wearing-abaya-addresses";


export default function AddressBook() {


  const [addresses, setAddresses] =
    useState<Address[]>([]);


  const [form, setForm] =
    useState({

      label:"Home",
      name:"",
      phone:"",
      address:"",
      city:"",
      province:"",
      postalCode:"",

    });



  useEffect(()=>{

    const saved =
      localStorage.getItem(
        STORAGE_KEY
      );


    if(saved){

      setAddresses(
        JSON.parse(saved)
      );

    }

  },[]);




  function saveAddresses(
    data:Address[]
  ){

    setAddresses(data);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(data)
    );

  }




  function updateField(
    field:keyof typeof form,
    value:string
  ){

    setForm(prev=>({

      ...prev,

      [field]:value,

    }));

  }




  function addAddress(){


    const newAddress:Address={

      id:
        Date.now().toString(),

      ...form,

      isDefault:
        addresses.length === 0,

    };


    saveAddresses([

      ...addresses,

      newAddress,

    ]);


    setForm({

      label:"Home",
      name:"",
      phone:"",
      address:"",
      city:"",
      province:"",
      postalCode:"",

    });

  }




  function deleteAddress(
    id:string
  ){

    saveAddresses(

      addresses.filter(
        item=>item.id!==id
      )

    );

  }





  return (

    <div className="space-y-12">


      <div>

        <p className="
          text-xs
          uppercase
          tracking-[0.3em]
          text-neutral-500
        ">
          Account
        </p>


        <h1 className="
          mt-3
          text-4xl
          font-light
        ">
          Addresses
        </h1>


      </div>




      {/* Existing */}

      <div className="space-y-5">

        {addresses.map(address=>(

          <div
            key={address.id}
            className="
              rounded-2xl
              border
              border-stone-200
              p-6
            "
          >

            <div className="
              flex
              justify-between
            ">

              <h2 className="font-medium">
                {address.label}
              </h2>


              {address.isDefault && (

                <span className="
                  text-xs
                  uppercase
                  tracking-widest
                  text-neutral-500
                ">
                  Default
                </span>

              )}

            </div>



            <div className="
              mt-4
              text-sm
              leading-7
              text-neutral-600
            ">

              <p>
                {address.name}
              </p>

              <p>
                {address.phone}
              </p>

              <p>
                {address.address}
              </p>

              <p>
                {address.city},
                {" "}
                {address.province}
              </p>

              <p>
                {address.postalCode}
              </p>


            </div>



            <button
              onClick={()=>
                deleteAddress(address.id)
              }
              className="
                mt-5
                text-xs
                uppercase
                tracking-widest
                text-red-500
              "
            >
              Delete
            </button>


          </div>

        ))}

      </div>





      {/* Add New */}


      <section
        className="
          rounded-2xl
          border
          border-stone-200
          p-8
          space-y-5
        "
      >

        <h2 className="text-lg">
          Add New Address
        </h2>



        <Input
          label="Label"
          value={form.label}
          onChange={(e)=>
            updateField(
              "label",
              e.target.value
            )
          }
        />


        <Input
          label="Name"
          value={form.name}
          onChange={(e)=>
            updateField(
              "name",
              e.target.value
            )
          }
        />


        <Input
          label="Phone"
          value={form.phone}
          onChange={(e)=>
            updateField(
              "phone",
              e.target.value
            )
          }
        />


        <Input
          label="Address"
          value={form.address}
          onChange={(e)=>
            updateField(
              "address",
              e.target.value
            )
          }
        />


        <Input
          label="City"
          value={form.city}
          onChange={(e)=>
            updateField(
              "city",
              e.target.value
            )
          }
        />


        <Input
          label="Province"
          value={form.province}
          onChange={(e)=>
            updateField(
              "province",
              e.target.value
            )
          }
        />


        <Input
          label="Postal Code"
          value={form.postalCode}
          onChange={(e)=>
            updateField(
              "postalCode",
              e.target.value
            )
          }
        />



        <Button
          onClick={addAddress}
        >
          Save Address
        </Button>


      </section>


    </div>

  );

}