import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer container-fluid">
      <div>
        <span>
          {" "}
          Copyright © Mubashir Ali,{" "}
          <a href="mailto:mubashir.imtiaz123@gmial.com">
            mubashir.imtiaz123@gmial.com
          </a>{" "}
          - 2020
        </span>
      </div>
      <div>
        <span>Github Repo:</span>{" "}
        <a href="https://github.com/mubashirimtiaz/Covid19-Tracker">
          https://github.com/mubashirimtiaz
        </a>
      </div>
    </div>
  );
};

export default Footer;
