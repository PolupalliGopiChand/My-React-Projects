import {Component} from 'react'
import NavBar from '../NavBar'
import RandomItem from '../RandomItem'
import MatchItems from '../MatchItems'
import './index.css'

class MatchGame extends Component {
  state = {
    score: 0,
    time: 60,
    activeTab: 'FRUIT',
    selectedImageId: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186', // Initial image ID
    isGameOver: false,
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    const {time} = this.state
    if (time === 0) {
      this.endGame()
    } else {
      this.setState(prevState => ({time: prevState.time - 1}))
    }
  }

  endGame = () => {
    clearInterval(this.timerId)
    this.setState({isGameOver: true})
  }

  onTabChange = tabId => {
    this.setState({activeTab: tabId})
  }

  onThumbnailClick = id => {
    const {imagesList} = this.props
    const {selectedImageId} = this.state
    const selectedImage = imagesList.find(image => image.id === id)

    if (selectedImage.id === selectedImageId) {
      this.setState(prevState => ({score: prevState.score + 1}))
      this.generateRandomImage()
    } else {
      this.endGame()
    }
  }

  generateRandomImage = () => {
    const {imagesList} = this.props
    const randomIndex = Math.floor(Math.random() * imagesList.length)
    this.setState({selectedImageId: imagesList[randomIndex].id})
  }

  resetGame = () => {
    this.setState({
      score: 0,
      time: 60,
      activeTab: 'FRUIT',
      selectedImageId: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186', // Reset to initial image ID
      isGameOver: false,
    })
    this.timerId = setInterval(this.tick, 1000)
  }

  render() {
    const {score, time, activeTab, selectedImageId, isGameOver} = this.state
    const {tabsList, imagesList} = this.props
    const selectedImage = imagesList.find(image => image.id === selectedImageId)

    return (
      <div className="app-container">
        <NavBar score={score} time={time} />
        {isGameOver ? (
          <div className="scorecard-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
              alt="trophy"
              className="trophy-image"
            />
            <p className="final-score">Your Score: {score}</p>
            <div className="btn-container">
              <button
                type="button"
                className="play-again-button"
                onClick={this.resetGame}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                  alt="reset"
                  className="reset-icon"
                />
                PLAY AGAIN
              </button>
            </div>
          </div>
        ) : (
          <>
            <RandomItem imageUrl={selectedImage.imageUrl} />
            <MatchItems
              tabsList={tabsList}
              imagesList={imagesList}
              activeTab={activeTab}
              onTabChange={this.onTabChange}
              onThumbnailClick={this.onThumbnailClick}
            />
          </>
        )}
      </div>
    )
  }
}

export default MatchGame
