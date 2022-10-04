import React from "react";
import {StyledBackground} from "../styles/common/Background.styled";
import {ContactsContainer, ContactsFormContainer, ContactsMessengers, ContactsEmail} from "./Contacts.styled";
import {H2} from "../styles/common/Header2.styled";
import {MessengerBox} from './MessengerBox'
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import {ContactForm} from './ContactForm'

export const Contacts = () => {

    const items = [
        {id: '1', title: 'Email', description: 'mailto: william_ross@mailfence.com', icon: AiOutlineMail},
        {id: '2', title: 'Messenger', description: 'https://m.me/100078432952372', icon: RiMessengerLine},
        {id: '3', title: 'WhatsApp', description: 'https://api.whatsapp.com/send?phone=+48576634346', icon: AiOutlineWhatsApp}
    ]

    return <>
        <StyledBackground bg={'primary'}>
            <ContactsContainer id={'contact'}>
                <div className={'wrapper'}>
                    <H2 white={true}>Contact Me</H2>
                   <ContactsFormContainer>
                        <ContactsEmail>
                            <ContactForm/>
                        </ContactsEmail>
                        <ContactsMessengers>
                            {items.map(i=><MessengerBox item={i} key={i.id}/>)}
                        </ContactsMessengers>
                    </ContactsFormContainer>
                </div>
            </ContactsContainer>
        </StyledBackground>
    </>
}
