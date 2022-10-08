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
  .sendMessageButton {
    background: ${({theme})=>theme.bg.primaryBgColor};
    color: ${({theme})=>theme.colors.whiteTextColor};
    border: 2px solid ${({theme})=>theme.colors.whiteTextColor};
    cursor: pointer;
    margin: 20px auto;
    font-family: "Space Mono", Arial, serif;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 30px;
    padding: 8px;
    width: 142px;
    a {
      color: ${({theme})=>theme.colors.whiteTextColor};
    }
    &:hover{
      transition: 0.5s;
      scale: 1.1;
    }
  }
  @media screen and (max-width: 768px) {
    width: 160px;
    height: 180px;
    .messengerIcon {
      font-size: 35px;
    }
    H3 {
      font-size: 16px;
    }
    .sendMessageButton {
      font-size: 14px;
      width: 130px;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 65px;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .messengerIcon {
      
    }
    H3 {
      font-size: 14px;
    }
    .sendMessageButton {
      height: 25px;
      padding: 2px;
      margin: 0;
    }
  }
  @media screen and (max-width: 320px) {
    H3 {
      display: none;
    }
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
                <div className={'sendMessageButton'}><a href={props.item.description} target={'_blank'} rel="noopener noreferrer">Send a message</a></div>
            </MessengersBoxStyled>
        </>
    )
}