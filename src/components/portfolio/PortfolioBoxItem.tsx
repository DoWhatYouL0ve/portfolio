import React from "react";
import styled from 'styled-components'
import { StyledButton } from "../styles/common/Button.styled";
import { H3 } from "../styles/common/Header3.styled";
import { P } from "../styles/common/Paragraph.styled";

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

const PortfolioBoxItemStyled = styled.div`
  width: 500px;
  height: 400px;
  border: 1px solid ${({theme})=>theme.bg.primaryBgColor};
  margin-bottom: 50px;
  .project {
    height: 250px;
    position: relative;
    .demonstrationButtons {
      position: absolute;
      top: 33%;
      left: 25%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  H3 {
    color: ${({theme})=>theme.colors.primaryTextColor};
    font-family: "Kaushan Script", cursive;
    font-weight: bold;
  }
  @media screen and (max-width: 1024px) {
    width: 380px;
    height: 280px;
    .project {
      height: 155px;
      .demonstrationButtons {
        top: 33%;
        left: 15%;
      }
    }
    H3 {
      margin: 12px;
    }
    P {
      font-size: 14px;
      line-height: 1.2;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 0 auto 50px;
    width: 500px;
    height: 400px;
    .project {
      height: 250px;
      .demonstrationButtons {
        top: 33%;
        left: 25%;
      }
    }
    H3 {
      margin: 20px;
    }
    P {
      font-size: 16px;
      line-height: 1.7;
    }
  }
  @media screen and (max-width: 600px) {
    margin: 0 auto 50px;
    width: 470px;
    height: 300px;
    .project {
      height: 155px;
      .demonstrationButtons {
        top: 33%;
        left: 25%;
      }
    }
    H3 {
      margin: 20px;
    }
    P {
      font-size: 14px;
      line-height: 1.5;
    }
  }
  @media screen and (max-width: 480px) {
    margin: 0 auto 20px;
    width: 280px;
    height: 280px;
    .project {
      height: 130px;
      .demonstrationButtons {
        top: 33%;
        left: 4%;
      }
    }
    H3 {
      margin: 5px;
    }
    P {
      font-size: 14px;
      line-height: 1.5;
    }
  }
`

export const PortfolioBoxItem = (props: PropsType) => {

    return (
        <>
            <PortfolioBoxItemStyled>
                <div className={'project'} style={{background: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7)), url(${props.item.img})`, backgroundSize: "cover"}}>
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