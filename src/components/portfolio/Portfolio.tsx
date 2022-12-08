import React from "react";
import {StyledBackground} from "../../styles/Background.styled";
import { H2 } from "../../styles/Header2.styled";
import {PortfolioBox, PortfolioContainer} from "./styles/styledPortfolio";
import {PortfolioBoxItem} from "./portfolioBoxItem/PortfolioBoxItem";
import weather from "../../assets/img/portfolio/weather.png";
import social from "../../assets/img/portfolio/social.jpg";
import todolist from "../../assets/img/portfolio/todolist.jpg";
import cards from "../../assets/img/portfolio/cards.jpg";

export const Portfolio = () => {

    const portfolio = [
        {id: '1', title: 'Learning cards', description: 'This is a team work with lots of great features. Feel free to create an account and check its functionality.', img: cards, code: 'https://github.com/DoWhatYouL0ve/Cards', demo: 'https://cards-alpha-jade.vercel.app/'},
        {id: '2', title: 'To Do List', description: 'This is a test big project with API, Redux, Typescript and Unit testing. To log in please ask me for the credentials first.', img: todolist, code: 'https://github.com/DoWhatYouL0ve/to_do_list.v2', demo: 'https://dowhatyoul0ve.github.io/to_do_list.v2/'},
        {id: '3', title: 'Weather Forecast', description: 'This is a weather application were you can check the weather for the particular city all over the world.', img: weather, code: 'https://github.com/DoWhatYouL0ve/weather-app', demo: 'https://dowhatyoul0ve.github.io/weather-app/'},
        {id: '4', title: 'Social Network', description: 'This is a test big project with API, Redux, Typescript and lots of functionality. To log in please ask me for the credentials first.', img: social, code: 'https://github.com/DoWhatYouL0ve/social_network', demo: 'https://dowhatyoul0ve.github.io/social_network/'},
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