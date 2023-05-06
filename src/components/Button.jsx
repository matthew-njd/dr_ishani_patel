import React from "react";

const Button = ({ styles, onClick, text }) => (
  <button
    type="button"
    className={`py-4 px-6 font-regular font-medium text-[18px] rounded-[5px] outline-none ${styles}`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
