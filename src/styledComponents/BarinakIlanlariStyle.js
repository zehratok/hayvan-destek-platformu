import styled from "styled-components";

export const BarinakIlanlariStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
`;

export const FiltreStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
`;

export const Header = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 2.7rem;
    color: #484C7F;
    font-family: Georgia, 'Times New Roman', Times, serif;
`;

export const NoticeHeader = styled.div`
    text-align: center;
    margin-top: 3%;
    margin-bottom: 3%;
    font-size: 3rem;
    color: #484C7F;
    font-family: Georgia, 'Times New Roman', Times, serif;
`;

export const BarinakListe = styled.div`
    display: flexbox;
    justify-content: center;
`;

export const CardGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center ;
    align-items: center;
    margin-left: 35px;
    margin-right: 35px;
    margin-bottom: 30px;
`;

export const CardStyle = styled.div`
    display: flex;
    text-align: center;
    margin: 15px;
`;

export const CardHeader = styled.div`
    font-size: 2rem;
    color: #4e517a;
    margin-top: 5px;
    margin-bottom: 15px;
`;

export const CardDsc = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start
`;

export const CardBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CardBtn2 = styled.button`
    background: #AC8DAF;
    color: #fffacd;
    border: none;
    border-radius: 8px;
    padding: 10px 16px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.3s all ease-out;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.7rem;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    &:hover{
        background: #F1D4D4;
        color: #484C7F;
    }
`;

export const CardBtnText = styled.span`
    font-size:1.5rem;
`;

export const DetailCard = styled.div`
    justify-content: center;
    display: flex;
    margin-top: 3%;
    margin-bottom: 3%;
    font-size: 1.5rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
`;

export const DetailCardHeader = styled.div`
    font-size: 2rem;
    color: #4e517a;
    margin-top: 5px;
    margin-bottom: 15px;
`;

export const DetailCardText = styled.div`
    font-size: 1.5rem;
    color: #626599;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 5px ;
`;

export const DetailCardText2 = styled.div`
    font-size: 1.5rem;
    color: #AC8DAF;
    margin-top: 5px;
    margin-bottom: 5px;
    cursor: pointer;
    transition: 0.3s all ease-out;
    &:hover{
        font-size: 1.7rem;
    }
`;

