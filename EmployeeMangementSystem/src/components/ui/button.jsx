import React from "react";

const Button = ({ children, className = "", variant, ...props }) => {
  const baseStyle = "px-4 py-2 rounded-md font-medium focus:outline-none";
  const variantStyle = variant === "outline"
    ? "border border-gray-300 bg-white hover:bg-gray-100 text-gray-800"
    : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

export { Button };
