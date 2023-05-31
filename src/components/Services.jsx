import React, { useState } from "react";
import { services } from "../constants";
import { info } from "../assets";
import styles from "../style";

const ServiceCard = ({ icon, title, content }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(!showContent);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`bg-secondary flex flex-row lg:flex-col items-center w-[450px] h-[250px] p-2 rounded-[10px] box-shadow service-card ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!showContent ? (
        <>
          <img
            src={icon}
            alt="freeicons.io"
            className="w-[50%] h-[50%] object-contain mt-4"
          />
          <h2 className="font-regluar font-semibold text-[24px] leading-[23px]">
            {title}
          </h2>
          {isHovered && (
            <button
              className="absolute inset-x-0 bottom-0 m-1 p-2 bg-tertiary text-white rounded-[5px]"
              onClick={handleClick}
            >
              Learn More
            </button>
          )}
        </>
      ) : (
        <>
          <p className="font-regluar text-center font-normal text-gray-600 mt-4 text-[18px] leading-[20px]">
            {content}
          </p>
          {isHovered && (
            <button
              className="absolute inset-x-0 bottom-0 m-1 p-2 bg-tertiary text-white rounded-[5px]"
              onClick={handleClick}
            >
              Back
            </button>
          )}
        </>
      )}
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className={`${styles.paddingY}`}>
      <div className="grid">
        <h2 className={`${styles.heading2} ${styles.flexCenter}`}>Services</h2>
        <p className={`${styles.paragraph} lg:px-[100px] mb-[5%]`}>
          Our initial meeting will comprise of a detailed assessment. Together,
          we will review your health goals, analyze relevant blood work with
          additional testing, perform necessary physical examinations. We will
          obtain a greater understanding of the present obstacles standing in
          the way of reaching these goals. From the initial appoinhtment, we
          will establish a foundational health plan. In future follow-up
          appointments, we will dive deeper to review testing and look at the
          effectiveness of the implemented treatment protocols. Through these
          appointments, we will track your health progress and implement any
          changes to the treatment plan, ensuring it matches your lifestyle
          goals. <br />
          <br />I value focussing on the basics; this starts off by looking at
          the pillars of health and establishing a core foundation. Forming
          realistic and healthy habits enhances our ability to sustain our
          wellbeing long-term.
        </p>

        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
