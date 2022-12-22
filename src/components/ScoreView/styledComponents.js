import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-color: #ffffff;
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
  background-color: transparent;
  padding: 10px;
  width: 80%;
  margin-top: 2px;
`

export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreName = styled.div`
  color: #ffffff;
  font-family: 'Bree serif';
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const ScoreBoard = styled(ScoreNameContainer)`
  background-color: #ffffff;
  width: 15%;
  height: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 25%;
  }
`

export const ScoreHeading = styled.p`
  color: #223a5f;
  font-family: 'Bree serif';
  font-size: 20px;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`

export const ScoreResult = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 42px;
  margin-top: 0px;
  @media screen and (max-width: 576px) {
    font-size: 24px;
    margin-top: 10px;
  }
`
