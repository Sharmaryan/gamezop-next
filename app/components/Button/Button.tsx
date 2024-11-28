import React from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <button
      {...rest}
      className="bg-secondary font-bold py-2 px-3 text-xs w-fit rounded-xl md:px-4 md:py-3 md:text-base"
    >
      {children}
    </button>
  );
};
