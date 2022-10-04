import React from "react";
import styled from "styled-components";
import { H3 } from "../styles/common/Header3.styled";
import {IconType} from "react-icons";

export const MessengersBoxStyled = styled.div`
  width: 250px;
  height: 200px;
  border: 1px solid ${({theme})=>theme.colors.whiteTextColor};
  color: ${({theme})=>theme.colors.whiteTextColor};
  .messengerIcon {
    margin: 10px 0 0;
    font-size: 50px;
  }
`

export const SendMessageButton = styled.div`
  background: ${({theme})=>theme.bg.primaryBgColor};
  color: ${({theme})=>theme.colors.whiteTextColor};
  border: 2px solid ${({theme})=>theme.colors.whiteTextColor};
  cursor: pointer;
  margin: 20px;
  font-family: "Space Mono", Arial, serif;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 30px;
  padding: 8px 20px;
  a {
    color: ${({theme})=>theme.colors.whiteTextColor};
  }
  &:hover{
    transition: 0.5s;
    scale: 1.1;
  }
`

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
            <MessengersBoxStyled>
                <div className={'messengerIcon'}>{<props.item.icon/>}</div>
                <H3>{props.item.title}</H3>
                <SendMessageButton><a href={props.item.description} target={'_blank'} rel="noopener noreferrer">Send a message</a></SendMessageButton>
            </MessengersBoxStyled>
        </>
    )
}