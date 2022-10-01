import styled from 'styled-components'

interface PropsType {
    white?: boolean
}

export const H2 = styled.h2<PropsType>`
  padding-bottom: 30px;
  text-transform: uppercase;
  text-decoration: underline dotted;
  text-underline-offset: 8px;
  color: ${props=>props.white === true ? props => props.theme.colors.whiteTextColor : props => props.theme.colors.headingTextColor};
  span {
    color: ${({theme})=>theme.bg.primaryBgColor}
  }
`