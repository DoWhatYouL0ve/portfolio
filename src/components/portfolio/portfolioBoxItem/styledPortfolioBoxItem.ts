import styled from "styled-components";

export const PortfolioBoxItemStyled = styled.div`
  width: 500px;
  height: 400px;
  border: 1px solid ${({theme})=>theme.bg.primaryBgColor};
  margin-bottom: 50px;
  .project {
    height: 250px;
    position: relative;
    .boxPopUp {
      opacity: 0;
      width: 100%;
      height: 25px;
      background-color: #ff9000;
      color: white;
      font-family: "Kaushan Script", cursive;
      font-weight: bold;
    }
    .demonstrationButtons {
      position: absolute;
      top: 33%;
      left: 25%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  H3 {
    color: ${({theme})=>theme.colors.primaryTextColor};
    font-family: "Kaushan Script", cursive;
    font-weight: bold;
  }
  &:hover {
    transition: 1s;
    box-shadow: rgba(255, 144, 0, 0.16) 0 1px 4px, rgb(255, 144, 0) 0 0 0 3px;
    .boxPopUp {
      transition: 1s;
      opacity: 1;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 380px;
    height: 280px;
    .project {
      height: 155px;
      .demonstrationButtons {
        top: 33%;
        left: 15%;
      }
    }
    H3 {
      margin: 12px;
    }
    P {
      font-size: 14px;
      line-height: 1.2;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 0 auto 50px;
    width: 500px;
    height: 400px;
    .project {
      height: 250px;
      .demonstrationButtons {
        top: 33%;
        left: 25%;
      }
    }
    H3 {
      margin: 20px;
    }
    P {
      font-size: 16px;
      line-height: 1.7;
    }
  }
  @media screen and (max-width: 600px) {
    margin: 0 auto 50px;
    width: 470px;
    height: 300px;
    .project {
      height: 155px;
      .demonstrationButtons {
        top: 33%;
        left: 25%;
      }
    }
    H3 {
      margin: 20px;
    }
    P {
      font-size: 14px;
      line-height: 1.5;
    }
  }
  @media screen and (max-width: 480px) {
    margin: 0 auto 20px;
    width: 280px;
    height: 280px;
    .project {
      height: 130px;
      .demonstrationButtons {
        top: 33%;
        left: 4%;
      }
    }
    H3 {
      margin: 5px;
    }
    P {
      font-size: 14px;
      line-height: 1.5;
    }
  }
`