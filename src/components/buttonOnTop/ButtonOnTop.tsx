import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

const StyledButtonOnTop = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid ${({theme})=>theme.colors.whiteTextColor};
  background-color: ${({theme})=>theme.bg.primaryBgColor};
  text-align: center;
  padding-top: 5px;
  a {
    color: ${({theme})=>theme.colors.whiteTextColor};
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    right: 20px;
  }
`

export const ButtonOnTop = () => {

    const [buttonOnTop, setButtonOnTop] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 500) {
                setButtonOnTop(true)
            }else {
                setButtonOnTop(false)
            }
        })
    },[buttonOnTop])
    return (
        <>
            {buttonOnTop && <StyledButtonOnTop>
                <a href={"#top"}><AiOutlineArrowUp/></a>
            </StyledButtonOnTop>}
        </>
    )
}