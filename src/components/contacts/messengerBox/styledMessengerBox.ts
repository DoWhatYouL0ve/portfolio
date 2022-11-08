import styled from "styled-components";

export const MessengersBoxStyled = styled.div`
  width: 250px;
  height: 200px;
  border: 1px solid ${({theme})=>theme.colors.whiteTextColor};
  color: ${({theme})=>theme.colors.whiteTextColor};
  .messengerIcon {
    margin: 10px 0 0;
    font-size: 50px;
  }
  .sendMessageButton {
    background: ${({theme})=>theme.bg.primaryBgColor};
    color: ${({theme})=>theme.colors.whiteTextColor};
    border: 2px solid ${({theme})=>theme.colors.whiteTextColor};
    cursor: pointer;
    margin: 20px auto;
    font-family: "Space Mono", Arial, serif;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 30px;
    padding: 8px;
    width: 142px;
    a {
      color: ${({theme})=>theme.colors.whiteTextColor};
    }
    &:hover{
      transition: 0.5s;
      scale: 1.1;
    }
  }
  &:hover {
    .messengerIcon {
      animation: 0.4s horizontal-shaking forwards;
      @keyframes horizontal-shaking {
        0% { transform: translateY(0) }
        25% { transform: translateY(5px) }
        50% { transform: translateY(-5px) }
        75% { transform: translateY(5px) }
        100% { transform: translateY(0) }
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 160px;
    height: 180px;
    .messengerIcon {
      font-size: 35px;
    }
    H3 {
      font-size: 16px;
    }
    .sendMessageButton {
      font-size: 14px;
      width: 130px;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 65px;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .messengerIcon {
      
    }
    H3 {
      font-size: 14px;
    }
    .sendMessageButton {
      height: 25px;
      padding: 2px;
      margin: 0;
    }
  }
  @media screen and (max-width: 320px) {
    H3 {
      display: none;
    }
  }
`