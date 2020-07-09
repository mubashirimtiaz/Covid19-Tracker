import React from "react";
import logo from "../../images/logo.png";
const Navbar = () => {
  return (
    <ul
      style={{ boxShadow: "1px 1px 8px #aaaaaa" }}
      className="nav justify-content-center bg-light py-3 mb-5"
    >
      <img style={{ height: "50px" }} src={logo} alt="logo" />
      {/* <li className="nav-item">
        <a className="nav-link active" href="#">
          Active link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">
          Disabled link
        </a>
      </li> */}
    </ul>
  );
};

export default Navbar;
