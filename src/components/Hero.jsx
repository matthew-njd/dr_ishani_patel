import { homePic } from "../assets";
import styles from "../style";
import Button from "./Button";

function goToServices() {
  document.getElementById("focuses").scrollIntoView({ behavior: "smooth" });
}

const Hero = () => (
  <section id="home" className={`flex ${styles.paddingY}`}>
    <div
      className={`relative flex-1 ${styles.flexStart} items-center ss:flex-row xl:px-0 sm:px-16`}
    >
      <div className="relative z-[1] mr-[-50px] bg-primary font-regular p-10 md:mr ss:text-[22px] text-[18px] box-shadow-full rounded-lg">
        Hormones | Digestion | Fertility | Autoimmune
        <br />
        <span className="ss:text-[32px] text-[22px]">
          Dr. Ishani Patel, Naturopathic Doctor <br />
          <br />
        </span>
        <p className="italic ss:text-[16px] text-[10px]">
          Empowering driven women to understand their hormones, and assisting
          them <br />
          to find their balance in living the life they always aspired for.
        </p>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <Button
            styles={`mt-10 btn-card animate-bounce bg-secondary`}
            onClick={goToServices}
            text="Learn More"
          />
        </div>
      </div>

      <div className={`relative flex-1 md:my-0 my-10`}>
        <img
          src={homePic}
          alt="portrait"
          className="w-[100%] box-shadow-full rounded-lg"
        />
      </div>
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <Button
        styles={`mt-10 btn-card bg-secondary`}
        onClick={goToServices}
        text="Learn More"
      />
    </div>
  </section>
);

export default Hero;
