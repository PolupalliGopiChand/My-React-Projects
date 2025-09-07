import {Component} from 'react'
import './index.css' // Ensure this file exists in the same directory

class NavBar extends Component {
  render() {
    const {score, time} = this.props

    return (
      <nav className="navbar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo"
        />
        <div className="score-time-container">
          <p className="score">Score: {score}</p>
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-icon"
            />
            <p className="time">{time} sec</p>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
