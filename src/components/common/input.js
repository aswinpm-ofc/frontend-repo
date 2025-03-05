import React from "react";

const Input = ({ placeholder, className, ...props }) => {
  return (
    <input className={`input ${className}`} placeholder={placeholder} {...props} />
  );
};

export default Input;
