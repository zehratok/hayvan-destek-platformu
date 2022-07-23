import styled from "styled-components";

export const SlideSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px; 
  margin-left: 150px ;
  margin-right: 50px ;
`;
export const Pagination = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: ${props => props.bgColor};
  margin: 5px;
  cursor: pointer;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => (props.background ? "white" : "")};
`;
export const H1 = styled.h1`
position: absolute;
  color: #AC8DAF;
  justify-content: center;
  align-items: center;
  margin-top: -12rem;
  margin-left:27rem;
  z-index: 1;
  font-family: Arial, Helvetica, sans-serif;
`;
