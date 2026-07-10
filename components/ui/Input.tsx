import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      suppressHydrationWarning
      autoComplete="off"
      spellCheck={false}
      autoCapitalize="none"
      className={`
        w-full
        border
        border-neutral-300
        px-5
        py-4
        outline-none
        transition
        focus:border-black
        ${className}
      `}
      {...props}
    />
  );
}