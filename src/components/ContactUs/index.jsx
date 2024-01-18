import React from "react";
import "./index.scss"

function ContactUs() {
  return (
    <div className="contactUs">
      <div className="contactUsAll">
        <div className="icon"><i className="fa-solid fa-bacon"></i></div>
        <div className="head">Contact Us</div>
        <div className="input">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="E-mail" />
        </div>
        <div className="form">
          <textarea placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="btn">
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
