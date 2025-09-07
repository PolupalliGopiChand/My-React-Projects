import {OptionButton, OptionImage} from './styledComponents'

const GameOptions = ({choice, onClickChoice}) => {
  const {id, imageUrl} = choice
  const lower = id.toLowerCase()

  return (
    <OptionButton
      type="button"
      data-testid={`${lower}Button`}
      onClick={() => onClickChoice(id)}
    >
      <OptionImage src={imageUrl} alt={lower} />
    </OptionButton>
  )
}

export default GameOptions
