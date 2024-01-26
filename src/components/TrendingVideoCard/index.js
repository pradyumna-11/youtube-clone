import {Link} from 'react-router-dom'
import './index.css'
import {
  TrendingCardItem,
  TrendingCardThumbnail,
  TrendingCardContentContainer,
  TrendingCardTitle,
  TrendingCardChannelAndViewsContainer,
  TrendingCardChannelName,
  TrendingCardViewsAndPublishContainer,
  TrendingCardViews,
  TrendingCardDot,
  SmallDot,
  TrendingCardWithProfile,
  TrendingCardChannelProfile,
} from './StyledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const TrendingVideoCard = props => {
  const {trendingVideoCardDetails} = props
  const {
    id,
    thumbnail,
    channelName,
    title,
    publishedAt,
    profileImageUrl,
    viewCount,
  } = trendingVideoCardDetails
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <TrendingCardItem>
            <TrendingCardThumbnail src={thumbnail} alt="video thumbnail" />
            <Link to={`/videos/${id}`} className="link-style">
              <TrendingCardWithProfile>
                <TrendingCardChannelProfile
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <TrendingCardContentContainer>
                  <TrendingCardTitle isDark={isDark}>{title}</TrendingCardTitle>
                  <TrendingCardChannelAndViewsContainer>
                    <TrendingCardChannelName>
                      {channelName}
                    </TrendingCardChannelName>
                    <SmallDot>.</SmallDot>
                    <TrendingCardViewsAndPublishContainer>
                      <TrendingCardViews>{viewCount} views</TrendingCardViews>
                      <TrendingCardDot>.</TrendingCardDot>
                      <TrendingCardViews>{publishedAt}</TrendingCardViews>
                    </TrendingCardViewsAndPublishContainer>
                  </TrendingCardChannelAndViewsContainer>
                </TrendingCardContentContainer>
              </TrendingCardWithProfile>
            </Link>
          </TrendingCardItem>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default TrendingVideoCard
