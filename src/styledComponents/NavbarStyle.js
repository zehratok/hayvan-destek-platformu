import styled from "styled-components";

export const NavbarStyle = styled.div`
    height: 12vh;
    background: #4e517a;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NavbarLogo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 18rem;
    color: #fffacd;
    font-size: 1.5rem;
    background-color: #4e517a;
    transition: 0.2s all ease-out;
    &:hover {
        transition: 0.2s all ease-out;
        color: #fffacd;
        font-size: 1.6rem;
  }
`;

export const NavItems = styled.ul`
    width: 55vw;
    display: flex;
    justify-content: center;
    margin-right: 1rem;
`;

export const NavItem = styled.li`
    list-style: none;
    margin-left: 0.8rem;
`;

export const NavItemA = styled.div`
    text-decoration: none;
    color: #f0c7c6;
    font-size: 1.6rem;
    padding: 6px 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 5px; 
    transition: 0.2s all ease-out;
    &:hover{
        font-size: 2.5rem;
        background: #AC8DAF;
        color: #fffdd0;
    }
`;

export const NavItemASpan = styled.span`
    margin-left: 0.6rem;
    font-size: 1.4rem;
`;

export const SidebarToggle = styled.div`
    width: 60vw;
    display: flex;
    justify-content: flex-end;
`;

export const SidebarToggleLogo = styled.div`
    font-size: 2.3rem;
    color: #fffacd;
    cursor: pointer;
`;

export const Sidebar = styled.div`
    width: 16rem;
    background: #4e517a;
    min-height: 62vh;
    position: absolute;
    top: 10vh;
    left: -100%;
   
`;
export const SidebarActive = styled.div`
    left: 0;
    position: absolute;
    @media screen and (max-width: 1100px) {
        width: 5rem;
        background: #4e517a;

    }
`;

export const SidebarItems = styled.ul`
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: 0.2s all ease-out;
`;

export const SidebarItem = styled.li`
    list-style: none;
    margin-top: 1rem;
    width: 95%;
    height: 3rem;
`;

export const SidebarItemA = styled.div`
    text-decoration: none;
    color: #f0c7c6;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s all ease-out;
    &:hover{
        background-color: #AC8DAF;
        color: #fffdd0;
        font-size: 2.5rem;
    }
`;

export const NavbarBtn = styled.button`
    background: #ba9fbc;
    border: none;
    border-radius: 5px;
    padding: 9px 16px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.3s all ease-out;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fffdd0;
    margin-left: 0.7rem;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    text-decoration: none;
    &:hover{
        background: #fffdd0;
        color: #ba9fbc;
        font-size: 1.4rem;
    }
`;

export const NavbarBtnSpan = styled.span`
    margin-left: 0.7rem;
    @media screen and (max-width: 1250px) {
        display: none;
    }
`;

export const SidebarBtn = styled.button`
    margin-top: 2.4rem;
    background: #4e517a;
    border-width:0 ;
    margin-bottom:20px;
    max-width:7px;
    &:hover{
        background: #4e517a;
    }
`;
