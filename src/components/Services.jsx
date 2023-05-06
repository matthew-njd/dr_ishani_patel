import { services } from "../constants";
import styles from "../style";

const ServiceCard = ({ icon, title, content }) => (
  <div
    className={`bg-secondary flex flex-row p-6 w-full rounded-[10px] box-shadow service-card`}
  >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}>
      <img
        src={icon}
        alt="freeicons.io"
        className="w-[100%] h-[100%] object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-regluar font-semibold text-[18px] leading-[23px]">
        {title}
      </h4>
      <p className="font-regluar font-normal text-gray-600 text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Services = () => {
  return (
    <section id="services" className={`${styles.paddingY}`}>
      <div className="grid">
        <h2 className={`${styles.heading2} ${styles.flexCenter} mb-5`}>
          Services
        </h2>
        <p className={`${styles.paragraph} px-[100px] mb-[5%]`}>
          I value focussing on the basics; this starts off by looking at the
          pillars of health and establishing a core foundation. Forming
          realistic and healthy habits enhances our ability to sustain our
          wellbeing long-term.
        </p>

        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
