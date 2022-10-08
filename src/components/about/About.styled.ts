import styled from 'styled-components'
import {Container} from "../styles/common/Container.styled";
import {StyledBackground} from "../styles/common/Background.styled";

export const AboutStyledBackground = styled(StyledBackground)`
    min-height: 100px;
`

export const AboutContainer = styled(Container)`
  padding: 100px 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  b {
    font-family: "Kaushan Script", cursive;
  }
  .reverseTestColor {
    color: ${({theme})=> theme.colors.headingTextColor};
  }
  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }
  @media screen and (max-width: 480px) {
    H2 {
      display: block;
      span {
        display: block;
      }
      .reverseTestColor {
        margin-bottom: 10px;
      }
    }
  }
`