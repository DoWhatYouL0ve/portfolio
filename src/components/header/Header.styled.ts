import styled from 'styled-components'
import {Container} from "../styles/common/Container.styled";

export const HeaderContainer = styled(Container)`
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  .photo{
    border: 1px solid ${({theme}) => theme.bg.whiteBgColor};
    background-position: 4% 15%;
    border-radius: 50%;
    width: 350px;
    height: 350px;
    margin: 50px auto 100px;
    opacity: 1;
  }

  .info{
    margin-bottom: 50px;
  }

  .info h1{
    font-family: "Kaushan Script", cursive;
    margin-bottom: 30px;
    font-size: 50px;
    line-height: 1.3;
    font-weight: 300;
    transform: rotate(-5deg)
  }

  .info h3{
    font-size: 25px;
    font-family: "Space Mono", Arial, serif;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    min-height: 100%;
    padding-bottom: 20px;
    .photo {
      width: 300px;
      height: 300px;
      background-position: 25% 17%;
    }
    .info h1 {
      font-size: 40px;
    }
    .info h3 {
      font-size: 23px;
    }
  }
  @media screen and (max-width: 480px) {
    .info h1 {
      font-size: 28px;
    }
    .info h3 {
      font-size: 20px;
    }
  }
`