import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Button.css";

function NavButton() {
  return (
    <>
      <Link to="/profil">
        <button className="navButton">
          <Icons.FaUser />
          <span>Profilim</span>
        </button>
      </Link>
      <Link to="/">
        <button className="navButton">
          <Icons.FaSignInAlt />
          <span>Çıkış Yap</span>
        </button>
      </Link>
    </>
  );
}

export default NavButton;