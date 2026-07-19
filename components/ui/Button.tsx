"use client";

import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: string;
    children: React.ReactNode;
    variant?: "primary" | "outline" | "ghost";
    external?: boolean;
    fullWidth?: boolean;
    loading?: boolean;
  };

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  disabled = false,
  fullWidth = false,
  loading = false,

  className = "",

  ...props
}: ButtonProps) {
  const baseClass =
    variant === "primary"
      ? "inline-flex h-14 items-center justify-center rounded-full bg-black px-10 text-xs font-medium uppercase tracking-[0.28em] text-white transition-all duration-300 hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
      : variant === "outline"
      ? "inline-flex h-14 items-center justify-center rounded-full border border-black px-10 text-xs font-medium uppercase tracking-[0.28em] transition-all duration-300 hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
      : "inline-flex h-14 items-center justify-center rounded-full px-10 text-xs font-medium uppercase tracking-[0.28em] transition-all duration-300 hover:text-[#B99143] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2";

  const disabledClass =
    disabled || loading
      ? "opacity-50 cursor-not-allowed pointer-events-none"
      : "";

  const widthClass = fullWidth
    ? "w-full"
    : "";

  if (href) {
    if (external) {
      return (
        <a
          href={disabled || loading ? undefined : href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClass} ${disabledClass} ${widthClass} ${className}`}
          aria-disabled={disabled || loading}
        >
          {loading ? "Loading..." : children}
        </a>
      );
    }

    return (
      <Link
        href={disabled || loading ? "#" : href}
        className={`${baseClass} ${disabledClass} ${widthClass} ${className}`}
        aria-disabled={disabled || loading}
      >
        {loading ? "Loading..." : children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      disabled={disabled || loading}
      className={`${baseClass} ${disabledClass} ${widthClass} ${className}`}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}