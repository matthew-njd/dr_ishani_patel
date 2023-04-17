import { homePic } from "../assets";
import styles from "../style";
import Button from "./Button";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`relative flex-1 ${styles.flexStart} flex-col items-center ss:flex-row xl:px-0 sm:px-16`}
    >
      <div className="bg-primary flex-1 font-regular p-10 md:mr ss:text-[22px] text-[18px]">
        Hormones | Digestion | Fertility | Autoimmune <br />
        <span className="ss:text-[32px] text-[22px]">
          Dr. Ishani Patel, Naturopathic Doctor <br />
          <br />
        </span>
        <p className="italic ss:text-[16px] text-[10px]">
          Empowering driven women to understand their hormones, and assisting
          them <br />
          to find their balance in living the life they always aspired for
        </p>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <Button styles={`mt-10`} />
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10`}>
        <img src={homePic} alt="portrait" className="w-[100%]" />
      </div>
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <Button styles={`mt-10`} />
    </div>
  </section>
);

export default Hero;
