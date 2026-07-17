import { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
};

export default function Textarea({
  label,
  error,
  className = "",
  ...props
}: TextareaProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-xs uppercase tracking-[0.2em] text-neutral-600">
          {label}
        </label>
      )}

      <textarea
        className={`
          min-h-32
          w-full
          resize-none
          rounded-md
          border
          border-neutral-300
          px-5
          py-4
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