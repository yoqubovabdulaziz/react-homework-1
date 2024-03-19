import React from "react";
import "./footer.css";

import QuoteBtn from "../quote-btn/Quote-btn";

import footerLogo from "../../assets/images/logosvg.svg";

function Footer() {
  return (
    <footer>
      <div className="container footer">
        <div className="footer__start">
          <h1>Quality cleaning for your home</h1>
          <p>
            Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.
          </p>
          <div className="footer__start__inputs">
            <input maxLength={1} type="text" />
            <input maxLength={1} type="text" />
            <input maxLength={1} type="text" />
            <input maxLength={1} type="text" />
            <input maxLength={1} type="text" />
          </div>
        </div>
        <div className="footer__location">
          <h4>Contact us</h4>
          <p className="footer__direction">
            1827 Nickel Road, Los Angeles, CA, 90017, United States
          </p>
          <p className="footer__location__number">(414) 567 - 2109</p>
          <p className="footer__location__email">contact@cleaning.com</p>
        </div>
        <div className="footer__work__time">
          <h3>Hours</h3>
          <div className="day__time">
            <h4>Monday to Friday</h4>
            <p>6:00 AM - 9:00 PM</p>
          </div>
          <div className="day__time">
            <h4>Saturday & Sunday</h4>
            <p>8:00 AM - 8:00 PM</p>
          </div>
        </div>
        <div className="footer__end">
          <h3>Get a free estimate</h3>
          <a href="(414) 567 - 2109">(414) 567 - 2109</a>
          <p>
            Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.
          </p>
          <QuoteBtn />
        </div>
      </div>
      <div className="container footer__bottom">
        <a href="#footer" className="footer__logo">
          <img src={footerLogo} alt="" />
        </a>
        <div className="footer__bottom__right">
          <p>
            Copyright © Cleaning X | Designed by <span>BRIX Templates</span> -
            Powered by <span>Webflow Licenses</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
