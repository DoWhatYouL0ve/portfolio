import React from "react";
import photo from './cv.jpg'
import {StyledBackground} from "../styles/common/Background.styled";
import {HeaderContainer} from "./Header.styled";
import {StyledButton} from "../styles/common/Button.styled";
//@ts-ignore
import cv from './cv.pdf'
import Typed from 'react-typed';
//@ts-ignore
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Header = () => {
    return (
        <header id={'top'}>
            <StyledBackground bg={'header'}>
                <HeaderContainer>
                    <div>
                        <div style={{backgroundImage: `url(${photo})`}} className={'photo'}
                             data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="600"/>
                        <div className={'info'}>
                            <h1>- WILLIAM ROSS -</h1>
                            <div className={'typedText'}>
                                <Typed
                                    strings={[
                                        'A Front-end Developer',
                                        'Let\'s get it done!',
                                        'Let\'s collaborate!']}
                                    typeSpeed={100}
                                    backSpeed={70}
                                    loop />
                            </div>
                        </div>
                        <StyledButton data-aos="fade-right"
                                      data-aos-easing="ease-in-sine"
                                      data-aos-duration="600">
                            <a href={cv} download={'CV_William_Ross.pdf'}>Download CV</a>
                        </StyledButton>
                        <StyledButton data-aos="fade-left"
                                      data-aos-easing="ease-in-sine"
                                      data-aos-duration="600">
                            <a href={'#contact'}>Contact Me</a>
                        </StyledButton>
                    </div>
                </HeaderContainer>
            </StyledBackground>
        </header>
    )
}

AOS.init();