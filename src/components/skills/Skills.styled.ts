import styled from 'styled-components'
import {Container} from "../styles/common/Container.styled";


export const SkillsContainer = styled(Container)`
  min-height: 100vh;
  padding: 100px 0;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 1024px) {
    min-height: 100%;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }
`

export const TechnicalSkillsStyledBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`