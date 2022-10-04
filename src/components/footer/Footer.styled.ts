import styled from 'styled-components'
import {Container} from "../styles/common/Container.styled";
import {StyledBackground} from "../styles/common/Background.styled";

export const FooterStyledBackground = styled(StyledBackground)`
  min-height: 70px;
`

export const FooterContainer = styled(Container)`
  min-height: 70px;
  justify-content: center;
  align-items: center;
  text-align: center;
  span {
    color: ${({theme})=>theme.bg.primaryBgColor};
    font-family: "Kaushan Script", cursive;
    font-weight: bold;
  }
`