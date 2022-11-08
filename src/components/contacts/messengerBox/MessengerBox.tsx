import React from "react";
import { H3 } from "../../styles/common/Header3.styled";
import {IconType} from "react-icons";
//@ts-ignore
import AOS from 'aos'
import 'aos/dist/aos.css'
import { MessengersBoxStyled } from "./styledMessengerBox";

type ItemPropsType = {
    id: string
    title: string
    description: string
    icon: IconType
}

type PropsType = {
    item: ItemPropsType
}

export const MessengerBox = (props: PropsType) => {
    return (
        <>
            <MessengersBoxStyled data-aos="flip-up" data-aos-easing="ease-in-out" data-aos-duration="600">
                <div className={'messengerIcon'}>{<props.item.icon/>}</div>
                <H3>{props.item.title}</H3>
                <div className={'sendMessageButton'}><a href={props.item.description} target={'_blank'} rel="noopener noreferrer">Send a message</a></div>
            </MessengersBoxStyled>
        </>
    )
}

AOS.init();