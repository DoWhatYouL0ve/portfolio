import React from "react";
import {StyledBackground} from "../styles/common/Background.styled";
import {PortfolioContainer} from "./Portfolio.styled";

export const Portfolio = () => {
    return <>
        <StyledBackground bg={'white'}>
            <PortfolioContainer>
                <div>Portfolio</div>
            </PortfolioContainer>
        </StyledBackground>
    </>
}