"use client";

import { Address } from "@/types/address";

type AddressCardProps = {
  address: Address;
  onEdit?: () => void;
  onDelete?: () => void;
  onSetDefault?: () => void;
};

export default function AddressCard({
  address,
  onEdit,
  onDelete,
  onSetDefault,
}: AddressCardProps) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">

      <div className="flex items-start justify-between">

        <div>
          <h3 className="text-lg font-semibold">
            {address.label}
          </h3>

          {address.isDefault && (
            <span className="mt-2 inline-flex rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-white">
              Default
            </span>
          )}
        </div>

      </div>

      <div className="mt-6 space-y-1 text-sm text-neutral-700">

        <p className="font-medium">
          {address.firstName} {address.lastName}
        </p>

        <p>{address.phone}</p>

        <p>{address.street}</p>

        {address.apartment && (
          <p>{address.apartment}</p>
        )}

        <p>
          {address.city}, {address.province}
        </p>

        <p>
          {address.country} {address.postalCode}
        </p>

      </div>

      <div className="mt-6 flex gap-3">

        <button
          onClick={onEdit}
          className="rounded-lg border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-100"
        >
          Edit
        </button>

        <button
          onClick={onDelete}
          className="rounded-lg border border-red-300 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
        >
          Delete
        </button>

        {!address.isDefault && (
          <button
            onClick={onSetDefault}
            className="rounded-lg bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800"
          >
            Set Default
          </button>
        )}

      </div>

    </div>
  );
}