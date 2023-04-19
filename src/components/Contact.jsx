import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles, { layout } from "../style";

//npm install @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Get in Touch With Me</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          I value focussing on the basics; this starts off by looking at the
          pillars of health and establishing a core foundation. Forming
          realistic and healthy habits enhances our ability to sustain our
          wellbeing long-term.
        </p>
      </div>

      <div className={`${layout.sectionInfo}`}>
        <div className="bg-secondary w-full mt-5 rounded-[10px]">
          <form ref={form} onSubmit={sendEmail}>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  className="font-regular font-normal text-[18px] p-1 rounded"
                  placeholder="First Name"
                  name="firstName"
                />
                <input
                  type="text"
                  className="font-regular font-normal text-[18px] p-1 rounded"
                  placeholder="Last Name"
                  name="lastName"
                />
              </div>
              <div className="pt-2 mx-auto">
                <input
                  type="email"
                  className={`${styles.textInput}`}
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="pt-2 mx-auto">
                <input
                  type="text"
                  className={`${styles.textInput}`}
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="pt-2 mx-auto">
                <textarea
                  className={`${styles.textInput} form__text-area w-full h-36`}
                  id=""
                  placeholder="Your message"
                  name="message"
                ></textarea>
              </div>
              <div className="pt-3 mx-auto">
                <input
                  type="submit"
                  className={`bg-tertiary text-white ${styles.button} cursor-pointer`}
                  value="Send Message"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
