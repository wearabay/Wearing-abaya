"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

type Contact = {
  email: string;
  phone: string;
  marketing: boolean;
};

type Address = {
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  province: string;
  city: string;
  district: string;
  postalCode: string;
  street: string;
  apartment: string;
};

export type CheckoutErrors = {
  email?: string;
  phone?: string;

  firstName?: string;
  lastName?: string;

  company?: string;
  country?: string;

  province?: string;
  city?: string;
  district?: string;

  postalCode?: string;
  street?: string;
  apartment?: string;
};

type CheckoutContextType = {
  contact: Contact;
  address: Address;

  delivery: string;
  payment: string;

  errors: CheckoutErrors;
    validateCheckout: () => boolean;

  setContact: React.Dispatch<
    React.SetStateAction<Contact>
  >;

  setAddress: React.Dispatch<
    React.SetStateAction<Address>
  >;

  setDelivery: React.Dispatch<
    React.SetStateAction<string>
  >;

  setPayment: React.Dispatch<
    React.SetStateAction<string>
  >;

  setErrors: React.Dispatch<
    React.SetStateAction<CheckoutErrors>
  >;

  resetCheckout: () => void;
};

const defaultContact: Contact = {
  email: "",
  phone: "",
  marketing: false,
};

const defaultAddress: Address = {
  firstName: "",
  lastName: "",
  company: "",
  country: "Indonesia",
  province: "",
  city: "",
  district: "",
  postalCode: "",
  street: "",
  apartment: "",
};

const CheckoutContext =
  createContext<CheckoutContextType | null>(null);

export function CheckoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [contact, setContact] =
    useState<Contact>(defaultContact);

  const [address, setAddress] =
    useState<Address>(defaultAddress);

  const [delivery, setDelivery] =
    useState("regular");

  const [payment, setPayment] =
    useState("bank");

  const [errors, setErrors] =
    useState<CheckoutErrors>({});

  function resetCheckout() {
    setContact(defaultContact);
    setAddress(defaultAddress);

    setDelivery("regular");
    setPayment("bank");

    setErrors({});
  }

    function validateEmail(
    email: string
  ) {

    const regex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    return regex.test(email);

  }



  function validatePhone(
    phone: string
  ) {

    const regex =
      /^(\+62|62|0)8[1-9][0-9]{7,10}$/;


    return regex.test(
      phone.replace(/\s/g, "")
    );

  }



  function validateCheckout() {

    const newErrors: CheckoutErrors = {};



    // Contact

    if (!contact.email) {

      newErrors.email =
        "Email address is required.";

    } else if (
      !validateEmail(contact.email)
    ) {

      newErrors.email =
        "Please enter a valid email address.";

    }



    if (!contact.phone) {

      newErrors.phone =
        "Phone number is required.";

    } else if (
      !validatePhone(contact.phone)
    ) {

      newErrors.phone =
        "Please enter a valid Indonesian phone number.";

    }





    // Address

    if (!address.firstName) {
      newErrors.firstName =
        "First name is required.";
    }


    if (!address.lastName) {
      newErrors.lastName =
        "Last name is required.";
    }


    if (!address.province) {
      newErrors.province =
        "Province is required.";
    }


    if (!address.city) {
      newErrors.city =
        "City is required.";
    }


    if (!address.postalCode) {
      newErrors.postalCode =
        "Postal code is required.";
    }


    if (!address.street) {
      newErrors.street =
        "Street address is required.";
    }



    setErrors(newErrors);


    return Object.keys(newErrors).length === 0;

  }

  return (
    <CheckoutContext.Provider
      value={{
        contact,
        address,

        delivery,
        payment,

        errors,
        validateCheckout,

        setContact,
        setAddress,
        setDelivery,
        setPayment,

        setErrors,

        resetCheckout,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context =
    useContext(CheckoutContext);

  if (!context) {
    throw new Error(
      "useCheckout must be used inside CheckoutProvider"
    );
  }

  return context;
}