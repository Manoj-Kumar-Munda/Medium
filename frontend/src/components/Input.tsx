import { ChangeEventHandler, forwardRef, useId } from "react";

interface InputProps {
  label: string;
  className?: string;
  type?: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input = forwardRef(function Input(
  { label, type = "text", className = "", onChange, ...props }: InputProps,
  ref
) {
  const id = useId();

  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor="">{label}</label>}

      <input
        type={type}
        onChange={onChange}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-black    focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
