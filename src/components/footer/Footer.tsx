import React from "react";
import {FooterContainer, FooterStyledBackground} from "./Footer.styled";

export const Footer = () => {
    return <>
        <FooterStyledBackground bg={'white'}>
            <FooterContainer>
                <div><div className={'footerBlock'}>All Rights Reserved. © 2022.</div> <span>Designed by <span className={'markedText'}>William Ross</span></span></div>
            </FooterContainer>
        </FooterStyledBackground>
    </>
}