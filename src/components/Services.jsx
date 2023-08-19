import React, { useState } from "react";
import { services } from "../constants";
import styles from "../style";
import { arrow } from "../assets";

const ServiceCard = ({ icon, title, content }) => {
  //const [isHovered, setIsHovered] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(!showContent);
  };

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  return (
    <div
      className={`bg-secondary flex flex-row lg:flex-col items-center w-[375px] md:w-[450px] h-[275px] md:h-[250px] p-2 rounded-[10px] box-shadow service-card`}
      onClick={handleClick}
    >
      {!showContent ? (
        <>
          <img
            src={icon}
            alt="freeicons.io"
            className="w-[50%] h-[50%] object-contain mt-4"
          />
          <h2 className="font-regluar font-semibold text-[24px] mt-3 leading-[23px]">
            {title}
          </h2>
          <div className="absolute right-0 bottom-0 w-10 mr-3">
            <img src={arrow} alt="freeicons.io" className="" />
          </div>
        </>
      ) : (
        <>
          <h4 className="font-regluar font-bold text-gray-600 underline text-[18px] leading-[20px] pt-3">
            {title}
          </h4>
          <p className="font-regluar font-normal text-gray-600 text-[16px] leading-[20px] p-3">
            {content}
          </p>
          <div className="absolute left-0 bottom-0 rotate-180 w-10 ml-3">
            <img src={arrow} alt="freeicons.io" className="" />
          </div>
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
