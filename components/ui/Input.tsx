import {
  forwardRef,
  InputHTMLAttributes,
} from "react";

type InputProps =
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
  };

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const inputId =
      id ??
      props.name ??
      Math.random().toString(36).slice(2);

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
          ref={ref}
          id={inputId}
          suppressHydrationWarning
          autoComplete="off"
          spellCheck={false}
          autoCapitalize="none"
          aria-invalid={!!error}
          aria-describedby={
            error
              ? `${inputId}-error`
              : undefined
          }
          className={`
            h-14
            w-full
            rounded-md
            border
            bg-white
            px-5
            outline-none
            transition-all
            duration-200

            ${
              error
                ? "border-red-500 focus:border-red-500"
                : "border-neutral-300 focus:border-black"
            }

            ${className}
          `}
          {...props}
        />

        {error && (
          <p
            id={`${inputId}-error`}
            className="text-sm text-red-500"
          >
            {error}
          </p>
        )}

      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;