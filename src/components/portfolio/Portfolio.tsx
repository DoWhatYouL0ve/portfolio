import React from "react";
import {StyledBackground} from "../styles/common/Background.styled";
import { H2 } from "../styles/common/Header2.styled";
import {PortfolioBox, PortfolioContainer} from "./Portfolio.styled";
import {PortfolioBoxItem} from "./PortfolioBoxItem";
import counter from "./counter.jpg";
import social from "./social.jpg";
import todolist from "./todolist.jpg";

export const Portfolio = () => {

    const portfolio = [
        {id: '1', title: 'Social Network', description: 'This is a test big project with API, Redux, Typescript and lots of funtionality. To log in please ask me for the crredentials first.', img: social, code: 'https://github.com/DoWhatYouL0ve/social_network', demo: 'https://dowhatyoul0ve.github.io/social_network/'},
        {id: '21', title: 'To Do List', description: 'This is a test big project with API, Redux, Typescript and Unit testing. To log in please ask me for the crredentials first.', img: todolist, code: 'https://github.com/DoWhatYouL0ve/to_do_list.v2', demo: ''},
        {id: '3', title: 'Counter', description: 'This is my first small project with different features', img: counter, code: 'https://github.com/DoWhatYouL0ve/counter', demo: 'https://dowhatyoul0ve.github.io/counter/'},
        {id: '4', title: 'Test project', description: 'some text', img: '', code: '', demo: ''}
    ]

    return <>
        <StyledBackground bg={'white'}>
            <PortfolioContainer>
                <div>
                    <H2>Portfolio</H2>
                    <PortfolioBox>
                        {portfolio.map(i=><PortfolioBoxItem item={i} key={i.id}/>)}
                    </PortfolioBox>
                </div>
            </PortfolioContainer>
        </StyledBackground>
    </>
}