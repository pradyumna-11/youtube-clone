import {Link} from 'react-router-dom'
import {
  GamingCardItem,
  GamingCardItemImage,
  GamingCardItemTitle,
  GamingCardItemViewCount,
} from './styledComponents'
import './index.css'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const GamingCard = props => {
  const {gamingCardDetails} = props
  const {id, thumbnail, viewCount, title} = gamingCardDetails
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <GamingCardItem>
            <Link to={`/videos/${id}`} className="link-style">
              <GamingCardItemImage src={thumbnail} alt="video thumbnail" />
              <GamingCardItemTitle isDark={isDark}>{title}</GamingCardItemTitle>
              <GamingCardItemViewCount>
                {viewCount} Watching Worldwide
              </GamingCardItemViewCount>
            </Link>
          </GamingCardItem>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default GamingCard
