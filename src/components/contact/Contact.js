import React from "react";

import "./contact.css";

import CallUsBtn from "../call-us/Call-us-btn";

function Contact() {
  return (
    <section id="contact">
      <div className="container contact">
        <div className="contact__left">
          <h1 className="contact__title">Contact Us</h1>
          <p className="contact__body">
            In dignissim euismod pretium amet enim a eu nam ut urna accumsan
            pellentesque lacus duis pharetra eutortor.
          </p>
          <div className="call__us__btn">
            <CallUsBtn />
          </div>
          <h2 className="contact__title-2">Not convinced yet?</h2>
          <p className="contact__body-2">
            Massa bibendum consectetur maurisid gravida purus, dolor dui amet
            morbi non nunc urna purus diam.
          </p>
          <button className="contact__btn">Browse our packages</button>
        </div>
        <div className="contact__right">
          <div className="inputs__row">
            <div className="name__input">
              <label htmlFor="">Full name</label>
              <div className="input__box">
                <input type="text" />
              </div>
            </div>
            <div className="name__input">
              <label htmlFor="">Phone number</label>
              <div className="input__box">
                <input type="text" />
              </div>
            </div>
            <div className="name__input">
              <label htmlFor="">Address</label>
              <div className="input__box">
                <input type="text" />
              </div>
            </div>
            <div className="name__input">
              <label htmlFor="">Email</label>
              <div className="input__box">
                <input type="text" />
              </div>
            </div>
            <div className="name__input">
              <label htmlFor="">Requested service</label>
              <div className="input__box">
                <input type="text" />
              </div>
            </div>
            <div className="name__input">
              <label htmlFor="">Day of service</label>
              <div className="input__box">
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="comment__input">
            <label htmlFor="">Add a note</label>
            <div className="comment__input__box">
              <textarea cols="30" rows="2"></textarea>
            </div>
          </div>
          <button className="submit__btn">Submit message</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
