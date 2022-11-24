import React from "react";
import "./Header.css";

import Cta from "./Cta";
import ME from "./../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Edet Famak</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <Cta />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="my-photo" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
