import React from "react";

const Button = ({ styles, onClick }) => (
  <button
    type="button"
    className={`bg-secondary py-4 px-6 font-regular font-medium text-[18px] rounded-[5px] outline-none ${styles}`}
    onClick={onClick}
  >
    Learn More
  </button>
);

export default Button;
