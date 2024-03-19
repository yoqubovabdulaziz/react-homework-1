import React from "react";
import "./call-us-btn.css";
import phoneIcon from "../../assets/images/phone-icon.svg";

function CallUsBtn() {
  return (
    <div className="call__us__box">
      <button className="phone__btn">
        <img className="phone__icon" src={phoneIcon} alt="phone-icon" />
      </button>
      <div className="phone__btn__right">
        <span className="phone__btn__text">Call us now</span>
        <p className="phone__number">(414) 567 - 2109</p>
      </div>
    </div>
  );
}

export default CallUsBtn;
