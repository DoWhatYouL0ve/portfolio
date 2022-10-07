import React from "react";
import photo from './cv.jpg'
import {StyledBackground} from "../styles/common/Background.styled";
import {HeaderContainer} from "./Header.styled";
import {StyledButton} from "../styles/common/Button.styled";
//@ts-ignore
import cv from './cv.pdf'

export const Header = () => {
    return (
        <header id={'top'}>
            <StyledBackground bg={'header'}>
                <HeaderContainer>
                    <div>
                        <div style={{backgroundImage: `url(${photo})`, backgroundPosition: 'center top'}} className={'photo'}></div>
                        <div className={'info'}>
                            <h1>- WILLIAM ROSS -</h1>
                            <h3>Front-end Developer</h3>
                        </div>
                        <StyledButton><a href={cv} download={'CV_William_Ross.pdf'}>Download CV</a></StyledButton>
                        <StyledButton><a href={'#contact'}>Contact Me</a></StyledButton>
                    </div>
                </HeaderContainer>
            </StyledBackground>
        </header>
    )
}