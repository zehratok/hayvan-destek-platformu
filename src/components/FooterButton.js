import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Button.css";

function FooterButton() {
  return (
    <>
      <nav className="footerButtonFlex">
        <Link to="/">
          <button className="footerButton">
            <Icons.FaInstagram />
          </button>
        </Link>
        <Link to="/">
          <button className="footerButton">
            <Icons.FaTwitter />
          </button>
        </Link>
        <Link to="/">
          <button className="footerButton">
            <Icons.FaFacebook />
          </button>
        </Link>
        <Link to="/">
          <button className="footerButton">
            <Icons.FaEnvelope />
          </button>
        </Link>
      </nav>
    </>
  );
}

export default FooterButton;