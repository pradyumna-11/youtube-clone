import styled from 'styled-components'

export const VideoListItem = styled.li`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style-type: none;
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-bottom: 5px;
  }
  @media screen and (min-width: 576px) {
    width: 45%;
    margin: 5px;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
    margin: 5px;
  }
`

export const VideoThumbnail = styled.img`
  height: 200px;
  width: 100%;
`

export const VideoListItemBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 8px;
  padding-top: 10px;
  padding-left: 8px;

  padding-right: 8px;
`
export const ChannelProfileLogo = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 10px;
`

export const VideoItemContentContainer = styled.div`
  padding: 0px;
  margin-left: 8px;
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: flex-start;
`
export const VideoTitle = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  font-size: 14px;
  margin-bottom: 3px;
  padding-top: 0px;
  margin-top: 0px;
`

export const ChannelAndViewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
`

export const ChannelName = styled.p`
  color: #94a3b8;
  font-size: 14px;
  font-family: 'Roboto';
  margin-bottom: 4px;
  @media screen and (max-width: 576px) {
    margin-bottom: 0px;
    padding: 0px;
    margin-top: -4px;
  }
`

export const VideoDateAndViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  @media screen and (max-width: 576px) {
    margin-left: 8px;
  }
`

export const VideoViews = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 12px;
  margin-right: 2px;
`
export const Dot = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  align-self: center;
  font-weight: bold;
  margin-right: 5px;
  margin-left: 5px;
`
