import React from "react";
import {FooterContainer, FooterStyledBackground} from "./Footer.styled";

export const Footer = () => {
    return <>
        <FooterStyledBackground bg={'white'}>
            <FooterContainer>
                <div>All Rights Reserved. © 2022. Designed by <span>William Ross</span></div>
            </FooterContainer>
        </FooterStyledBackground>
    </>
}