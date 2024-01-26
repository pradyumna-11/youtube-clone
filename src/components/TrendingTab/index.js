import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import Navigator from '../Navigator'
import TrendingVideoCard from '../TrendingVideoCard'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import './index.css'
import {
  TrendingTabBgContainer,
  TrendingTabContentsContainer,
  TrendingTabInnerContainer,
  TrendingTabTopContainer,
  TrendingTabHeading,
  TrendingTabVideosContainer,
  TrendingFailureContainer,
  TrendingFailureImg,
  TrendingFailureHeading,
  TrendingFailureContext1,
  TrendingRetryButton,
} from './StyledComponents'

const trendingStatusConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingTab extends Component {
  state = {
    trendingVideosData: [],
    trendingTabStatus: trendingStatusConstants.loading,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    const token = Cookies.get('jwt_token')
    this.setState({trendingTabStatus: trendingStatusConstants.loading})
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(
      'https://apis.ccbp.in/videos/trending',
      options,
    )
    if (response.ok === true) {
      const trendingVideosData = await response.json()
      const {videos} = trendingVideosData
      const updatedTrendingVideosData = videos.map(each => ({
        id: each.id,
        thumbnail: each.thumbnail_url,
        title: each.title,
        channelName: each.channel.name,
        publishedAt: each.published_at,
        profileImageUrl: each.channel.profile_image_url,
        viewCount: each.view_count,
      }))
      this.setState({
        trendingVideosData: updatedTrendingVideosData,
        trendingTabStatus: trendingStatusConstants.success,
      })
    } else {
      this.setState({trendingTabStatus: trendingStatusConstants.failure})
    }
  }

  renderTrendingLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </div>
  )

  retryTrendingLoading = () => {
    this.getTrendingVideos()
  }

  renderTrendingFailure = isDark => (
    <TrendingFailureContainer>
      <TrendingFailureImg
        src={
          isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <TrendingFailureHeading isDark={isDark}>
        Oops! Something Went Wrong
      </TrendingFailureHeading>
      <TrendingFailureContext1>
        We are having some trouble to complete to your request.
      </TrendingFailureContext1>
      <TrendingRetryButton type="button" onClick={this.retryTrendingLoading}>
        Retry
      </TrendingRetryButton>
    </TrendingFailureContainer>
  )

  renderTrendingSuccess = isDark => {
    const {trendingVideosData} = this.state
    const iconClassName = isDark ? 'trendingIconDark' : 'trendingIcon'
    return (
      <>
        <TrendingTabTopContainer isDark={isDark}>
          <HiFire className={iconClassName} size={30} />
          <TrendingTabHeading isDark={isDark}>Trending</TrendingTabHeading>
        </TrendingTabTopContainer>
        <TrendingTabVideosContainer>
          {trendingVideosData.map(each => (
            <TrendingVideoCard trendingVideoCardDetails={each} key={each.id} />
          ))}
        </TrendingTabVideosContainer>
      </>
    )
  }

  renderTrendingResults = isDark => {
    const {trendingTabStatus} = this.state
    switch (trendingTabStatus) {
      case trendingStatusConstants.loading:
        return this.renderTrendingLoader()
      case trendingStatusConstants.success:
        return this.renderTrendingSuccess(isDark)
      case trendingStatusConstants.failure:
        return this.renderTrendingFailure(isDark)
      default:
        return this.renderTrendingLoader()
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <TrendingTabBgContainer isDark={isDark} data-testid="trending">
              <Header />
              <TrendingTabContentsContainer>
                <Navigator />
                <TrendingTabInnerContainer>
                  {this.renderTrendingResults(isDark)}
                </TrendingTabInnerContainer>
              </TrendingTabContentsContainer>
            </TrendingTabBgContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default TrendingTab
