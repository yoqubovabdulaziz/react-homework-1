import React from "react";

import "./about.css";

import aboutImg1 from "../../assets/images/about-1.png";
import aboutImg2 from "../../assets/images/about-2.png";
import aboutImg3 from "../../assets/images/about-3.png";
import QuoteBtn from "../quote-btn/Quote-btn";
import ExploreBtn from "../explore-btn/Explore-btn";

function About() {
  return (
    <div className="container about">
      <h1 className="about__title">About Us</h1>
      <p className="about__body">
        Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque
        nisi felis non ultrices massa id egestas quam velit pretium nu.
      </p>
      <div className="about__row">
        <div className="about__box">
          <img src={aboutImg1} alt="" />
          <div className="about__box__content">
            <h4 className="about__box__title">1. Schedule online</h4>
            <p className="about__box__body">
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </p>
          </div>
        </div>
        <div className="about__box">
          <img src={aboutImg2} alt="" />
          <h4 className="about__box__title">2. Pay online easily</h4>
          <p className="about__box__body">
            Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet
            at nunc.
          </p>
        </div>
        <div className="about__box">
          <img src={aboutImg3} alt="" />
          <h4 className="about__box__title">3. Get your house cleaned</h4>
          <p className="about__box__body">
            Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus
            eleifend.
          </p>
        </div>
      </div>
      <div className="about__bottom">
        <QuoteBtn />
        <ExploreBtn />
      </div>
    </div>
  );
}

export default About;
