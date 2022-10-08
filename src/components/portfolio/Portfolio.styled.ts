import styled from 'styled-components'
import {Container} from "../styles/common/Container.styled";


export const PortfolioContainer = styled(Container)`
  min-height: 100vh;
  padding: 100px 0;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 1024px) {
    padding: 40px 0;
    min-height: 100%;
  }
`

export const PortfolioBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`