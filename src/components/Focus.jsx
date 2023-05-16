import { useState } from "react";
import { focuses } from "../constants";
import styles from "../style";
//import Button from "./Button";

/* function goToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
} */

const FocusCard = ({ title, img, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="relative">
      <div className="bg-tertiary mx-4 rounded-[10px] box-shadow">
        <h4 className={`${styles.heading4} ${styles.flexCenter}`}>{title}</h4>
      </div>
      {!showDetails ? (
        <>
          <img
            src={img}
            alt="freeicons.io"
            className="relative top-[-10px] w-[100%] rounded-[10px] cursor-pointer box-shadow-full focus-card"
            onClick={handleClick}
          />
        </>
      ) : (
        <div
          className="relative bg-secondary p-4 top-[-10px] w-[100%] h-[258px] rounded-[10px] cursor-pointer box-shadow-full focus-card"
          onClick={handleClick}
        >
          <p className={`${styles.paragraph}`}>{details}</p>
        </div>
      )}
    </div>
  );
};

const Services = () => {
  return (
    <section id="focuses" className={`${styles.paddingY}`}>
      <div>
        <h2 className={`${styles.heading2} ${styles.flexCenter}`}>
          At a Glance
        </h2>
      </div>
      <div className="grid grid-row-2">
        <div className="grid grid-cols-4 gap-4">
          {focuses.map((focus, index) => (
            <FocusCard key={focus.id} {...focus} index={index} />
          ))}
        </div>
        {/*         <div className={`${styles.flexCenter}`}>
          <Button
            styles={`mt-10 btn-card bg-secondary`}
            onClick={goToContact}
            text={"Get Started"}
          />
        </div> */}
      </div>
    </section>
  );
};

export default Services;
