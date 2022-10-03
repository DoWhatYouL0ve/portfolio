import styled from 'styled-components'
import {Container} from "../styles/common/Container.styled";


export const PortfolioContainer = styled(Container)`
  min-height: 100vh;
  padding: 100px 0;
  justify-content: center;
  text-align: center;
`

export const PortfolioBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`