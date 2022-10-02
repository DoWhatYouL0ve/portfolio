import styled from 'styled-components'

export const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 0;
    border: 1px solid red;
    display: flex;
  @media screen and (max-width: 1200px) {
    width: 95%;
  }

  @media screen and (max-width: 1024px) {
      width: 86%;
  }

  @media screen and (max-width: 900px) {

  }

  @media screen and (max-width: 768px) {

  }

  @media screen and (max-width: 600px) {
      width: 100%;
  }

  @media screen and (max-width: 480px) {

  }

  @media screen and (max-width: 320px) {

  }
`
