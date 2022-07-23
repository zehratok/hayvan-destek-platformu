import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import authService from '../services/authService';
import * as Icons from "react-icons/fa";
import NavButton from "./NavButton";
import PrivateNavbar from "./PrivateNavbar";
import { navItems } from "../constants/NavItems.js";
import {
  NavbarStyle,
  NavbarLogo,
  NavItems,
  NavItem,
  NavItemA,
  NavItemASpan,
  SidebarToggle,
  SidebarToggleLogo,
  SidebarItems,
  SidebarItem,
  SidebarItemA,
  SidebarActive,
  Sidebar,
  SidebarBtn
} from "../styledComponents/NavbarStyle";

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
      <NavbarStyle>
        <Link to="/" onClick={() => setSidebar(false)}>
          <NavbarLogo>
            <Icons.FaCat />
            Benim Patim Yaşayacak
          </NavbarLogo>
        </Link>
        {!mobile && !mevcutKullanici && (
          <NavItems>
            {navItems.map((item) => {
              return (
                <NavItem key={item.id} >
                  <Link to={item.path}>
                    <NavItemA>
                      {item.icon}
                      <NavItemASpan>{item.title}</NavItemASpan>
                    </NavItemA>
                  </Link>
                </NavItem>
              );
            })}
          </NavItems>
        )}
        {!mobile && !mevcutKullanici && <NavButton />}
        {!mobile && mevcutKullanici && <PrivateNavbar />}

        {mobile && !mevcutKullanici && (
          <SidebarToggle>
            {sidebar ? (
              <SidebarToggleLogo>
                <Icons.FaTimes
                  onClick={() => setSidebar(!sidebar)}
                />
              </SidebarToggleLogo>
            ) : (
              <SidebarToggleLogo>
                <Icons.FaBars
                  onClick={() => setSidebar(!sidebar)}
                />
              </SidebarToggleLogo>
            )}
          </SidebarToggle>
        )}
        {mobile && mevcutKullanici && (
          <SidebarToggle>
            {privateSidebar ? (
              <SidebarToggleLogo>
                <Icons.FaTimes
                  onClick={() => setPrivateSidebar(!privateSidebar)}
                />
              </SidebarToggleLogo>
            ) : (
              <SidebarToggleLogo>
                <Icons.FaBars
                  onClick={() => setPrivateSidebar(!privateSidebar)}
                />
              </SidebarToggleLogo>
            )}
          </SidebarToggle>
        )}
      </NavbarStyle>

      {sidebar ? (
        <SidebarActive>
          <SidebarItems>
            {navItems.map((item) => {
              return (
                <SidebarItem
                  key={item.id}
                  onClick={() => setSidebar(false)}
                >
                  <Link to={item.path}>
                    <SidebarItemA>
                      {item.icon}
                    </SidebarItemA>
                  </Link>
                </SidebarItem>
              );
            })}
          </SidebarItems>
          <SidebarBtn>
            <NavButton onClick={() => setSidebar(false)} />
          </SidebarBtn>
        </SidebarActive>
      ) : (
        <Sidebar>
          <SidebarItems>
            {navItems.map((item) => {
              return (
                <SidebarItem
                  key={item.id}
                  onClick={() => setSidebar(false)}
                >
                  <Link to={item.path}>
                    <SidebarItemA>
                      {item.icon}
                    </SidebarItemA>
                  </Link>
                </SidebarItem>
              );
            })}
          </SidebarItems>
          <SidebarBtn>
            <NavButton onClick={() => setSidebar(false)} />
          </SidebarBtn>
        </Sidebar>)}

      {privateSidebar ? (
        <SidebarActive>
          <SidebarItems>
            {navItems.map((item) => {
              return (
                <SidebarItem
                  key={item.id}
                  onClick={() => setPrivateSidebar(false)}
                >
                  <Link to={item.path}>
                    <SidebarItemA>
                      {item.icon}
                    </SidebarItemA>
                  </Link>
                </SidebarItem>
              );
            })}
          </SidebarItems>
          <PrivateNavbar onClick={() => setPrivateSidebar(false)} />
        </SidebarActive>
      ) : (
        <Sidebar>
          <SidebarItems>
            {navItems.map((item) => {
              return (
                <SidebarItem
                  key={item.id}
                  onClick={() => setPrivateSidebar(false)}
                >
                  <Link to={item.path}>
                    <SidebarItemA>
                      {item.icon}
                    </SidebarItemA>
                  </Link>
                </SidebarItem>
              );
            })}
          </SidebarItems>
          <PrivateNavbar onClick={() => setPrivateSidebar(false)} />
        </Sidebar>
      )}

    </>
  );
}

export default Navbar;