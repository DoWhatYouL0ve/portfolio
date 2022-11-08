import React from "react";
import {StyledBackground} from "../styles/common/Background.styled";
import { H2 } from "../styles/common/Header2.styled";
import {PortfolioBox, PortfolioContainer} from "./Portfolio.styled";
import {PortfolioBoxItem} from "./portfolioBoxItem/PortfolioBoxItem";
import counter from "./img/counter.jpg";
import social from "./img/social.jpg";
import todolist from "./img/todolist.jpg";
import cards from "./img/cards.jpg";

export const Portfolio = () => {

    const portfolio = [
        {id: '1', title: 'Learning cards', description: 'This is a team work with lots of great features. Feel free to create an account and check its functionality.', img: cards, code: 'https://github.com/DoWhatYouL0ve/Cards', demo: 'https://cards-alpha-jade.vercel.app/'},
        {id: '2', title: 'To Do List', description: 'This is a test big project with API, Redux, Typescript and Unit testing. To log in please ask me for the crredentials first.', img: todolist, code: 'https://github.com/DoWhatYouL0ve/to_do_list.v2', demo: 'https://dowhatyoul0ve.github.io/to_do_list.v2/'},
        {id: '3', title: 'Counter', description: 'This is my first small project with different features', img: counter, code: 'https://github.com/DoWhatYouL0ve/counter', demo: 'https://dowhatyoul0ve.github.io/counter/'},
        {id: '4', title: 'Social Network', description: 'This is a test big project with API, Redux, Typescript and lots of funtionality. To log in please ask me for the crredentials first.', img: social, code: 'https://github.com/DoWhatYouL0ve/social_network', demo: 'https://dowhatyoul0ve.github.io/social_network/'},
    ]

    return <>
        <StyledBackground bg={'white'}>
            <PortfolioContainer id={'portfolio'}>
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