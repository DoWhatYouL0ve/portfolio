import React from "react";
import {StyledBackground} from "../styles/common/Background.styled";
import { H2 } from "../styles/common/Header2.styled";
import {SkillsContainer, TechnicalSkillsStyledBox} from "./Skills.styled";
import { P } from "../styles/common/Paragraph.styled";
import {H3} from "../styles/common/Header3.styled";
import {SkillsBox} from "./SkillsBox";
import {DiReact, DiHtml5, DiCss3, DiJavascript1, DiGithubBadge, DiGit} from "react-icons/di";
import { AiOutlineApartment, AiOutlineComment, AiOutlineFileDone, AiOutlineDeploymentUnit, AiOutlineHistory, AiOutlineLike, AiOutlineTeam, AiOutlineFileSearch, AiOutlineGlobal, AiOutlineHeart, AiOutlineRetweet, AiOutlineRise, AiOutlineSetting, AiOutlineTablet } from "react-icons/ai";
import { SiRedux, SiStorybook, SiMaterialui , SiTypescript} from "react-icons/si";


export const Skills = () => {

    const techSkills = [{title:'React', icon: DiReact}, {title:'Redux', icon: SiRedux}, {title:'TypeScript', icon: SiTypescript}, {title:'StoryBook', icon: SiStorybook}, {title:'HTML5', icon: DiHtml5}, {title:'CSS3', icon: DiCss3}, {title:'JavaScript', icon: DiJavascript1}, {title:'Unit testing', icon: AiOutlineSetting}, {title:'Git', icon: DiGit}, {title:'GitHub', icon: DiGithubBadge}, {title:'Material UI', icon: SiMaterialui}, {title:'Responsive design', icon: AiOutlineTablet}]

    const personalSkills = [{title:'Communication', icon: AiOutlineComment}, {title:'Team work', icon: AiOutlineApartment}, {title:'Time management', icon: AiOutlineFileDone}, {title:'Quick-learning', icon: AiOutlineHistory}, {title:'Curiosity', icon: AiOutlineGlobal}, {title:'Open minded', icon: AiOutlineDeploymentUnit}, {title:'Adaptability', icon: AiOutlineRetweet}, {title:'Empathy', icon: AiOutlineHeart}, {title:'Mentoring', icon: AiOutlineTeam}, {title:'Googling', icon: AiOutlineFileSearch}, {title:'Decision making', icon: AiOutlineRise}, {title:'Conflict resolution', icon: AiOutlineLike}]

    return <>
        <StyledBackground bg={'primary'}>
            <SkillsContainer id={'skills'}>
                <div>
                    <H2 white={true}>Skills</H2>
                    <div>
                        <H3>My <span>technical</span> skills</H3>
                        <P grey={true}>I have tried out lots of different technologies and I am always open to new things. Here are the ones I have got most experience with:</P>
                        <TechnicalSkillsStyledBox>
                            {techSkills.map(i=><SkillsBox item={i} key={i.title}/>)}
                        </TechnicalSkillsStyledBox>
                    </div>
                    <div>
                        <H3>My <span>personal</span> skills</H3>
                        <P grey={true}>I love exploring the world around me by talking to people, learning about their culture and making new connections. I have always loved learning. There are so many things one can learn just by going online, it's fascinating! <br/>Over time, I have developed many useful skills that help me to improve my professionalism:</P>
                        <TechnicalSkillsStyledBox>
                            {personalSkills.map(i=><SkillsBox item={i} key={i.title}/>)}
                        </TechnicalSkillsStyledBox>
                    </div>
                </div>
            </SkillsContainer>
        </StyledBackground>
    </>
}