import styled from "styled-components";

export const StyledSkillBox = styled.div`
  width: 250px;
  height: 50px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid ${({theme})=>theme.colors.whiteTextColor};
  color: ${({theme})=>theme.colors.whiteTextColor};
  display: flex;
  justify-content: space-between;
  span {
    font-size: 1.1em;
    font-weight: bold;
  }
  .ItemIcon {
    font-size: 1.5em;
    line-height: 30px;
  }
  &:hover {
    border: 2px solid ${({theme})=>theme.colors.whiteTextColor};
    .ItemIcon{
      transition: transform 1s ease-in-out;
      transform: rotate(360deg);
    }
  }
  @media screen and (max-width: 600px) {
    width: 235px;
  }
  @media screen and (max-width: 480px) {
    margin: 0 auto;
  }
`