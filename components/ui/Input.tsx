type InputProps = {
  placeholder?: string;
  type?: string;
};

export default function Input({
  placeholder,
  type = "text",
}: InputProps) {
  return (
    <input
      suppressHydrationWarning
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      spellCheck={false}
      autoCapitalize="none"
      className="w-full border border-neutral-300 px-5 py-4 outline-none focus:border-black"
    />
  );
}