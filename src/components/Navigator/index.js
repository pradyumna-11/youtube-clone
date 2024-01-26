import {Link} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'
import {IoMdHome} from 'react-icons/io'
import {RiMenuAddLine} from 'react-icons/ri'
import {IoGameController} from 'react-icons/io5'
import './index.css'
import {
  NavigatorContainer,
  NavigationItemsContainer,
  NavigationItem,
  NavigationItemButton,
  ItemButtonText,
  ContactUsContainer,
  ContactUsText,
  MediaContainer,
  MediaImage,
  EnjoyText,
  NavigatorMainContainer,
} from './StyledComponents'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const navigatorConstTabStatus = {
  home: 'HOME',
  gaming: 'GAMING',
  trending: 'TRENDING',
  save: 'SAVEDVIDEOS',
}

const Navigator = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDark, activeTab, changeTab} = value
      const isHomeActive = activeTab === 'HOME'
      const isTrendingActive = activeTab === 'TRENDING'
      const isGamingActive = activeTab === 'GAMING'
      const isSavedVideosActive = activeTab === 'SAVEDVIDEOS'
      const getBgColor = isActive => {
        if (isActive) {
          if (isDark) {
            return '#424242'
          }
          return '#f1f5f9'
        }
        return 'transparent'
      }
      const clickedHomeTab = () => {
        changeTab(navigatorConstTabStatus.home)
      }

      const clickedTrendingTab = () => {
        changeTab(navigatorConstTabStatus.trending)
      }

      const clickedGamingTab = () => {
        changeTab(navigatorConstTabStatus.gaming)
      }

      const clickedSavedTab = () => {
        changeTab(navigatorConstTabStatus.save)
      }

      return (
        <NavigatorMainContainer isDark={isDark}>
          <NavigatorContainer>
            <NavigationItemsContainer>
              <Link className="link-style" to="/">
                <NavigationItem
                  isDark={isDark}
                  bgColor={getBgColor(isHomeActive)}
                >
                  <NavigationItemButton type="button" onClick={clickedHomeTab}>
                    a
                    <IoMdHome
                      color={isHomeActive ? '#ff0000' : '#7e858e'}
                      size={20}
                    />
                    <ItemButtonText isDark={isDark}>Home</ItemButtonText>
                  </NavigationItemButton>
                </NavigationItem>
              </Link>

              <Link className="link-style" to="/trending">
                <NavigationItem
                  isDark={isDark}
                  bgColor={getBgColor(isTrendingActive)}
                >
                  <NavigationItemButton
                    type="button"
                    onClick={clickedTrendingTab}
                  >
                    a
                    <HiFire
                      color={isTrendingActive ? '#ff0000' : '#7e858e'}
                      size={20}
                    />
                    <ItemButtonText isDark={isDark}>Trending</ItemButtonText>
                  </NavigationItemButton>
                </NavigationItem>
              </Link>

              <Link className="link-style" to="/gaming">
                <NavigationItem
                  isDark={isDark}
                  bgColor={getBgColor(isGamingActive)}
                >
                  <NavigationItemButton
                    type="button"
                    onClick={clickedGamingTab}
                  >
                    a
                    <IoGameController
                      color={isGamingActive ? '#ff0000' : '#7e858e'}
                      size={20}
                    />
                    <ItemButtonText isDark={isDark}>Gaming</ItemButtonText>
                  </NavigationItemButton>
                </NavigationItem>
              </Link>

              <Link className="link-style" to="/saved-videos">
                <NavigationItem
                  isDark={isDark}
                  bgColor={getBgColor(isSavedVideosActive)}
                >
                  <NavigationItemButton type="button" onClick={clickedSavedTab}>
                    a
                    <RiMenuAddLine
                      color={isSavedVideosActive ? '#ff0000' : '#7e858e'}
                      size={20}
                    />
                    <ItemButtonText isDark={isDark}>
                      Saved videos
                    </ItemButtonText>
                  </NavigationItemButton>
                </NavigationItem>
              </Link>
            </NavigationItemsContainer>
            <ContactUsContainer>
              <ContactUsText isDark={isDark}>CONTACT US</ContactUsText>
              <MediaContainer>
                <MediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <MediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <MediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </MediaContainer>
              <EnjoyText isDark={isDark}>
                Enjoy! Now to see your channels and recommendations!
              </EnjoyText>
            </ContactUsContainer>
          </NavigatorContainer>
        </NavigatorMainContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default Navigator
