import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles, { layout } from "../style";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ishani_patel",
        "template_ishani_patel",
        form.current,
        "klslTT73yj2673ewc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className={styles.paddingY}>
      <div className={styles.flexCenter}>
        <h2 className={styles.heading2}>Get in Touch</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className={layout.sectionInfo}>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Have a question? Please fill out the form, and Dr. Patel, ND will
            get back to you within 1-2 business days.
            <br />
            <br />
            Let’s work together and get you feeling like your best self.
          </p>
        </div>

        <div className={`${layout.sectionInfo}`}>
          <div className="bg-secondary w-full mt-5 box-shadow-full rounded-lg">
            <form ref={form} onSubmit={sendEmail}>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    className={`${styles.textInput}`}
                    placeholder="First Name"
                    name="firstName"
                    required
                  />
                  <input
                    type="text"
                    className={`${styles.textInput}`}
                    placeholder="Last Name"
                    name="lastName"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <input
                    type="email"
                    className={`${styles.textInput}`}
                    placeholder="Email Address"
                    name="email"
                    required
                  />
                  <input
                    type="phone"
                    className={`${styles.textInput}`}
                    placeholder="Phone Number"
                    name="phone"
                    required
                  />
                </div>
                <div className="pt-2 mx-auto">
                  <input
                    type="text"
                    className={`${styles.textInput}`}
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </div>
                <div className="pt-2 mx-auto">
                  <textarea
                    className={`${styles.textInput} form__text-area w-full h-36`}
                    id=""
                    placeholder="Your message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="pt-3 mx-auto">
                  <input
                    type="submit"
                    className={`bg-tertiary text-white ${styles.button} btn-card cursor-pointer`}
                    value="Send Message"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
