"use client";

import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";

import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import EmptyAddress from "./EmptyAddress";

import {
  getAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
  setDefaultAddress,
} from "@/lib/addresses";

import type { Address } from "@/types/address";

export default function AddressBook() {
  const [addresses, setAddresses] = useState<Address[]>([]);

  const [open, setOpen] = useState(false);

  const [editing, setEditing] = useState<
    Address | undefined
  >();

  const refreshAddresses = () => {
    setAddresses(getAddresses());
  };

  useEffect(() => {
    refreshAddresses();
  }, []);

  const handleAdd = () => {
    setEditing(undefined);
    setOpen(true);
  };

  const handleEdit = (address: Address) => {
    setEditing(address);
    setOpen(true);
  };

  const handleDelete = (id: string) => {
    const confirmed = window.confirm(
      "Delete this address?"
    );

    if (!confirmed) return;

    deleteAddress(id);

    refreshAddresses();
  };

  const handleSetDefault = (id: string) => {
    setDefaultAddress(id);

    refreshAddresses();
  };

  const handleSave = (address: Address) => {
    if (editing) {
      updateAddress(address);
    } else {
      addAddress(address);
    }

    refreshAddresses();

    setOpen(false);

    setEditing(undefined);
  };

  return (
    <>

      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

  <div>

    <h2 className="text-2xl font-semibold">
      My Addresses
    </h2>

    <p className="mt-1 text-neutral-500">
      Manage your shipping addresses.
    </p>

  </div>

  <Button
    fullWidth
    className="md:w-auto"
    onClick={handleAdd}
  >
    Add Address
  </Button>

</div>

      {addresses.length === 0 ? (

        <EmptyAddress />

      ) : (

        <div className="space-y-6">

          {addresses.map((address) => (

            <AddressCard
              key={address.id}
              address={address}
              onEdit={() =>
                handleEdit(address)
              }
              onDelete={() =>
                handleDelete(address.id)
              }
              onSetDefault={() =>
                handleSetDefault(address.id)
              }
            />

          ))}

        </div>

      )}

      <AddressForm
        open={open}
        initialData={editing}
        onClose={() => {
          setOpen(false);
          setEditing(undefined);
        }}
        onSave={handleSave}
      />

    </>
  );
}