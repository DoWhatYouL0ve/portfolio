import {StyledBackground} from "../../styles/Background.styled";
import { H2 } from "../../styles/Header2.styled";
import {SkillsContainer, TechnicalSkillsStyledBox} from "./styles/styledSkills";
import { P } from "../../styles/Paragraph.styled";
import {H3} from "../../styles/Header3.styled";
import {SkillsBox} from "./skillsBox/SkillsBox";
import {DiReact, DiHtml5, DiCss3, DiJavascript1, DiGithubBadge, DiGit} from "react-icons/di";
import { AiOutlineTablet, AiFillApi } from "react-icons/ai";
import { SiRedux, SiStorybook, SiMaterialui , SiTypescript, SiTailwindcss, SiNextdotjs, SiJest} from "react-icons/si";

export const Skills = () => {

    const techSkills = [{title:'React JS', icon: DiReact}, {title:'Next JS', icon: SiNextdotjs}, {title:'Redux', icon: SiRedux}, {title:'Redux Toolkit', icon: SiRedux}, {title:'TypeScript', icon: SiTypescript}, {title:'HTML5', icon: DiHtml5}, {title:'CSS3', icon: DiCss3}, {title:'JavaScript', icon: DiJavascript1}, {title:'Rest API', icon: AiFillApi}, {title:'Jest', icon: SiJest}, {title:'Git', icon: DiGit}, {title:'GitHub', icon: DiGithubBadge}, {title:'StoryBook', icon: SiStorybook}, {title:'Tailwind CSS', icon: SiTailwindcss}, {title:'Material UI', icon: SiMaterialui}, {title:'Responsive design', icon: AiOutlineTablet}]

    return <>
        <StyledBackground bg={'primary'}>
            <SkillsContainer id={'skills'}>
                <div>
                    <H2 white={true}>Skills</H2>
                    <div>
                        <H3>My <span>technical</span> skills</H3>
                        <P grey={true}>I have deep knowledge in different technologies and I'm always open to new ones. Here is a list of technologies I've got most experience with:</P>
                        <TechnicalSkillsStyledBox>
                            {techSkills.map(i=><SkillsBox item={i} key={i.title}/>)}
                        </TechnicalSkillsStyledBox>
                    </div>
                </div>
            </SkillsContainer>
        </StyledBackground>
    </>
}