import { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
};

export default function Select({
  label,
  error,
  className = "",
  children,
  ...props
}: SelectProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-xs uppercase tracking-[0.2em] text-neutral-600">
          {label}
        </label>
      )}

      <div className="relative">
        <select
          className={`
            h-14
            w-full
            appearance-none
            rounded-md
            border
            border-neutral-300
            bg-white
            px-5
            pr-12
            outline-none
            transition
            focus:border-black
            ${error ? "border-red-500" : ""}
            ${className}
          `}
          {...props}
        >
          {children}
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500"
        />
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}