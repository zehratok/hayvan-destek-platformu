import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import {NavbarBtn, NavbarBtnSpan} from "../styledComponents/NavbarStyle";


function NavButton() {
  return (
    <>
      <Link to="kaydol">
        <NavbarBtn >
          <Icons.FaUserPlus />
          <NavbarBtnSpan>Kaydol</NavbarBtnSpan> 
        </NavbarBtn>
      </Link>
      <Link to="giris-yap">
        <NavbarBtn>
          <Icons.FaSignInAlt />
          <NavbarBtnSpan>Giriş Yap</NavbarBtnSpan>
        </NavbarBtn>
      </Link>
    </>
  );
}

export default NavButton;