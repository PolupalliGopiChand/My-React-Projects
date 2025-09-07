import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #223a5f;
`

export const ScoreContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ffffff;
  border-radius: 12px;
  padding: 20px;
  color: #ffffff;
`

export const ScoreBox = styled.div`
  background: #ffffff;
  color: #223a5f;
  border-radius: 8px;
  padding: 10px 20px;
  text-align: center;
`

export const ScoreText = styled.p`
  font-family: 'Bree Serif';
  margin: 0;
`

export const ScoreValue = styled.p`
  font-family: 'Roboto';
  font-size: 28px;
  margin: 0;
`

export const ChoicesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  justify-items: center;
  gap: 40px;
  margin-top: 40px;
  width: 300px; /* keeps shape tight */
`

export const ChoiceWrapper = styled.div`
  &:nth-child(3) {
    grid-column: 1 / 3;
    justify-self: center;
  }
`

export const OptionImage = styled.img`
  width: 120px;
  height: 120px;
`

export const ResultOptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50vw;
`

export const ChoicesResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
`

export const ChoiceItemContainer = styled.div`
  margin: 10px;
  text-align: center;
`

export const ChoiceHeading = styled.p`
  font-weight: bold;
`

export const ResultText = styled.h2`
  margin: 20px 0;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  margin-top: auto;
  display: flex;
  align-self: flex-end;
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
`

export const RulesImage = styled.img`
  width: 100%;
  max-width: 400px;
  margin-top: 10px;
`
