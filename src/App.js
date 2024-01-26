import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import TrendingTab from './components/TrendingTab'
import GamingTab from './components/GamingTab'
import ProtectedRouter from './components/ProtectedRouter'
import VideoPlayer from './components/VideoPlayer'
import SavedVideosTab from './components/SavedVideosTab'
import NotFoundTab from './components/NotFound'
import ThemeAndVideoContext from './context/ThemeAndVideoContext'

// Replace your code here

const tabID = {
  home: 'HOME',
  gaming: 'GAMING',
  trending: 'TRENDING',
  save: 'SAVEDVIDEOS',
}

class App extends Component {
  state = {isDark: false, savedVideos: [], activeTab: tabID.home}

  onChangeTabId = value => {
    this.setState({activeTab: value})
  }

  onAddVideo = details => {
    const {savedVideos} = this.state
    if (savedVideos.length === 0) {
      this.setState({savedVideos: [...savedVideos, details]})
      console.log('new item saved')
    } else {
      const index = savedVideos.findIndex(each => each.id === details.id)
      if (index === -1) {
        this.setState({savedVideos: [...savedVideos, details]})
        console.log('checked list new item added')
      } else {
        savedVideos.splice(index, 1)
        this.setState({savedVideos})
        console.log('checked list found item removed and added')
      }
    }
  }

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark, savedVideos, activeTab} = this.state
    console.log(savedVideos)
    return (
      <ThemeAndVideoContext.Provider
        value={{
          isDark,
          toggleTheme: this.changeTheme,
          addVideo: this.onAddVideo,
          savedVideos,
          changeTab: this.onChangeTabId,
          activeTab,
        }}
      >
        <Switch>
          <ProtectedRouter exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <ProtectedRouter exact path="/trending" component={TrendingTab} />
          <ProtectedRouter exact path="/gaming" component={GamingTab} />
          <ProtectedRouter exact path="/videos/:id" component={VideoPlayer} />
          <ProtectedRouter
            exact
            path="/saved-videos"
            component={SavedVideosTab}
          />
          <Route exact path="/not-found" component={NotFoundTab} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}

export default App
