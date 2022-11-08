import styled from "styled-components";

export const StyledButtonOnTop = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid ${({theme})=>theme.colors.whiteTextColor};
  background-color: ${({theme})=>theme.bg.primaryBgColor};
  text-align: center;
  padding-top: 5px;
  z-index: 1;
  a {
    color: ${({theme})=>theme.colors.whiteTextColor};
    font-size: 30px;
  }
  &:hover{
    transition: 0.5s;
    scale: 1.1;
  }
  @media screen and (max-width: 480px) {
    right: 20px;
  }
`