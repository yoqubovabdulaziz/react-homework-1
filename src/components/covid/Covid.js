import React from "react";
import QuoteBtn from "../quote-btn/Quote-btn";
import CallUsBtn from "../call-us/Call-us-btn";

import "./covid.css";

import covidImg from "../../assets/images/covid.png";

function Covid() {
  return (
    <div className="container">
      <section id="covid">
        <div className="covid">
          <div className="covid__left">
            <img className="covid__img" src={covidImg} alt="" />
          </div>
          <div className="covid__right">
            <p className="covid__caption">COVID-19 SANITIZATION</p>
            <h1 className="covid__title">
              We follow guidelines to keep you safe from the COVID-19 virus
            </h1>
            <p className="covid__body">
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus.
            </p>
            <div className="covid__buttons">
              <QuoteBtn />
              <CallUsBtn />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Covid;
