import Header from '../Header'
import Navigator from '../Navigator'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  NotFoundBgContainer,
  NotFoundContainer,
  NotFoundContentsContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDescription,
} from './StyledComponents'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDark} = value
      const imageUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <NotFoundBgContainer isDark={isDark}>
          <Header />
          <NotFoundContainer>
            <Navigator />
            <NotFoundContentsContainer>
              <NotFoundImg src={imageUrl} alt="not found" />
              <NotFoundHeading isDark={isDark}>Page Not Found</NotFoundHeading>
              <NotFoundDescription isDark={isDark}>
                we are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContentsContainer>
          </NotFoundContainer>
        </NotFoundBgContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NotFound
