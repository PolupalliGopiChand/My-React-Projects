import {useState} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import GameOptions from '../GameOptions'
import {
  MainContainer,
  ScoreContainer,
  ChoicesContainer,
  ChoiceWrapper,
  ScoreBox,
  ScoreText,
  ScoreValue,
  OptionImage,
  ResultOptionsContainer,
  PlayAgainButton,
  RulesButton,
  PopupContainer,
  RulesImage,
  ResultText,
  ChoicesResultContainer,
  ChoiceItemContainer,
  ChoiceHeading,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const RockPaperScissors = () => {
  const [score, setScore] = useState(0)
  const [isGameInProgress, setIsGameInProgress] = useState(true)
  const [yourChoice, setYourChoice] = useState(null)
  const [opponentChoice, setOpponentChoice] = useState(null)

  const updateScore = (yourId, opponentId) => {
    if (yourId === opponentId) return
    if (
      (yourId === 'ROCK' && opponentId === 'SCISSORS') ||
      (yourId === 'PAPER' && opponentId === 'ROCK') ||
      (yourId === 'SCISSORS' && opponentId === 'PAPER')
    ) {
      setScore(prev => prev + 1)
    } else {
      setScore(prev => prev - 1)
    }
  }

  const onClickChoice = id => {
    const yourSelected = choicesList.find(choice => choice.id === id)
    const opponentSelected =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    setYourChoice(yourSelected)
    setOpponentChoice(opponentSelected)
    setIsGameInProgress(false)
    updateScore(yourSelected.id, opponentSelected.id)
  }

  const onPlayAgain = () => {
    setIsGameInProgress(true)
    setYourChoice(null)
    setOpponentChoice(null)
  }

  const getResultText = () => {
    if (yourChoice.id === opponentChoice.id) return 'IT IS DRAW'
    if (
      (yourChoice.id === 'ROCK' && opponentChoice.id === 'SCISSORS') ||
      (yourChoice.id === 'PAPER' && opponentChoice.id === 'ROCK') ||
      (yourChoice.id === 'SCISSORS' && opponentChoice.id === 'PAPER')
    ) {
      return 'YOU WON'
    }
    return 'YOU LOSE'
  }

  return (
    <MainContainer>
      <ScoreContainer>
        <h1>
          Rock <br /> Paper <br /> Scissors
        </h1>
        <ScoreBox>
          <ScoreText>Score</ScoreText>
          <ScoreValue>{score}</ScoreValue>
        </ScoreBox>
      </ScoreContainer>

      {isGameInProgress ? (
        <ChoicesContainer>
          {choicesList.map(choice => (
            <ChoiceWrapper key={choice.id}>
              <GameOptions choice={choice} onClickChoice={onClickChoice} />
            </ChoiceWrapper>
          ))}
        </ChoicesContainer>
      ) : (
        <ChoicesResultContainer>
          <ResultOptionsContainer>
            <ChoiceItemContainer>
              <ChoiceHeading>YOU</ChoiceHeading>
              <OptionImage src={yourChoice.imageUrl} alt="your choice" />
            </ChoiceItemContainer>
            <ChoiceItemContainer>
              <ChoiceHeading>OPPONENT</ChoiceHeading>
              <OptionImage
                src={opponentChoice.imageUrl}
                alt="opponent choice"
              />
            </ChoiceItemContainer>
          </ResultOptionsContainer>
          <ResultText>{getResultText()}</ResultText>
          <PlayAgainButton onClick={onPlayAgain}>PLAY AGAIN</PlayAgainButton>
        </ChoicesResultContainer>
      )}

      <Popup modal trigger={<RulesButton>Rules</RulesButton>}>
        {close => (
          <PopupContainer>
            <button type="button" onClick={close}>
              <RiCloseLine size={20} />
            </button>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </PopupContainer>
        )}
      </Popup>
    </MainContainer>
  )
}

export default RockPaperScissors
