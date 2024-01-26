import {Component} from 'react'

import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'

import {
  IoMenu,
  IoClose,
  IoGameController,
  IoSunnyOutline,
} from 'react-icons/io5'
import {RiMenuAddLine} from 'react-icons/ri'
import {IoMdHome} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {HiFire} from 'react-icons/hi'

import './index.css'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  Navbar,
  NavLogo,
  LargeContainer,
  ThemeButton,
  Profile,
  LogoutButton,
  LogoutContainer,
  LogoutPrompt,
  LogoutButtonsContainer,
  CancelButton,
  ConfirmButton,
  SmallNavbar,
  MenuButton,
  OptionsPopup,
  CloseButton,
  InnerOptions,
  NavOptions,
  NavItem,
  NavOptionsContent,
  SmallLogout,
  LargeInner,
} from './StyledComponents'

const navigatorConstTabStatus = {
  home: 'HOME',
  gaming: 'GAMING',
  trending: 'TRENDING',
  save: 'SAVEDVIDEOS',
}

class Header extends Component {
  logoutUser = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDark, toggleTheme, changeTab, activeTab} = value
          const NavLogoUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const IconColor = isDark ? '#ffffff' : '#000000'
          const changeTheme = () => {
            toggleTheme()
          }
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
            <Navbar>
              <LargeContainer isDark={isDark}>
                <Link to="/" className="link-style">
                  <NavLogo src={NavLogoUrl} alt="website logo" />
                </Link>

                <LargeInner>
                  <ThemeButton
                    type="button"
                    onClick={changeTheme}
                    data-testid="theme"
                  >
                    a
                    {isDark === true ? (
                      <IoSunnyOutline color={IconColor} size={20} />
                    ) : (
                      <FaMoon color={IconColor} size={20} />
                    )}
                  </ThemeButton>
                  <Profile
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <Popup
                    modal
                    trigger={
                      <LogoutButton type="button" isDark={isDark}>
                        Logout
                      </LogoutButton>
                    }
                  >
                    {close => (
                      <>
                        <LogoutContainer>
                          <LogoutPrompt>
                            Are you sure, you want to logout
                          </LogoutPrompt>
                          <LogoutButtonsContainer>
                            <CancelButton type="button" onClick={() => close()}>
                              Cancel
                            </CancelButton>
                            <ConfirmButton
                              type="button"
                              onClick={this.logoutUser}
                            >
                              Confirm
                            </ConfirmButton>
                          </LogoutButtonsContainer>
                        </LogoutContainer>
                      </>
                    )}
                  </Popup>
                </LargeInner>
              </LargeContainer>

              <SmallNavbar isDark={isDark}>
                <NavLogo src={NavLogoUrl} alt="logo" />
                <LargeInner>
                  <ThemeButton
                    type="button"
                    onClick={changeTheme}
                    data-testid="theme"
                  >
                    a
                    {isDark === true ? (
                      <IoSunnyOutline color={IconColor} size={20} />
                    ) : (
                      <FaMoon color={IconColor} size={20} />
                    )}
                  </ThemeButton>
                  <Popup
                    modal
                    trigger={
                      <MenuButton type="button">
                        a<IoMenu color={IconColor} size={20} />
                      </MenuButton>
                    }
                  >
                    {close => (
                      <>
                        <OptionsPopup isDark={isDark}>
                          <CloseButton type="button" onClick={() => close()}>
                            a<IoClose color={IconColor} size={20} />
                          </CloseButton>
                          <InnerOptions>
                            <NavOptions>
                              <Link to="/" className="link-style">
                                <NavItem
                                  onClick={clickedHomeTab}
                                  bgColor={getBgColor(isHomeActive)}
                                >
                                  <IoMdHome
                                    color={isHomeActive ? '#ff0000' : '#7e858e'}
                                  />
                                  <NavOptionsContent>Home</NavOptionsContent>
                                </NavItem>
                              </Link>
                              <Link to="/trending" className="link-style">
                                <NavItem
                                  onClick={clickedTrendingTab}
                                  bgColor={getBgColor(isTrendingActive)}
                                >
                                  <HiFire
                                    color={
                                      isTrendingActive ? '#ff0000' : '#7e858e'
                                    }
                                  />
                                  <NavOptionsContent>
                                    Trending
                                  </NavOptionsContent>
                                </NavItem>
                              </Link>
                              <Link to="/gaming" className="link-style">
                                <NavItem
                                  onClick={clickedGamingTab}
                                  bgColor={getBgColor(isGamingActive)}
                                >
                                  <IoGameController
                                    color={
                                      isGamingActive ? '#ff0000' : '#7e858e'
                                    }
                                  />
                                  <NavOptionsContent>Gaming</NavOptionsContent>
                                </NavItem>
                              </Link>
                              <Link to="/saved-videos" className="link-style">
                                <NavItem
                                  onClick={clickedSavedTab}
                                  bgColor={getBgColor(isSavedVideosActive)}
                                >
                                  <RiMenuAddLine
                                    color={
                                      isSavedVideosActive
                                        ? '#ff0000'
                                        : '#7e858e'
                                    }
                                  />
                                  <NavOptionsContent>
                                    Saved videos
                                  </NavOptionsContent>
                                </NavItem>
                              </Link>
                            </NavOptions>
                          </InnerOptions>
                        </OptionsPopup>
                      </>
                    )}
                  </Popup>
                  <Popup
                    modal
                    trigger={
                      <SmallLogout type="button" isDark={isDark}>
                        a<FiLogOut color={IconColor} size={20} />
                      </SmallLogout>
                    }
                  >
                    {close => (
                      <>
                        <LogoutContainer>
                          <LogoutPrompt>
                            Are you sure, you want to logout
                          </LogoutPrompt>
                          <LogoutButtonsContainer>
                            <CancelButton type="button" onClick={() => close()}>
                              Cancel
                            </CancelButton>
                            <ConfirmButton
                              type="button"
                              onClick={this.logoutUser}
                            >
                              Confirm
                            </ConfirmButton>
                          </LogoutButtonsContainer>
                        </LogoutContainer>
                      </>
                    )}
                  </Popup>
                </LargeInner>
              </SmallNavbar>
            </Navbar>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default withRouter(Header)
