import React from "react";
import { StyledBackground } from "../styles/common/Background.styled";
import {AboutContainer} from "../styles/About.styled";


export const About = () => {
    return <>
        <StyledBackground bg={'white'}>
            <AboutContainer>
                <div>About</div>
            </AboutContainer>
        </StyledBackground>
    </>
}