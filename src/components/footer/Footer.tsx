import React from "react";
import {FooterContainer, FooterStyledBackground} from "./Footer.styled";

export const Footer = () => {
    return <>
        <FooterStyledBackground bg={'white'}>
            <FooterContainer>
                <div>Footer</div>
            </FooterContainer>
        </FooterStyledBackground>
    </>
}