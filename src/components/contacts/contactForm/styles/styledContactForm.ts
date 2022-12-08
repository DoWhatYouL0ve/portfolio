import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    margin-bottom: 30px;
    padding: 10px;
    background: transparent;
    color: ${({theme}) => theme.colors.whiteTextColor};
    border: 2px solid ${({theme}) => theme.colors.whiteTextColor};
    border-radius: 30px;

    ::placeholder {
      opacity: 1;
      color: ${({theme}) => theme.colors.secondaryTextColor};
    }
    &:focus {
      border-style: dotted dashed solid double;
    }
  }
  .inputBox {
    position: relative;
    .expandable {
      position: absolute;
      top: 6px;
      right: 5px;
      color: red;
      font-weight: bold;
      font-size: 0.8rem;
      padding: 5px 10px;
      border-radius: 30px;
      width: 150px;
    }
  }
  textarea {
    width: 100%;
    height: 120px;
    padding: 10px;
    background: transparent;
    color: ${({theme}) => theme.colors.whiteTextColor};
    border: 2px solid ${({theme}) => theme.colors.whiteTextColor};
    border-radius: 20px;
    resize: none;
    margin-bottom: 30px;

    ::placeholder {
      opacity: 1;
      color: ${({theme}) => theme.colors.secondaryTextColor};
    }
    &:focus {
      border-style: dotted dashed solid double;
    }
  }
  .confirmationWindow {
    position: fixed;
    bottom: 10px;
    left: -230px;;
    background-color: green;
    color: white;
    border: 1px solid white;
    border-radius: 0 20px 20px 0;
    width: 230px;
    height: 35px;
    padding: 5px;
    transition: 1s;
    .closeConfirmation {
      margin-left: 10px;
      font-size: 1.3rem;
      vertical-align: middle;
      &:hover {
        cursor: pointer;
      }
    }
  }
  @keyframes showConfDiv {
    0% {
      left: -230px;
    }
    100% {
      left: 0;
    }
  }
  .confirmationShowIt {
    animation: showConfDiv 2s forwards;;
  }
  button {
    width: 142px;
    background: ${({theme}) => theme.colors.whiteTextColor};
    color: ${({theme}) => theme.bg.primaryBgColor};
    border: 2px solid ${({theme}) => theme.colors.whiteTextColor};
    cursor: pointer;
    margin: 20px;
    font-family: "Space Mono", Arial, serif;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 30px;
    padding: 8px 20px;
    a {
      color: ${({theme}) => theme.colors.whiteTextColor};
    }

    &:hover {
      transition: 0.5s;
      scale: 1.1;
    }
    :active{
      position: relative;
      top: 2px;
      left: 0;
    }
  }
  @media screen and (max-width: 768px) {
    button {
      margin: 10px auto;
    }
    input, textarea {
      margin-bottom: 15px;
    }
  }
`