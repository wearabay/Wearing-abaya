"use client";

import { useState } from "react";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";


export default function ProfileForm() {


  const [profile, setProfile] =
    useState({

      name: "",
      email: "",
      phone: "",

    });



  function updateField(
    field: keyof typeof profile,
    value:string
  ){

    setProfile((prev)=>({

      ...prev,

      [field]:value,

    }));

  }



  function handleSave(){

    console.log(
      "Profile saved",
      profile
    );

  }



  return (

    <div
      className="
        max-w-xl
        space-y-10
      "
    >


      <div>

        <p
          className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-neutral-500
          "
        >
          Account
        </p>


        <h1
          className="
            mt-3
            text-4xl
            font-light
          "
        >
          My Profile
        </h1>


      </div>




      <section
        className="
          rounded-2xl
          border
          border-stone-200
          bg-white
          p-8
          space-y-5
        "
      >


        <Input
          label="Full Name"
          placeholder="Your name"
          value={profile.name}
          onChange={(e)=>
            updateField(
              "name",
              e.target.value
            )
          }
        />



        <Input
          label="Email Address"
          type="email"
          placeholder="email@example.com"
          value={profile.email}
          onChange={(e)=>
            updateField(
              "email",
              e.target.value
            )
          }
        />



        <Input
          label="Phone Number"
          placeholder="+62"
          value={profile.phone}
          onChange={(e)=>
            updateField(
              "phone",
              e.target.value
            )
          }
        />



        <Button
          onClick={handleSave}
        >
          Save Changes
        </Button>


      </section>


    </div>

  );

}