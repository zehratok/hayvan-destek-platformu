import styled from "styled-components";

export const FooterStyle = styled.nav`
    background: #DDB6C6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FooterLogo = styled.div`
    margin-top: 3%;
    color: #fffacd;
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    width: 30rem;
    justify-content: flex-start;
    transition: 0.2s all ease-out;
    &:hover {
        transition: 0.2s all ease-out;
        color: #fffacd;
        font-size: 2.6rem;
  }
`;

export const FooterItems = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
`;

export const FooterItem = styled.li`
    list-style:none;
`;

export const FooterItemA = styled.div`
    text-decoration: none;
    color: #484C7F;
    font-size: 1.6rem;
    padding: 6px 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.2s all ease-out;
    &:hover{
        font-size: 2rem;
        background: #AC8DAF;
        color: #fffdd0;
        transition: 0.2s all ease-out;
    }
`;

export const FooterItemASpan = styled.span`
    margin-left: 0.7rem;
    font-size: 1.4rem;
`;

export const FooterAbout = styled.div`
    color: #6a6b8f;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    margin-top: 2rem;
    margin-bottom:2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.2s all ease-out;
    &:hover{
        color: #fffacd;
        transition: 0.2s all ease-out;
        font-size: 1.8rem;
    }
`;

export const FooterAboutSpan = styled.span`
    margin-left: 0.7rem;
    font-size: 1.4rem;
`;

export const FooterButtonContainer = styled.nav`
    display: flex;
    flex-direction: row;
`;

export const FooterBtn = styled.button`
    background: #AC8DAF;
    border: none;
    border-radius: 8px;
    padding: 6px 16px;
    font-size: 1.3rem;
    cursor: pointer;
    transition: 0.3s all ease-out;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fffdd0;
    margin-right: 1rem;
    margin-top: 1rem;
    text-decoration: none;
    &:hover{
        background: fffdd0;
        color: #AC8DAF;
        font-size: 1.6rem;
        transition: 0.3s all ease-out;
    }
`;

