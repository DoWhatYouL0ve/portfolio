import React from "react";
import { StyledButton } from "../../styles/common/Button.styled";
import { H3 } from "../../styles/common/Header3.styled";
import { P } from "../../styles/common/Paragraph.styled";
//@ts-ignore
import AOS from 'aos'
import 'aos/dist/aos.css'
import { PortfolioBoxItemStyled } from "./styledPortfolioBoxItem";

type ItemPropsType = {
    id: string
    title: string
    description: string
    img: string
    code: string
    demo: string
}

type PropsType = {
    item: ItemPropsType
}

export const PortfolioBoxItem = (props: PropsType) => {

    return (
        <>
            <PortfolioBoxItemStyled data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="600">
                <div className={'project'} style={{background: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7)), url(${props.item.img})`, backgroundSize: "cover"}}>
                    <div className={'boxPopUp'}>Check Me!</div>
                    <div className={'demonstrationButtons'}>
                        <StyledButton style={{width: '90px'}}><a href={props.item.demo} target="_blank" rel="noopener noreferrer">Demo</a></StyledButton>
                        <StyledButton style={{width: '90px'}}><a href={props.item.code} target="_blank" rel="noopener noreferrer">Code</a></StyledButton>
                    </div>
                </div>
                <div>
                    <H3>{props.item.title}</H3>
                    <P>{props.item.description}</P>
                </div>
            </PortfolioBoxItemStyled>
        </>
    )
}

AOS.init();