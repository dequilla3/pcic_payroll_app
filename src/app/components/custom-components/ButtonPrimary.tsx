// components/Button.tsx

import React from "react";
import SpinnerSmall from "./SpinnerSmall";

interface ButtonProps {
  onClick?: () => void;
  text: string;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  loading,
  disabled,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-xs px-8 py-2.5 text-center block w-full mb-2"
      disabled={disabled}
    >
      <div className="flex justify-center">
        {loading ? <SpinnerSmall /> : null}
        {text}
      </div>
    </button>
  );
};

export default Button;
