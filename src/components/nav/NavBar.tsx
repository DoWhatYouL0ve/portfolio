import React, {useState} from 'react'
import styled from 'styled-components'
import { FaBars } from "react-icons/fa";
import { AiOutlineHome, AiOutlineMessage, AiOutlinePicture, AiOutlineMail, AiOutlineSetting } from "react-icons/ai";

const StyledNavBar = styled.div`
  position: fixed;
  left: 20px;
  top: 21px;
  width: 40px;
  height: 40px;
  border-bottom: 2px solid ${({theme}) => theme.bg.primaryBgColor};
  color: #ff9000;
  background: ${({theme}) => theme.bg.whiteBgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.openedNavBar {
    left: 0;
    top: 0;
    padding: 20px;
    width: 100%;
    height: 82px;
  }
  nav {
    height: 40px;
    padding: 6px 0;
    a {
      display: inline-block;
      font-family: "Kaushan Script", cursive;
      font-weight: bold;
      color: ${({theme}) => theme.bg.primaryBgColor};
      margin-left: 30px;
      span {
        font-size: 24px;
        margin-right: 5px;
        vertical-align: middle;
      }
    }
  }
  button {
    width: 40px;
    height: 40px;
    background-color: ${({theme}) => theme.bg.primaryBgColor};
    padding: 7px 8px 3px;
    font-size: 24px;
    span {
      color: ${({theme}) => theme.colors.whiteTextColor};
    }
  }
  button:hover {
    cursor: pointer;
  }
`

export const NavBar = () => {

    const [toggle, setToggle] = useState(false)

    const onToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <StyledNavBar className={`${toggle && 'openedNavBar'}`}>
                <button onClick={onToggle}><span><FaBars/></span></button>
                {toggle && <nav>
                    <a href={'#top'}><span><AiOutlineHome/></span>Main</a>
                    <a href={'#about'}><span><AiOutlineMessage/></span>About Me</a>
                    <a href={'#skills'}><span><AiOutlineSetting/></span>Skills</a>
                    <a href={'#portfolio'}><span><AiOutlinePicture/></span>Portfolio</a>
                    <a href={'#contact'}><span><AiOutlineMail/></span>Contact Me</a>
                </nav>}
            </StyledNavBar>
        </>
    )
}