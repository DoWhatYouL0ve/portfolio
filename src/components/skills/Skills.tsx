import React from "react";
import {StyledBackground} from "../styles/common/Background.styled";
import {SkillsContainer} from "../styles/Skills.styled";

export const Skills = () => {
    return <>
        <StyledBackground bg={'primary'}>
            <SkillsContainer>
                <div>Skills</div>
            </SkillsContainer>
        </StyledBackground>
    </>
}