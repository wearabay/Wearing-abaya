"use client";

import { useEffect, useState } from "react";

import ProvinceSelect from "@/components/address/ProvinceSelect";
import CitySelect from "@/components/address/CitySelect";
import AddressLabelSelect from "@/components/address/AddressLabelSelect";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import Select from "@/components/ui/Select";

import { districts } from "@/lib/districts";

import type { Address } from "@/types/address";


type AddressFormProps = {
  open: boolean;
  initialData?: Address;
  onClose: () => void;
  onSave: (address: Address) => void;
};


const createEmptyAddress = (): Address => ({
  id: crypto.randomUUID(),

  label: "Home",

  firstName: "",
  lastName: "",

  phone: "",

  country: "Indonesia",

  province: "",
  city: "",
  district: "",

  postalCode: "",

  street: "",
  apartment: "",

  isDefault: false,
});


export default function AddressForm({
  open,
  initialData,
  onClose,
  onSave,
}: AddressFormProps) {


  const [form,setForm] =
    useState<Address>(createEmptyAddress());


  const [errors,setErrors] =
    useState<Record<string,string>>({});


  useEffect(()=>{

    if(!open) return;


    setForm(
      initialData ?? createEmptyAddress()
    );

    setErrors({});


  },[
    open,
    initialData
  ]);



  useEffect(()=>{

    if(!open) return;


    document.body.style.overflow="hidden";


    return()=>{

      document.body.style.overflow="";

    };


  },[open]);



  if(!open) return null;



  const updateField = <K extends keyof Address>(
    key:K,
    value:Address[K]
  )=>{


    setForm(prev=>({

      ...prev,

      [key]:value,


      ...(key==="province" && {
        city:"",
        district:"",
      }),


      ...(key==="city" && {
        district:"",
      }),


    }));


    setErrors(prev=>({

      ...prev,

      [key]:"",

    }));

  };



  const validate = ()=>{


    const e:Record<string,string>={};


    if(!form.firstName)
      e.firstName="First name is required";


    if(!form.lastName)
      e.lastName="Last name is required";


    if(!form.phone)
      e.phone="Phone number is required";


    if(!form.province)
      e.province="Province is required";


    if(!form.city)
      e.city="City is required";


    if(!form.district)
      e.district="District is required";


    if(!form.postalCode)
      e.postalCode="Postal code is required";


    if(!form.street)
      e.street="Street address is required";


    setErrors(e);


    return Object.keys(e).length===0;

  };



  const handleSave=()=>{

    if(!validate()) return;


    onSave(form);

  };



return (

<div
className="
fixed inset-0
z-[100]
bg-black/40
flex
items-center
justify-center
p-4
"
onClick={onClose}
>


<div
className="
w-full
max-w-2xl
max-h-[90vh]
overflow-y-auto
rounded-3xl
bg-white
shadow-xl
"
onClick={(e)=>e.stopPropagation()}
>


<div
className="
sticky top-0
z-10
border-b
bg-white
px-6
py-5
"
>

<h2 className="text-2xl font-semibold">
{initialData ? "Edit Address":"Add Address"}
</h2>


<p className="mt-2 text-sm text-neutral-500">
Save your shipping address for a faster checkout.
</p>

</div>



<div className="space-y-5 p-6">


<AddressLabelSelect
value={form.label}
onChange={(v)=>
updateField("label",v)
}
/>



<div className="grid gap-5 md:grid-cols-2">


<Input
id="firstName"
label="First Name"
value={form.firstName}
error={errors.firstName}
onChange={(e)=>
updateField(
"firstName",
e.target.value
)}
/>



<Input
id="lastName"
label="Last Name"
value={form.lastName}
error={errors.lastName}
onChange={(e)=>
updateField(
"lastName",
e.target.value
)}
/>


</div>



<Input
id="phone"
label="Phone Number"
value={form.phone}
error={errors.phone}
onChange={(e)=>
updateField(
"phone",
e.target.value
)}
/>



<Input
label="Country"
value="Indonesia"
disabled
/>



<div className="
grid
gap-5
md:grid-cols-3
">


<ProvinceSelect
value={form.province}
onChange={(v)=>
updateField(
"province",
v
)}
/>


<CitySelect
province={form.province}
value={form.city}
onChange={(v)=>
updateField(
"city",
v
)}
/>



<Select
  label="District"
  value={form.district}
  error={errors.district}
  onChange={(e) =>
    updateField(
      "district",
      e.target.value
    )
  }
>

<option value="">
  Select District
</option>

{(
  districts[
    form.city as keyof typeof districts
  ] ?? []
).map((item) => (

<option
  key={item}
  value={item}
>
  {item}
</option>

))}

</Select>


</div>



<Input
label="Postal Code"
value={form.postalCode}
error={errors.postalCode}
onChange={(e)=>
updateField(
"postalCode",
e.target.value
)}
/>



<Input
label="Street Address"
value={form.street}
error={errors.street}
onChange={(e)=>
updateField(
"street",
e.target.value
)}
/>



<Input
label="Apartment / Suite"
value={form.apartment ?? ""}
onChange={(e)=>
updateField(
"apartment",
e.target.value
)}
/>



</div>



<div
className="
sticky
bottom-0
border-t
bg-white
p-4
pb-[calc(env(safe-area-inset-bottom)+16px)]
"
>


<div className="
flex
flex-col
gap-3
sm:flex-row
sm:justify-end
">


<Button
variant="outline"
onClick={onClose}
>
Cancel
</Button>


<Button
onClick={handleSave}
>
{initialData
?"Update Address"
:"Save Address"}
</Button>


</div>


</div>


</div>


</div>

);

}