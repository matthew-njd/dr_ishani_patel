import React, { useState } from "react";
import { services } from "../constants";
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
      className={`bg-secondary flex items-center flex-start p-2 rounded-[10px] box-shadow service-card ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!showContent ? (
        <>
          <div className="w-[50%] h-[50%] rounded-full">
            <img
              src={icon}
              alt="freeicons.io"
              className="w-[100%] h-[100%] object-contain"
            />
          </div>
          <div className="">
            <h2 className="font-regluar font-semibold text-[24px] leading-[23px]">
              {title}
            </h2>
          </div>
          {isHovered && (
            <button className="service-button" onClick={handleClick}>
              Learn More
            </button>
          )}
        </>
      ) : (
        <>
          <p className="font-regluar font-normal text-gray-600 text-[16px] leading-[20px]">
            {content}
          </p>
          {isHovered && (
            <button className="service-button" onClick={handleClick}>
              Learn More
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
        <p className={`${styles.paragraph} px-[100px] mb-[5%]`}>
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

        <div className="grid grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
