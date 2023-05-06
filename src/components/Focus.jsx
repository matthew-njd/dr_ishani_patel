import { focuses } from "../constants";
import styles from "../style";
import Button from "./Button";

function goToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

const FocusCard = ({ title, img }) => (
  <div className="relative">
    <div className="bg-tertiary mx-4 rounded-[10px] box-shadow">
      <h4 className={`${styles.heading4} ${styles.flexCenter}`}>{title}</h4>
    </div>
    <img
      src={img}
      alt="freeicons.io"
      className="relative top-[-10px] w-[100%] rounded-[10px] box-shadow-full service-card"
    />
  </div>
);

const Services = () => {
  return (
    <section id="focuses" className={`${styles.paddingY}`}>
      <div className="grid grid-row-2">
        <div className="grid grid-cols-4 gap-4">
          {focuses.map((focus, index) => (
            <FocusCard key={focus.id} {...focus} index={index} />
          ))}
        </div>
        <div className={`${styles.flexCenter}`}>
          <Button
            styles={`mt-10 btn-card bg-secondary`}
            onClick={goToContact}
            text={"Get Started"}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
