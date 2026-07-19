import type {
  CheckoutErrors,
} from "@/context/CheckoutContext";

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

const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateCheckout(
  contact: Contact,
  address: Address
): CheckoutErrors {

  const errors: CheckoutErrors = {};

  // Contact

  if (!contact.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(contact.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!contact.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (
    contact.phone.replace(/\D/g, "").length < 9
  ) {
    errors.phone =
      "Phone number is too short.";
  }

  // Address

  if (!address.firstName.trim()) {
    errors.firstName =
      "First name is required.";
  }

  if (!address.lastName.trim()) {
    errors.lastName =
      "Last name is required.";
  }

  if (!address.province.trim()) {
    errors.province =
      "Province is required.";
  }

  if (!address.city.trim()) {
    errors.city =
      "City is required.";
  }

  if (!address.street.trim()) {
    errors.street =
      "Street address is required.";
  }

  if (!address.postalCode.trim()) {
    errors.postalCode =
      "Postal code is required.";
  }

  return errors;
}

export function isCheckoutValid(
  contact: Contact,
  address: Address
) {
  return (
    Object.keys(
      validateCheckout(contact, address)
    ).length === 0
  );
}