import styled from "styled-components";

export const Giris = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: whitesmoke;
    color:#484C7F;
`;

export const Kayit = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: whitesmoke;
    color:#484C7F;
`;

export const Image = styled.div`
    width: 43%;
    margin-left: 5%; 
    margin-right: 15%;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 45%;
    margin-right:5%;
    background-color: #DDB6C6;
    justify-content: center;
    border-radius: 2%;
    padding: 45px;
    margin-bottom: 5%;
    margin-top: 5%;
`;

export const FormElement = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 13pt;
`;

export const FormText = styled.label`
    text-align: left;
    font-size: 18px;
    margin-bottom:2px;
`;

export const FormInput = styled.input`
    display: block;
    margin-bottom: 1.5rem;
    padding: 15px;
    border: 1px solid #F1D4D4;
    font-family: 'Roboto Slab', sans-serif;
    font-size: 18px;
    outline: none;
    border-radius: 1%;
    color: #484C7F;
`;

export const Select = styled.select`
    display: block;
    margin-bottom: 1.5rem;
    padding: 15px;
    border: 1px solid #F1D4D4;
    color: #484C7F;
    font-family: 'Roboto Slab', sans-serif;
    font-size: 18px;
    outline: none;
`;

export const Btn = styled.button`
    cursor: pointer;
    padding: 15px;
    background: #484C7F;
    font-size: 1.2rem;
    border: none;
    outline: none;
    color: #fffdd0;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    transition: 0.2s all ease-out;
    &:hover {
        background-color: #F1D4D4;
        color: #484C7F;
    }
`;

export const Link = styled.div`
    text-align: center;
    font-size: 10pt;
`;

export const LinkText = styled.a`
    font-size: 10pt;
    margin-left: 2px;
`;