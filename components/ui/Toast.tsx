"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";

export default function Toast() {
    console.log("Toast mounted");

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handler = (event: Event) => {
    console.log("Toast Event");
      const custom =
        event as CustomEvent<string>;

      setMessage(custom.detail);
      setOpen(true);

      setTimeout(() => {
        setOpen(false);
      }, 2200);
    };

    window.addEventListener(
      "toast",
      handler
    );

    return () =>
      window.removeEventListener(
        "toast",
        handler
      );
  }, []);

  return (
    <div
      className={`
fixed
top-6
left-1/2
z-[9999]
w-[340px]
max-w-[calc(100vw-32px)]
-translate-x-1/2
rounded-2xl
border
border-stone-200
bg-white
shadow-2xl
px-6
py-4

transition-all
duration-300

lg:left-auto
lg:right-6
lg:translate-x-0

${
open
? "translate-y-0 opacity-100"
: "-translate-y-8 opacity-0 pointer-events-none"
}
`}
    >
      <div className="flex items-center gap-4">

        <div className="rounded-full bg-green-100 p-2">

          <Check
            size={18}
            className="text-green-700"
          />

        </div>

        <div>

          <p className="text-sm font-medium">
            {message}
          </p>

          <p className="mt-1 text-xs text-neutral-500">
            Added successfully.
          </p>

        </div>

      </div>

    </div>
  );
}