import React from "react";
import {AboutContainer, AboutStyledBackground} from "./About.styled";
import {P} from "../styles/common/Paragraph.styled";
import {H2} from "../styles/common/Header2.styled";


export const About = () => {
    return <>
        <AboutStyledBackground bg={'white'}>
            <AboutContainer id={'about'}>
                <div>
                    <H2><span className={'reverseTestColor'}>A LITTLE </span><span>ABOUT ME</span></H2>
                    <P> Hello! My name is <b>William Ross</b>. Currently, I am living in Spain, Valencia.
                        I am a hardworking and goal-oriented person with a great motivation
                        to achieve high results and become a highly qualified professional. I am
                        fluent in several foreign languages and constantly growing in this direction. You can always rely
                        on me. I am a responsible and communicative person with a positive attitude to the
                        world.
                    </P>
                    <P>
                        My main goal at work is to do more than anyone expects from me and grow
                        as a professional together with the company.
                    </P>
                </div>
            </AboutContainer>
        </AboutStyledBackground>
    </>
}