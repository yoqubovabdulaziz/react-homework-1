import React from "react";
import "./hero.css";
import QuoteBtn from "../quote-btn/Quote-btn";
import CallUsBtn from "../call-us/Call-us-btn";
import heroImg from "../../assets/images/hero-img.png";

function Hero() {
  return (
    <div className="container hero">
      <div className="hero__left">
        <h1 className="hero__title">Quality cleaning for your home</h1>
        <p className="hero__body">
          Condimentum mauris sit cursus amet id non neque pharetra nulla ornare
          sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et
          nulla magna lacus penatibus.
        </p>
        <div className="hero__left__bottom">
          <QuoteBtn />
          <CallUsBtn />
        </div>
      </div>
      <div className="hero__right">
        <img className="hero__right__img" src={heroImg} alt="" />
      </div>
    </div>
  );
}

export default Hero;
