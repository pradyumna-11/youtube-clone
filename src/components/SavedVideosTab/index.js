import {Component} from 'react'

import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import Navigator from '../Navigator'
import SavedVideoCard from '../SavedVideoCard'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import './index.css'
import {
  SavedBgContainer,
  SavedContentsContainer,
  SavedInnerContainer,
  SavedTopContainer,
  SavedHeading,
  SavedVideosContainer,
  NoVideosContainer,
  NoVideosHeading,
  NoVideosImg,
  NoVideosDescription,
} from './StyledComponents'

class TrendingTab extends Component {
  renderSavedSuccess = (isDark, savedVideos) => {
    const iconClassName = isDark ? 'trendingIconDark' : 'trendingIcon'
    console.log(savedVideos)
    if (savedVideos.length === 0) {
      return (
        <NoVideosContainer>
          <NoVideosImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoVideosHeading isDark={isDark}>
            No saved videos found
          </NoVideosHeading>
          <NoVideosDescription isDark={isDark}>
            You can save your videos while watching them.
          </NoVideosDescription>
        </NoVideosContainer>
      )
    }
    return (
      <>
        <SavedTopContainer isDark={isDark} data-testid="banner">
          <HiFire className={iconClassName} size={30} />
          <SavedHeading isDark={isDark}>Saved Videos</SavedHeading>
        </SavedTopContainer>
        <SavedVideosContainer>
          {savedVideos.map(each => (
            <SavedVideoCard SavedVideoCardDetails={each} key={each.id} />
          ))}
        </SavedVideosContainer>
      </>
    )
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDark, savedVideos} = value
          return (
            <SavedBgContainer isDark={isDark} data-testid="savedVideos">
              <Header />
              <SavedContentsContainer>
                <Navigator />
                <SavedInnerContainer>
                  {this.renderSavedSuccess(isDark, savedVideos)}
                </SavedInnerContainer>
              </SavedContentsContainer>
            </SavedBgContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default TrendingTab
