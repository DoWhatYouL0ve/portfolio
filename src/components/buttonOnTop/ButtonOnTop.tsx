import React, {useEffect, useState} from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { StyledButtonOnTop } from "./styles/styledButtonOnTop";

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