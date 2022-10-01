import React from "react";
import {StyledBackground} from "../styles/common/Background.styled";
import {ContactsContainer} from "../styles/Contacts.styled";

export const Contacts = () => {
    return <>
        <StyledBackground bg={'primary'}>
            <ContactsContainer>
                <div>Contacts</div>
            </ContactsContainer>
        </StyledBackground>
    </>
}
