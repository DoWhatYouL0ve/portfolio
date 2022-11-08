import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineHome, AiOutlineMessage, AiOutlinePicture, AiOutlineMail, AiOutlineSetting } from "react-icons/ai";
import { StyledNavBar } from './styledNavBar';



export const NavBar = () => {

    const [toggle, setToggle] = useState(false)

    const onToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <StyledNavBar
                className={`${toggle && 'openedNavBar'}`}>
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