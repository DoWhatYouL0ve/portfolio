import styled from 'styled-components'

interface PropsType {
    grey?: boolean
}

export const P = styled.p<PropsType>`
  line-height: 1.7;
  color: ${props=>props.grey === true ? props => props.theme.colors.secondaryTextColor : props => props.theme.colors.primaryTextColor};
  margin: 20px;
`