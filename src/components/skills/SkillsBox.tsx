import React from "react";
import styled from 'styled-components'
import {IconType} from "react-icons";

type ItemPropsType = {
    title: string
    icon: IconType
}

type PropsType = {
    item: ItemPropsType
}

const StyledSkillBox = styled.div`
  width: 250px;
  height: 50px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid ${({theme})=>theme.colors.whiteTextColor};
  color: ${({theme})=>theme.colors.whiteTextColor};
  display: flex;
  justify-content: space-between;
  span {
    font-size: 1.1em;
    font-weight: bold;
  }
  .ItemIcon {
    font-size: 1.5em;
    line-height: 30px;
  }
`

export const SkillsBox = (props: PropsType) => {
    return (
        <>
            <StyledSkillBox>
                <span className={'ItemIcon'}>{<props.item.icon/>}</span>
                <span>{props.item.title}</span>
            </StyledSkillBox>
        </>
    )
}