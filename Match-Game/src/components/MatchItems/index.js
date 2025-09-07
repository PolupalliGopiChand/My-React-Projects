import {Component} from 'react'
import './index.css'

class MatchItems extends Component {
  render() {
    const {
      tabsList,
      imagesList,
      activeTab,
      onTabChange,
      onThumbnailClick,
    } = this.props

    console.log('Tabs List:', tabsList)
    console.log('Images List:', imagesList)
    console.log('Active Tab:', activeTab)

    const filteredImages = imagesList.filter(
      image => image.category === activeTab,
    )

    console.log('Filtered Images:', filteredImages)

    return (
      <div className="match-items-container">
        <ul className="tabs-list">
          {tabsList.map(tab => (
            <li key={tab.tabId} className="tab-item">
              <button
                type="button"
                className={`tab-button ${
                  activeTab === tab.tabId ? 'active' : ''
                }`}
                onClick={() => onTabChange(tab.tabId)}
              >
                {tab.displayText}
              </button>
            </li>
          ))}
        </ul>
        <ul className="thumbnails-list">
          {filteredImages.map(image => (
            <li key={image.id} className="thumbnail-item">
              <button
                type="button"
                className="thumbnail-button"
                onClick={() => onThumbnailClick(image.id)}
              >
                <img
                  src={image.thumbnailUrl}
                  alt="thumbnail"
                  className="thumbnail-image"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MatchItems
