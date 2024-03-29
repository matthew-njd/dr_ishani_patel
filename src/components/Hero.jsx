import { homePic } from "../assets";
import styles from "../style";
import Button from "./Button";

function goToBooking() {
  document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
}

const Hero = () => (
  <section id="home" className={`flex ${styles.paddingY}`}>
    <div
      className={`relative flex-col md:flex-row ${styles.flexCenter} mr-4 ml-4`}
    >
      <div className="relative z-[1] bg-primary font-regular p-10 text-[22px] md:mr-[-50px] lg:text-[18px] box-shadow-full rounded-lg">
        Hormones | Digestion | Fertility | Autoimmune
        <br />
        <span className="ss:text-[32px] text-[22px]">
          Dr. Ishani Patel, Naturopathic Doctor <br />
          <br />
        </span>
        <p className="italic ss:text-[16px] text-[14px]">
          Empowering driven women to understand their hormones, and assisting
          them to find their balance in living the life they always aspired for.
        </p>
        <div className="ss:flex md:mr-4 mr-0">
          <Button
            styles="mt-10 btn-card animate-bounce bg-secondary"
            onClick={goToBooking}
            text="Book Now"
          />
        </div>
      </div>

      <div className="relative max-w-[469px] my-4">
        <img
          src={homePic}
          alt="portrait"
          className="w-[100%] box-shadow-full rounded-lg"
        />
      </div>
    </div>
  </section>
);

export default Hero;
