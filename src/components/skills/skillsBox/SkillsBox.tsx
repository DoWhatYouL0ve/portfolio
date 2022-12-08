import React from "react";
import {IconType} from "react-icons";
//@ts-ignore
import AOS from 'aos'
import 'aos/dist/aos.css'
import { StyledSkillBox } from "./styles/styledSkillsBox";

type ItemPropsType = {
    title: string
    icon: IconType
}

type PropsType = {
    item: ItemPropsType
}

export const SkillsBox = (props: PropsType) => {
    return (
        <>
            <StyledSkillBox data-aos="zoom-in" data-aos-easing="ease-in-out" >
                <span className={'ItemIcon'}>{<props.item.icon/>}</span>
                <span>{props.item.title}</span>
            </StyledSkillBox>
        </>
    )
}

AOS.init();