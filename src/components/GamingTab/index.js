import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoGameController} from 'react-icons/io5'
import Header from '../Header'
import Navigator from '../Navigator'
import GamingCard from '../GamingCard'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import './index.css'
import {
  GamingTabBgContainer,
  GamingTabContentsContainer,
  GamingTabInnerContainer,
  GamingTabTopContainer,
  GamingTabHeading,
  GamingTabVideosContainer,
  GamingFailureContainer,
  GamingFailureImg,
  GamingFailureHeading,
  GamingFailureContext1,
  GamingFailureContext2,
  GamingRetryButton,
} from './StyledComponents'

const gamingStatusConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingTab extends Component {
  state = {
    gamingVideosData: [],
    gamingTabStatus: gamingStatusConstants.loading,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    const token = Cookies.get('jwt_token')
    this.setState({gamingTabStatus: gamingStatusConstants.loading})
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch('https://apis.ccbp.in/videos/gaming', options)
    if (response.ok === true) {
      const gamingVideosData = await response.json()
      const {videos} = gamingVideosData
      const updatedGamingVideosData = videos.map(each => ({
        id: each.id,
        thumbnail: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingVideosData: updatedGamingVideosData,
        gamingTabStatus: gamingStatusConstants.success,
      })
    } else {
      this.setState({gamingTabStatus: gamingStatusConstants.failure})
    }
  }

  renderGamingLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </div>
  )

  retryGameLoading = () => {
    this.getGamingVideos()
  }

  renderGamingFailure = isDark => (
    <GamingFailureContainer>
      <GamingFailureImg
        src={
          isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <GamingFailureHeading isDark={isDark}>
        Oops! Something Went Wrong
      </GamingFailureHeading>
      <GamingFailureContext1>
        We are having some trouble to complete to your request.
      </GamingFailureContext1>
      <GamingFailureContext2>Please try again.</GamingFailureContext2>
      <GamingRetryButton type="button" onClick={this.retryGameLoading}>
        Retry
      </GamingRetryButton>
    </GamingFailureContainer>
  )

  renderGamingSuccess = isDark => {
    const {gamingVideosData} = this.state
    const iconClassName = isDark ? 'trendingIconDark' : 'trendingIcon'
    return (
      <>
        <GamingTabTopContainer isDark={isDark}>
          <IoGameController className={iconClassName} size={30} />
          <GamingTabHeading isDark={isDark}>Gaming</GamingTabHeading>
        </GamingTabTopContainer>
        <GamingTabVideosContainer>
          {gamingVideosData.map(each => (
            <GamingCard gamingCardDetails={each} key={each.id} />
          ))}
        </GamingTabVideosContainer>
      </>
    )
  }

  renderGamingResults = isDark => {
    const {gamingTabStatus} = this.state
    switch (gamingTabStatus) {
      case gamingStatusConstants.loading:
        return this.renderGamingLoader()
      case gamingStatusConstants.success:
        return this.renderGamingSuccess(isDark)
      case gamingStatusConstants.failure:
        return this.renderGamingFailure(isDark)
      default:
        return this.renderGamingLoader()
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <GamingTabBgContainer isDark={isDark} data-testid="gaming">
              <Header />
              <GamingTabContentsContainer>
                <Navigator />
                <GamingTabInnerContainer>
                  {this.renderGamingResults(isDark)}
                </GamingTabInnerContainer>
              </GamingTabContentsContainer>
            </GamingTabBgContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default TrendingTab
