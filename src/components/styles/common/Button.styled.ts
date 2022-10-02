import styled from 'styled-components'

export const StyledButton = styled.button`
    background: ${({theme})=>theme.bg.primaryBgColor};
    color: ${({theme})=>theme.colors.whiteTextColor};
    border: 2px solid ${({theme})=>theme.bg.primaryBgColor};
    cursor: pointer;
    margin: 20px;
    font-family: "Space Mono", Arial, serif;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 30px;
    padding: 8px 20px;
  a {
    color: ${({theme})=>theme.colors.whiteTextColor};
  }

  &:hover{
    transition: 0.5s;
    scale: 1.1;
  }
`