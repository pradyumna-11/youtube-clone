import {Component} from 'react'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
import {RiMenuAddLine} from 'react-icons/ri'
import Header from '../Header'
import Navigator from '../Navigator'
import {
  VideoPlayerContainer,
  VideoPlayerInner,
  VideoPlayerInnerContents,
  VideoPlayerTitle,
  VideoPlayerVideoDetailsContainer,
  VideoPlayerViewsContainer,
  VideoPlayerVideoViews,
  Dot,
  SocialMediaButtonsContainer,
  SocialMediaButton,
  VideoPlayerLine,
  VideoPlayerVideoProfileAndDetailsContainer,
  VideoPlayerChannelProfileImg,
  VideoPlayerNameAndSubscribers,
  VideoPlayerChannelName,
  VideoPlayerChannelSubscribers,
  VideoPlayerDescription,
  VideoPlayerFailureContainer,
  VideoPlayerFailureImg,
  VideoPlayerFailureHeading,
  VideoPlayerFailureContext1,
  VideoPlayerRetryButton,
} from './StyledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const videoStatusConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoPlayer extends Component {
  state = {
    videoSpecifiedDetails: {},
    videoTabStatus: videoStatusConstants.loading,
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getSpecifiedVideoPlayerDetails()
  }

  getSpecifiedVideoPlayerDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const token = Cookies.get('jwt_token')
    this.setState({videoTabStatus: videoStatusConstants.loading})
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
    if (response.ok === true) {
      const specifiedVideoDetails = await response.json()

      const updatedSpecifiedVideoDetails = {
        id: specifiedVideoDetails.video_details.id,
        title: specifiedVideoDetails.video_details.title,
        videoUrl: specifiedVideoDetails.video_details.video_url,
        thumbnail: specifiedVideoDetails.video_details.thumbnail_url,
        viewCount: specifiedVideoDetails.video_details.view_count,
        publishedAt: specifiedVideoDetails.video_details.published_at,
        channelName: specifiedVideoDetails.video_details.channel.name,
        profileImageUrl:
          specifiedVideoDetails.video_details.channel.profile_image_url,
        subscriberCount:
          specifiedVideoDetails.video_details.channel.subscriber_count,
        description: specifiedVideoDetails.video_details.description,
      }
      this.setState({
        videoSpecifiedDetails: updatedSpecifiedVideoDetails,
        videoTabStatus: videoStatusConstants.success,
      })
    } else {
      this.setState({videoTabStatus: videoStatusConstants.failure})
    }
  }

  onClickLike = () => {
    const {isLiked} = this.state
    if (isLiked) {
      this.setState(prevState => ({isLiked: !prevState.isLiked}))
    } else {
      this.setState({isLiked: true, isDisLiked: false})
    }
  }

  onClickDisLike = () => {
    const {isDisLiked} = this.state
    if (isDisLiked) {
      this.setState(prevState => ({isDisLiked: !prevState.isDisLiked}))
    } else {
      this.setState({isLiked: false, isDisLiked: true})
    }
  }

  renderVideoPlayerLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </div>
  )

  retryVideoDetailsLoading = () => {
    this.getSpecifiedVideoPlayerDetails()
  }

  renderVideoPlayerFailure = isDark => (
    <VideoPlayerFailureContainer>
      <VideoPlayerFailureImg
        src={
          isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <VideoPlayerFailureHeading isDark={isDark}>
        Oops! Something Went Wrong
      </VideoPlayerFailureHeading>
      <VideoPlayerFailureContext1>
        We are having some trouble to complete your request. Please try again.
      </VideoPlayerFailureContext1>
      <VideoPlayerRetryButton
        type="button"
        onClick={this.retryVideoDetailsLoading}
      >
        Retry
      </VideoPlayerRetryButton>
    </VideoPlayerFailureContainer>
  )

  renderVideoPlayerSuccess = (isDark, value) => {
    const {videoSpecifiedDetails, isDisLiked, isLiked} = this.state
    const {savedVideos, addVideo} = value
    const likedIconColor = isLiked ? '#2563eb' : '#64748b'
    const disLikedIconColor = isDisLiked ? '#2563eb' : '#64748b'
    const saveVideo = () => {
      addVideo(videoSpecifiedDetails)
    }
    let saved
    if (savedVideos === undefined) {
      saved = false
    } else {
      const index = savedVideos.findIndex(
        each => each.id === videoSpecifiedDetails.id,
      )
      if (index === -1) {
        saved = false
      } else {
        saved = true
      }
    }

    const savedIconColor = saved ? '#2563eb' : '#64748b'
    const savedIconText = saved ? 'Saved' : 'Save'
    return (
      <VideoPlayerInnerContents>
        <ReactPlayer
          url={videoSpecifiedDetails.videoUrl}
          controls
          width="100%"
        />
        <VideoPlayerTitle isDark={isDark}>
          {videoSpecifiedDetails.title}
        </VideoPlayerTitle>
        <VideoPlayerVideoDetailsContainer>
          <VideoPlayerViewsContainer>
            <VideoPlayerVideoViews>
              {videoSpecifiedDetails.viewCount} views
            </VideoPlayerVideoViews>
            <Dot>.</Dot>
            <VideoPlayerVideoViews>
              {videoSpecifiedDetails.publishedAt}
            </VideoPlayerVideoViews>
          </VideoPlayerViewsContainer>
          <SocialMediaButtonsContainer>
            <SocialMediaButton
              type="button"
              onClick={this.onClickLike}
              color={likedIconColor}
            >
              <AiOutlineLike color={likedIconColor} size={25} />
              Like
            </SocialMediaButton>
            <SocialMediaButton
              type="button"
              onClick={this.onClickDisLike}
              color={disLikedIconColor}
            >
              <BiDislike color={disLikedIconColor} size={25} />
              Dislike
            </SocialMediaButton>
            <SocialMediaButton
              type="button"
              onClick={saveVideo}
              color={savedIconColor}
            >
              <RiMenuAddLine color={savedIconColor} size={25} />
              {savedIconText}
            </SocialMediaButton>
          </SocialMediaButtonsContainer>
        </VideoPlayerVideoDetailsContainer>
        <VideoPlayerLine />
        <VideoPlayerVideoProfileAndDetailsContainer>
          <VideoPlayerChannelProfileImg
            src={videoSpecifiedDetails.profileImageUrl}
            alt="channel logo"
          />
          <VideoPlayerNameAndSubscribers>
            <VideoPlayerChannelName isDark={isDark}>
              {videoSpecifiedDetails.channelName}
            </VideoPlayerChannelName>
            <VideoPlayerChannelSubscribers>
              {videoSpecifiedDetails.subscriberCount} subscribers
            </VideoPlayerChannelSubscribers>
          </VideoPlayerNameAndSubscribers>
        </VideoPlayerVideoProfileAndDetailsContainer>
        <VideoPlayerDescription isDark={isDark}>
          {videoSpecifiedDetails.description}
        </VideoPlayerDescription>
      </VideoPlayerInnerContents>
    )
  }

  renderVideoDetailsPage = (isDark, value) => {
    const {videoTabStatus} = this.state
    switch (videoTabStatus) {
      case videoStatusConstants.loading:
        return this.renderVideoPlayerLoader()
      case videoStatusConstants.success:
        return this.renderVideoPlayerSuccess(isDark, value)
      case videoStatusConstants.failure:
        return this.renderVideoPlayerFailure(isDark)
      default:
        return this.renderVideoPlayerLoader()
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <VideoPlayerContainer
              isDark={isDark}
              data-testid="videoItemDetails"
            >
              <Header />
              <VideoPlayerInner>
                <Navigator />
                {this.renderVideoDetailsPage(isDark, value)}
              </VideoPlayerInner>
            </VideoPlayerContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default VideoPlayer
