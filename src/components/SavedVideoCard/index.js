import {Link} from 'react-router-dom'
import './index.css'
import {
  SavedCardItem,
  SavedCardThumbnail,
  SavedCardContentContainer,
  SavedCardTitle,
  SavedCardChannelAndViewsContainer,
  SavedCardChannelName,
  SavedCardViewsAndPublishContainer,
  SavedCardViews,
  SavedCardDot,
  SmallDot,
  SavedCardWithProfile,
  SavedCardChannelProfile,
} from './StyledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const SavedVideoCard = props => {
  const {SavedVideoCardDetails} = props
  const {
    id,
    thumbnail,
    channelName,
    title,
    publishedAt,
    profileImageUrl,
    viewCount,
  } = SavedVideoCardDetails
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <SavedCardItem>
            <SavedCardThumbnail src={thumbnail} alt="video thumbnail" />
            <Link to={`/videos/${id}`} className="link-style">
              <SavedCardWithProfile>
                <SavedCardChannelProfile
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <SavedCardContentContainer>
                  <SavedCardTitle isDark={isDark}>{title}</SavedCardTitle>
                  <SavedCardChannelAndViewsContainer>
                    <SavedCardChannelName>{channelName}</SavedCardChannelName>
                    <SmallDot>.</SmallDot>
                    <SavedCardViewsAndPublishContainer>
                      <SavedCardViews>{viewCount} views</SavedCardViews>
                      <SavedCardDot>.</SavedCardDot>
                      <SavedCardViews>{publishedAt}</SavedCardViews>
                    </SavedCardViewsAndPublishContainer>
                  </SavedCardChannelAndViewsContainer>
                </SavedCardContentContainer>
              </SavedCardWithProfile>
            </Link>
          </SavedCardItem>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default SavedVideoCard
