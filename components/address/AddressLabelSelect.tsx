"use client";


type AddressLabel =
  | "Home"
  | "Office"
  | "Other";


type AddressLabelSelectProps = {
  value: AddressLabel;

  onChange: (
    value: AddressLabel
  ) => void;
};


const options: {
  value: AddressLabel;
  title: string;
  description: string;
}[] = [

  {
    value: "Home",
    title: "Home",
    description:
      "Your main residence",
  },

  {
    value: "Office",
    title: "Office",
    description:
      "Work or business address",
  },

  {
    value: "Other",
    title: "Other",
    description:
      "Other delivery address",
  },

];


export default function AddressLabelSelect({
  value,
  onChange,
}: AddressLabelSelectProps) {


  return (

    <div className="space-y-3">


      <label
        className="
          text-sm
          font-medium
          text-neutral-800
        "
      >
        Address Type
      </label>



      <div
        className="
          grid
          gap-3
          md:grid-cols-3
        "
      >

        {options.map((item) => (

          <button

            key={item.value}

            type="button"

            onClick={() =>
              onChange(item.value)
            }

            className={`
              rounded-xl
              border
              p-4
              text-left
              transition-all
              duration-300

              ${
                value === item.value
                  ? `
                    border-black
                    bg-black
                    text-white
                  `
                  : `
                    border-neutral-200
                    bg-white
                    hover:border-black
                  `
              }
            `}

          >

            <p
              className="
                font-medium
              "
            >
              {item.title}
            </p>


            <p
              className={`
                mt-1
                text-xs

                ${
                  value === item.value
                    ? "text-neutral-300"
                    : "text-neutral-500"
                }
              `}
            >
              {item.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}