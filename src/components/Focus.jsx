import { focuses } from "../constants";
import styles from "../style";

const FocusCard = ({ title, content1, content2, content3, content4 }) => (
  <div className="relative">
    <div className="bg-tertiary mx-4 rounded-[10px] ">
      <h4 className={`${styles.heading4} ${styles.flexCenter}`}>{title}</h4>
    </div>
    <div
      className={`relative top-[-10px] bg-secondary flex flex-row p-6 w-full h-[75%] rounded-[10px] box-shadow service-card`}
    >
      <ul className="font-regluar font-normal text-[16px] leading-[24px] list-disc ml-6">
        <li>{content1}</li>
        <li>{content2}</li>
        <li>{content3}</li>
        <li>{content4}</li>
      </ul>
    </div>
  </div>
);

const Services = () => {
  return (
    <section id="focuses" className={`${styles.paddingY}`}>
      <div className="grid">
        <div className="grid grid-cols-4 gap-2">
          {focuses.map((focus, index) => (
            <FocusCard key={focus.id} {...focus} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
