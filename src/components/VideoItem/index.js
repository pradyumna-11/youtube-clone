import {Link} from 'react-router-dom'
import {
  VideoListItem,
  VideoThumbnail,
  VideoListItemBottom,
  ChannelProfileLogo,
  VideoItemContentContainer,
  VideoTitle,
  ChannelName,
  VideoDateAndViewsContainer,
  VideoViews,
  Dot,
  ChannelAndViewsContainer,
} from './StyledComponents'
import './index.css'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnail,
    channelName,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <VideoListItem>
            <Link to={`/videos/${id}`} className="link-style">
              <VideoThumbnail src={thumbnail} alt="video thumbnail" />
              <VideoListItemBottom>
                <ChannelProfileLogo src={profileImageUrl} alt="channel logo" />
                <VideoItemContentContainer>
                  <VideoTitle isDark={isDark}>{title}</VideoTitle>
                  <ChannelAndViewsContainer>
                    <ChannelName>{channelName}</ChannelName>
                    <VideoDateAndViewsContainer>
                      <VideoViews>{viewCount} views</VideoViews>
                      <Dot>.</Dot>
                      <VideoViews>{publishedAt}</VideoViews>
                    </VideoDateAndViewsContainer>
                  </ChannelAndViewsContainer>
                </VideoItemContentContainer>
              </VideoListItemBottom>
            </Link>
          </VideoListItem>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default VideoItem
