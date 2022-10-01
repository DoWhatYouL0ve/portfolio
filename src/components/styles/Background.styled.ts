import styled from 'styled-components'

interface PropsType {
    bg: 'header' | 'primary'
}

export const StyledBackground = styled.div<PropsType>`
  min-height: 100vh;
  min-width: 100%;
  background: ${props => props.bg === 'header' ? props => props.theme.bg.header : props => props.bg === 'primary' ? props => props.theme.bg.primaryBgColor : props => props.theme.bg.whiteBgColor};
`
export const StyledHeader = styled(StyledBackground)`
    
`