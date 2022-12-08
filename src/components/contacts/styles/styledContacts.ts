import styled from 'styled-components'
import {Container} from "../../../styles/Container.styled";


export const ContactsContainer = styled(Container)`
  padding: 100px 0;
  justify-content: center;
  text-align: center;
  .wrapper {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }
`

export const ContactsFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ContactsMessengers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`
export const ContactsEmail = styled.div`
  width: 800px;
  margin: 0 auto 30px;
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 480px) {
    width: 95%;
  }
`

