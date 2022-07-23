import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import { FooterButtonContainer, FooterBtn } from '../styledComponents/FooterStyle'
function FooterButton() {
  return (
    <FooterButtonContainer>
      <Link to="/">
        <FooterBtn>
          <Icons.FaInstagram />
        </FooterBtn>
      </Link>
      <Link to="/">
        <FooterBtn>
          <Icons.FaTwitter />
        </FooterBtn>
      </Link>
      <Link to="/">
        <FooterBtn>
          <Icons.FaFacebook />
        </FooterBtn>
      </Link>
      <Link to="/">
        <FooterBtn>
          <Icons.FaEnvelope />
        </FooterBtn>
      </Link>
    </FooterButtonContainer>
  );
}

export default FooterButton;