import React from "react";

import "./services.css";
import ExploreBtn from "../explore-btn/Explore-btn";

import servicesImg1 from "../../assets/images/services-1.png";
import servicesImg2 from "../../assets/images/services-2.png";
import servicesImg3 from "../../assets/images/services-3.png";

function Services() {
  return (
    <div className="container services">
      <div className="services__header">
        <h1 className="services__title">Our Services</h1>
        <ExploreBtn />
      </div>
      <div className="services__row">
        <div className="services__card">
          <div className="services__card__frame">
            <img src={servicesImg1} alt="" />
          </div>
          <div className="services__card__content">
            <h3 className="services__card__title">House cleaning</h3>
            <p className="services__card__body">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
        <div className="services__card">
          <div className="services__card__frame">
            <img src={servicesImg2} alt="" />
          </div>
          <div className="services__card__content">
            <h3 className="services__card__title">Office cleaning</h3>
            <p className="services__card__body">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
        <div className="services__card">
          <div className="services__card__frame">
            <img src={servicesImg3} alt="" />
          </div>
          <div className="services__card__content">
            <h3 className="services__card__title">Industrial cleaning</h3>
            <p className="services__card__body">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
