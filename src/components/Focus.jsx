import { useState } from "react";
import { focuses } from "../constants";
import styles from "../style";

const FocusCard = ({
  title,
  img,
  bullet,
  detail1,
  detail2,
  detail3,
  detail4,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="relative w-[258px]">
      <div className="bg-tertiary mx-4 rounded-[10px] box-shadow">
        <h4 className={`${styles.heading4} ${styles.flexCenter} h-[75px]`}>
          {title}
        </h4>
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
          <ul className={`${styles.paragraph} space-y-3`}>
            <li className="flex">
              <img src={bullet} alt="freeicons.io" className="w-7 mr-3" />
              {detail1}
            </li>
            <li className="flex">
              <img src={bullet} alt="freeicons.io" className="w-7 mr-3" />
              {detail2}
            </li>
            <li className="flex">
              <img src={bullet} alt="freeicons.io" className="w-7 mr-3" />
              {detail3}
            </li>
            <li className="flex">
              <img src={bullet} alt="freeicons.io" className="w-7 mr-3" />
              {detail4}
            </li>
          </ul>
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
      <div className="grid grid-cols-1 place-items-center max-w-[1080px] md:grid-cols-2 lg:grid-cols-4 gap-4">
        {focuses.map((focus, index) => (
          <FocusCard key={focus.id} {...focus} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
