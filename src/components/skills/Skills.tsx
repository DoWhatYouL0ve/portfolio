import React from "react";
import {StyledBackground} from "../styles/common/Background.styled";
import { H2 } from "../styles/common/Header2.styled";
import {SkillsContainer} from "./Skills.styled";

export const Skills = () => {
    return <>
        <StyledBackground bg={'primary'}>
            <SkillsContainer>
                <div>
                    <H2 white={true}>Skills</H2>
                </div>
            </SkillsContainer>
        </StyledBackground>
    </>
}