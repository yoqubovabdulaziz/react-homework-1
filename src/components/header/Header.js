import "./header.css";
import logo from "../../assets/images/logosvg.svg";

function Header() {
  return (
    <header>
      <nav className="navbar container">
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-list">
          <a className="nav-links" href="#home">
            home
          </a>
          <a className="nav-links" href="#about">
            about
          </a>
          <a className="nav-links" href="#services">
            services
          </a>
          <a className="nav-links" href="#articles">
            Articles
          </a>
          <a className="nav-links" href="#contact">
            Contact
          </a>
        </div>
        <div className="nav-end">
          <button className="cart-btn">Cart(0)</button>
          <button className="nav-quote-btn">Get a free quote</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
