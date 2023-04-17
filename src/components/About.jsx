import { aboutPic } from "../assets";
import styles, { layout } from "../style";

const About = () => (
  <section id="about" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={aboutPic} alt="about" className="w-[100%] relative z-[5]" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Meet Dr. Patel, ND!</h2>
      <p className={`${styles.paragraph} w-full mt-5`}>
        Hi there, I’m Dr. Patel! Let’s work together and get you feeling like
        your best self.
      </p>
      <p className={`${styles.paragraph} w-full mt-5`}>
        My journey to naturopathic medicine started when I was in my 20’s. I was
        at a place in my life where I felt like I had exhausted all of my health
        options, and was looking for hope. Each day brought me new surprises,
        whether they were good or bad, and my body was constantly adapting to
        these to the best of its ability. However, nothing helped; it wasn’t
        until I started to nourish my body and establish the key foundations of
        my health (sleep, diet, stress, exercise). At this point, I realized
        that naturopathic medicine taught me how to live my life optimally.
      </p>
      <p className={`${styles.paragraph} w-full mt-5`}>
        My personal experience and passion is what drove me to become a
        Naturopathic Doctor. I have always believed that with commitment,
        education, and encouragement, the body can repair itself back to a state
        of sustainable health and wellness. I utilize a combination of
        traditional medicine with evidence based medicine, to help you put all
        the puzzle pieces together and fill in the gaps to determine the root
        cause of your health concerns. My goal is to work with you
        collaboratively to determine the root cause, create a personalized
        treatment plan, and prevent disease.
      </p>
    </div>
  </section>
);

export default About;
