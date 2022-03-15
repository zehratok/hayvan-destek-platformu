import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Button.css";

function NavButton() {
  return (
    <>
      <Link to="kaydol">
        <button className="navButton">
          <Icons.FaUserPlus />
          <span>Kaydol</span>
        </button>
      </Link>
      <Link to="giris-yap">
        <button className="navButton">
          <Icons.FaSignInAlt />
          <span>Giriş Yap</span>
        </button>
      </Link>
    </>
  );
}

export default NavButton;