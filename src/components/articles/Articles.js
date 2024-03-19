import React from "react";
import "./articles.css";
import QuoteBtn from "../quote-btn/Quote-btn";
import ExploreBtn from "../explore-btn/Explore-btn";

import articlesImg1 from "../../assets/images/articles-1.png";
import articlesImg2 from "../../assets/images/articles-2.png";

import kvadrat from "../../assets/images/articles-kvadrat.png";

function Articles() {
  return (
    <div className="container articles">
      <div className="articles__header">
        <h1 className="articles__title">Articles & resources</h1>
        <div className="articles__header__buttons">
          <QuoteBtn />
          <ExploreBtn />
        </div>
      </div>
      <div className="articles__row">
        <div className="articles__left">
          <img src={articlesImg1} alt="" />
          <div className="articles__box">
            <h3 className="articles__box__header">
              8 best vacuum cleaners to clean any mess for your home in 2022
            </h3>
            <p className="articles__box__body">
              Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
              quis odio sit sit ac port titor sit males.
            </p>
            <div className="articles__box__bottom">
              <h6>Jan 28, 2022</h6>
              <img src={kvadrat} alt="" />
            </div>
          </div>
        </div>
        <div className="articles__right">
          <img src={articlesImg2} alt="" />
          <div className="articles__box">
            <h3 className="articles__box__header">
              8 best vacuum cleaners to clean any mess for your home in 2022
            </h3>
            <p className="articles__box__body">
              Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
              quis odio sit sit ac port titor sit males.
            </p>
            <div className="articles__box__bottom">
              <h6>Jan 28, 2022</h6>
              <img src={kvadrat} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
