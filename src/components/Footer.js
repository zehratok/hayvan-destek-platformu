import React from 'react';
import * as Icons from "react-icons/fa";
import { Link } from "react-router-dom";
import { footerItems } from "../constants/FooterItems";
import FooterButton from "./FooterButton";
import { 
    FooterAbout, 
    FooterAboutSpan, 
    FooterItem, 
    FooterItemA, 
    FooterItemASpan, 
    FooterItems, 
    FooterLogo, 
    FooterStyle 
} from '../styledComponents/FooterStyle';

function Footer() {
    return (
        <>
            <FooterStyle>
                <Link to="/" >
                    <FooterLogo>
                        <Icons.FaCat />
                        Benim Patim Yaşayacak
                    </FooterLogo>
                </Link>
                <FooterItems>
                    {footerItems.map((item) => {
                        return (
                            <FooterItem key={item.id}>
                                <Link to={item.path}>
                                    <FooterItemA>
                                        {item.icon}
                                        <FooterItemASpan>{item.title}</FooterItemASpan>
                                    </FooterItemA>
                                </Link>
                            </FooterItem>
                        );
                    })}
                </FooterItems>
                <FooterButton />
                <Link to="/hakkimizda">
                    <FooterAbout>
                        <Icons.FaInfoCircle />
                        <FooterAboutSpan> Hakkımızda </FooterAboutSpan>
                    </FooterAbout>

                </Link>

            </FooterStyle>

        </>
    )
}

export default Footer;