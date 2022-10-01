import styled from 'styled-components'
import {Container} from "../styles/common/Container.styled";
import {StyledBackground} from "../styles/common/Background.styled";

export const AboutStyledBackground = styled(StyledBackground)`
    min-height: 100px;
`

export const AboutContainer = styled(Container)`
  padding: 100px 50px;
  justify-content: center;
  align-items: center;
  text-align: center;
  b {
    font-family: "Kaushan Script", cursive;
  }
  
`