import styled from 'styled-components'
import {Container} from "../styles/common/Container.styled";


export const ContactsContainer = styled(Container)`
  min-height: 100vh;
  padding: 100px 0;
  justify-content: center;
  text-align: center;
  .wrapper {
    width: 100%;
  }
`

export const ContactsFormContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ContactsMessengers = styled.div`
  border: 1px solid white;
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ContactsEmail = styled.div`
  border: 1px solid white;
  width: 800px;
  margin: 0 auto 30px;
`

