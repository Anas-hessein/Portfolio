import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";
import Lottie from "lottie-react";
import done from "../../../public/Success.json"
import mail from "../../../public/mail.json"

const Contact = () => {
  const [state, handleSubmit] = useForm("xbdrgkbg");

 

  return (
    <section className="contact">
      <h1 className="title">
        <span className="icon-mail"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        {" "}
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div style={{justifyContent: "space-between"}} className="flx">
        <form onSubmit={handleSubmit}>
          <div className="flx">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              placeholder="Email Address"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flx" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Sending ..." : "Submit"}
          </button>

          {state.succeeded && (
            <p className="flx"  style={{  fontWeight: "bold", color: "var(--st)", fontSize: "18px", marginTop: "1.7rem" }}>

                <Lottie loop={false} style={{height: 30 }} animationData={done}/>


              your message has been sent successfully! ❤️{" "}
            </p>
          )}
        </form>

        <div className="animation">
          <Lottie className="contactAni" style={{height: 355 }} animationData={mail}/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
