export type Address = {
  id: string;

  label:
    | "Home"
    | "Office"
    | "Other";

  firstName: string;
  lastName: string;

  phone: string;

  country: string;

  province: string;
  city: string;
  district: string;

  postalCode: string;

  street: string;
  apartment?: string;

  isDefault: boolean;
};