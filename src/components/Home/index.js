import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoMdClose, IoIosSearch} from 'react-icons/io'
import Header from '../Header'
import Navigator from '../Navigator'
import VideoItem from '../VideoItem'
import {
  HomeBgContainer,
  HomeContentsBg,
  HomeInnerSection,
  BannerContainer,
  BannerInnerContainer,
  BannerLogo,
  BannerContext,
  BannerButton,
  BannerCloseButton,
  HomeBottomSection,
  HomeSearchContainer,
  SearchInput,
  HomeSearchButton,
  HomeVideosContainer,
  HomeFailureContainer,
  HomeFailureImg,
  HomeFailureHeading,
  HomeFailureContext1,
  HomeFailureContext2,
  HomeRetryButton,
  NoResultContainer,
  NoResultImg,
  NoResultHeading,
  NoResultDescription,
} from './StyledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const homeApiStatus = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    searchValue: '',
    videosData: [],
    homeStatus: homeApiStatus.loading,
    showBanner: true,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {searchValue} = this.state
    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    this.setState({homeStatus: homeApiStatus.loading})
    console.log('retry called')
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchValue}`,
      options,
    )
    if (response.ok === true) {
      this.setState({homeStatus: homeApiStatus.success})
      const data = await response.json()
      const {videos} = data
      const updatedData = videos.map(each => ({
        id: each.id,
        publishedAt: each.published_at,
        thumbnail: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
        channelName: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      }))
      this.setState({videosData: updatedData})
    } else {
      this.setState({homeStatus: homeApiStatus.failure})
    }
  }

  closeBanner = () => {
    this.setState(prevState => ({showBanner: !prevState.showBanner}))
  }

  onChangeSearchValue = event => {
    this.setState({searchValue: event.target.value})
  }

  changeSearchValue = () => {
    this.getVideoDetails()
  }

  retryHomeLoading = () => {
    console.log('normal called')
    this.getVideoDetails()
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </div>
  )

  renderFailure = value => (
    <HomeFailureContainer>
      <HomeFailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <HomeFailureHeading isDark={value.isDark}>
        Oops! Something Went Wrong
      </HomeFailureHeading>
      <HomeFailureContext1>
        We are having some trouble to complete to your request.
      </HomeFailureContext1>
      <HomeFailureContext2>Please try again.</HomeFailureContext2>
      <HomeRetryButton type="button" onClick={this.retryHomeLoading}>
        Retry
      </HomeRetryButton>
    </HomeFailureContainer>
  )

  renderResults = value => {
    const {videosData} = this.state
    const {isDark} = value
    if (videosData.length === 0) {
      return (
        <NoResultContainer>
          <NoResultImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <NoResultHeading isDark={isDark}>
            No Search results found
          </NoResultHeading>
          <NoResultDescription>
            Try different key words or remove search filter
          </NoResultDescription>
          <HomeRetryButton type="button" onClick={this.retryHomeLoading}>
            Retry
          </HomeRetryButton>
        </NoResultContainer>
      )
    }
    return (
      <HomeVideosContainer>
        {videosData.map(each => (
          <VideoItem videoDetails={each} key={each.id} />
        ))}
      </HomeVideosContainer>
    )
  }

  renderHomePage = value => {
    const {homeStatus} = this.state
    switch (homeStatus) {
      case homeApiStatus.loading:
        return this.renderLoader()
      case homeApiStatus.success:
        return this.renderResults(value)
      case homeApiStatus.failure:
        return this.renderFailure(value)
      default:
        return this.renderLoader()
    }
  }

  render() {
    const {searchValue, showBanner} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <HomeBgContainer isDark={isDark} data-testid="home">
              <Header />
              <HomeContentsBg>
                <Navigator />
                <HomeInnerSection>
                  <BannerContainer showBanner={showBanner} data-testid="banner">
                    <BannerInnerContainer>
                      <BannerLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerContext>Buy Nxt Watch Premium</BannerContext>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerInnerContainer>
                    <BannerCloseButton
                      type="button"
                      onClick={this.closeBanner}
                      data-testid="close"
                    >
                      a<IoMdClose color="#000000" size={25} />
                    </BannerCloseButton>
                  </BannerContainer>
                  <HomeBottomSection isDark={isDark}>
                    <HomeSearchContainer>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        onChange={this.onChangeSearchValue}
                        value={searchValue}
                        isDark={isDark}
                      />
                      <HomeSearchButton
                        type="button"
                        onClick={this.changeSearchValue}
                        isDark={isDark}
                        data-testid="searchButton"
                      >
                        a
                        <IoIosSearch
                          color={isDark ? '#909090' : '#000000'}
                          size={20}
                        />
                      </HomeSearchButton>
                    </HomeSearchContainer>
                    {this.renderHomePage(value)}
                  </HomeBottomSection>
                </HomeInnerSection>
              </HomeContentsBg>
            </HomeBgContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Home
