import styled from 'styled-components'

export const H3 = styled.h3`
  margin: 20px;
  text-transform: uppercase;
  color: ${({theme})=>theme.colors.whiteTextColor};
  span {
    font-family: "Kaushan Script", cursive;
    font-weight: bold;
  }
`