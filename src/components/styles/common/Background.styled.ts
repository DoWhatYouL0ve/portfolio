import styled from 'styled-components'

interface PropsType {
    bg: 'header' | 'primary' | 'white'
}

export const StyledBackground = styled.section<PropsType>`
  min-height: 100vh;
  min-width: 100%;
  background: ${props => props.bg === 'header' ? props => props.theme.bg.header : props => props.bg === 'primary' ? props => props.theme.bg.primaryBgColor : props => props.theme.bg.whiteBgColor};
  @media screen and (max-width: 1024px) {
    min-height: 100%;
  }
`
