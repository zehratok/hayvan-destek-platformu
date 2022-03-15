import React from 'react';
import './Footer.css';
import * as Icons from "react-icons/fa";
import { Link } from "react-router-dom";
import { footerItems } from "./FooterItems";
import FooterButton from "./FooterButton";

function Footer() {
    return (
        <>
            <nav className="footer">
                <Link to="/" className="footer-logo">
                    <Icons.FaCat />
                    Benim Patim Yaşayacak
                </Link>
                <ul className="footer-items">
                    {footerItems.map((item) => {
                        return (
                            <li key={item.id} className={item.name}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <FooterButton />
                <Link to="/hakkimizda" className="footer-about">
                    <Icons.FaInfoCircle />
                    Hakkımızda
                </Link>
            </nav>

        </>
    )
}

export default Footer;