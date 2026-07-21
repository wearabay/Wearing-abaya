import {
  InputHTMLAttributes,
  useId,
} from "react";

type InputProps =
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
  };


export default function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {

  const inputId = useId();


  return (
    <div className="space-y-2">

      {label && (
        <label
          htmlFor={inputId}
          className="
            text-xs
            uppercase
            tracking-[0.2em]
            text-neutral-600
          "
        >
          {label}
        </label>
      )}


      <input
        id={inputId}
        suppressHydrationWarning
        autoComplete="off"
        spellCheck={false}
        autoCapitalize="none"
        className={`
          h-14
          w-full
          rounded-md
          border
          border-neutral-300
          bg-white
          px-5
          outline-none
          transition
          focus:border-black
          ${error ? "border-red-500" : ""}
          ${className}
        `}
        {...props}
      />


      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

    </div>
  );
}