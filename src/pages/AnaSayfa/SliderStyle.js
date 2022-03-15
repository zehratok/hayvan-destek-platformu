import styled from "styled-components";

export const SlideSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.url});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  height: 360px;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;
export const Pagination = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: ${props => props.bgColor};
  margin: 2px;
  cursor: pointer;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => (props.background ? "white" : "")};
`;
export const H1 = styled.h1`

  position: right;
  color: #AC8DAF;
  z-index: 1;
`;
