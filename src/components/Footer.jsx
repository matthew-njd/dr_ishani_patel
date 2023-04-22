import { clinics } from "../constants";
import styles, { layout } from "../style";

const ClinicDetails = ({
  title,
  address,
  location,
  phone,
  hours1,
  hours2,
  hours3,
  maps,
  img,
}) => (
  <div className={`${layout.sectionInfo}`}>
    <h4 className="font-regular font-normal text-[22px]">{title}</h4>
    <p className="font-regular font-normal text-[16px]">{address}</p>
    <p className="font-regular font-normal text-[16px]">{location}</p>
    <a href={`tel:${phone}`}>
      <p className="font-regular font-normal text-[16px]">{phone}</p>
    </a>
    <p className="font-regular font-normal text-[16px]">{hours1}</p>
    <p className="font-regular font-normal text-[16px]">{hours2}</p>
    <p className="font-regular font-normal text-[16px]">{hours3}</p>
    <a href={maps} className="w-[250px] h-[250px]" target="_blank">
      <img src={img} alt="maps" className="w-[100%] h-[100%] object-contain" />
    </a>
  </div>
);

const Footer = () => {
  return (
    <section className={`${layout.section}`}>
      <div className="text-white grid grid-cols-2 w-full">
        {clinics.map((clinic, index) => (
          <ClinicDetails key={clinic.id} {...clinic} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Footer;
