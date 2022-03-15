import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import authService from '../services/authService';
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import NavButton from "./NavButton";
import PrivateNavbar from "./PrivateNavbar";
import { navItems } from "./NavItems.js";

function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [privateSidebar, setPrivateSidebar] = useState(false);
  const [mevcutKullanici, setMevcutKullanici] = useState(undefined);

  useEffect(() => {
    const kullanici = authService.mevcutKullanici();

    if (kullanici) {
      setMevcutKullanici(kullanici);
    }
  }, []);

  const cikis = () => {
    authService.cikis();
  }

  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
        setPrivateSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={() => setSidebar(false)}>
          <Icons.FaCat />
          Benim Patim Yaşayacak
        </Link>
        {!mobile && !mevcutKullanici && (
          <ul className="nav-items">
            {navItems.map((item) => {
              return (
                <li key={item.id} className={item.nName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        {!mobile && !mevcutKullanici && <NavButton />}
        {!mobile && mevcutKullanici && <PrivateNavbar />}

        {mobile && !mevcutKullanici && (
          <div className="sidebar-toggle">
            {sidebar ? (
              <Icons.FaTimes
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <Icons.FaBars
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            )}
          </div>
        )}
        {mobile && mevcutKullanici && (
          <div className="sidebar-toggle">
            {privateSidebar ? (
              <Icons.FaTimes
                className="sidebar-toggle-logo"
                onClick={() => setPrivateSidebar(!privateSidebar)}
              />
            ) : (
              <Icons.FaBars
                className="sidebar-toggle-logo"
                onClick={() => setPrivateSidebar(!privateSidebar)}
              />
            )}
          </div>
        )}
      </nav>

      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className="sidebar-items">
          {navItems.map((item) => {
            return (
              <li
                key={item.id}
                className={item.sName}
                onClick={() => setSidebar(false)}
              >
                <Link to={item.path}>
                  {item.icon}
                  <span></span>
                </Link>
              </li>
            );
          })}
        </ul>
        <NavButton onClick={() => setSidebar(false)} />
      </div>
      <div className={privateSidebar ? "sidebar active" : "sidebar"}>
        <ul className="sidebar-items">
          {navItems.map((item) => {
            return (
              <li
                key={item.id}
                className={item.sName}
                onClick={() => setPrivateSidebar(false)}
              >
                <Link to={item.path}>
                  {item.icon}
                  <span></span>
                </Link>
              </li>
            );
          })}
        </ul>
        <PrivateNavbar onClick={() => setPrivateSidebar(false)} />
      </div>
    </>
  );
}

export default Navbar;