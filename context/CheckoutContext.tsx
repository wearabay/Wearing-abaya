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

  return (
    <CheckoutContext.Provider
      value={{
        contact,
        address,

        delivery,
        payment,

        errors,

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