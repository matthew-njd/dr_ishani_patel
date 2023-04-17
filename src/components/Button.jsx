import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`bg-secondary py-4 px-6 font-regular font-medium text-[18px] rounded-[10px] outline-none ${styles} service-card`}
  >
    Learn More
  </button>
);

export default Button;
