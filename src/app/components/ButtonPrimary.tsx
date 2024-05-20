// components/Button.tsx

import React from "react";

interface ButtonProps {
  onClick?: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-xs px-8 py-2.5 text-center block w-full mb-2"
    >
      {text}
    </button>
  );
};

export default Button;
