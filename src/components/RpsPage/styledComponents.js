import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #223a5f;
  padding: 20px;
`

export const RulesView = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`
export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vw;
  padding: 10px;
  @media screen and (max-width: 576px) {
    width: 100%;
    height: 90%;
    margin-top: auto;
  }
`

export const PopUpImage = styled.img`
  width: 100%;
  height: 90%;
  margin-top: auto;
`
