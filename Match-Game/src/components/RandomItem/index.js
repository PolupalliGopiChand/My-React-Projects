import {Component} from 'react'
import './index.css'

class RandomItem extends Component {
  render() {
    const {imageUrl} = this.props

    return (
      <div className="random-item-container">
        <img src={imageUrl} alt="match" className="random-image" />
      </div>
    )
  }
}

export default RandomItem
