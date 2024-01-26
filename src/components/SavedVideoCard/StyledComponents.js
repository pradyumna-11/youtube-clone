import styled from 'styled-components'

export const SavedCardItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  width: 90%;
  height: 25vh;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: auto;
    margin-left: 0px;
    margin-right: 0px;
    height: 20%;
    width: 100%;
  }
  @media screen and (min-width: 576px) {
    margin-left: 15px;
    margin-bottom: 9px;
    width: 95%;
  }
  @media screen and (min-width: 768px) {
    height: 20%;
    margin: 9px;
  }
`

export const SavedCardThumbnail = styled.img`
  height: 100%;
  @media screen and (max-width: 576px) {
    height: 200px;
    width: 100%;
  }
  @media screen and (min-width: 576px) {
    min-width: 50%;
    max-width: 300px;
  }
  @media screen and (min-width: 768px) {
    min-width: 400px;
    max-width: 40%;
  }
`

export const SavedCardWithProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-left: auto;
  @media screen and (min-width: 576px) {
    height: 100%;
  }
`

export const SavedCardChannelProfile = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 8px;
  @media screen and (min-width: 576px) {
    display: none;
    align-self: center;
  }
`

export const SavedCardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  margin-left: 20px;
`

export const SavedCardTitle = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  font-size: 18px;
  font-family: 'Roboto';
  margin-bottom: 4px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

export const SavedCardChannelAndViewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: -10px;
  }
`

export const SavedCardChannelName = styled.p`
  color: #94a3b8;
  font-size: 14px;
  font-family: 'Roboto';
  padding: 0px;
`

export const SmallDot = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  align-self: center;
  font-weight: bold;
  margin-right: 5px;
  margin-left: 5px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const SavedCardViewsAndPublishContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;

  padding: 0px;
  @media screen and (max-width: 576px) {
    margin-top: 0px;
  }
  @media screen and (min-width: 576px) {
    margin-top: -15px;
  }
`

export const SavedCardViews = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 12px;
  margin-right: 2px;
`

export const SavedCardDot = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  align-self: center;
  font-weight: bold;
  margin-right: 5px;
  margin-left: 5px;
`
