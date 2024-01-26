import styled from 'styled-components'

export const VideoPlayerContainer = styled.div`
  min-height: 100vh;
  max-height: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const VideoPlayerInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: transparent;
  width: 100%;
  margin-top: -14px;
`

export const VideoPlayerInnerContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

export const VideoPlayerTitle = styled.p`
  font-size: 17px;
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
  font-family: 'Roboto';
  margin-top: 15px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    padding-left: 20px;
  }
`

export const VideoPlayerVideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 9px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 20px;
  }
`

export const VideoPlayerViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const VideoPlayerVideoViews = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: #64748b;
  margin-right: 3px;
`

export const Dot = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: #64748b;
  margin-right: 4px;
`

export const SocialMediaButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 80%;
  }
`

export const SocialMediaButton = styled.button`
  height: 37px;
  width: 90px;
  background-color: transparent;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  border-width: 0px;
  cursor: pointer;
  outline: none;
  color: ${props => props.color};
  margin-right: 5px;
  @media screen and (max-width: 576px) {
    width: 80px;
  }
`

export const VideoPlayerLine = styled.hr`
  border-style: solid;
  border-width: 2px;
  width: 100%;
  border-color: #cbd5e1;
  @media screen and (max-width: 768px) {
    width: 94%;
  }
`

export const VideoPlayerVideoProfileAndDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 20px;
`

export const VideoPlayerChannelProfileImg = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 15px;
`

export const VideoPlayerNameAndSubscribers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: -10px;
  margin-left: 7px;
`

export const VideoPlayerChannelName = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  margin-bottom: 3px;
`

export const VideoPlayerChannelSubscribers = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: #7e858e;
`

export const VideoPlayerDescription = styled.p`
  padding-left: 70px;
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
  @media screen and (max-width: 768px) {
    padding-left: 20px;
  }
`
export const VideoPlayerFailureContainer = styled.div`
  height: 60vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
`

export const VideoPlayerFailureImg = styled.img`
  height: 35vh;
  width: 350px;
`

export const VideoPlayerFailureHeading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#00306e')};
  margin-top: 15px;
  margin-bottom: 6px;
`

export const VideoPlayerFailureContext1 = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: #7e858e;
  margin-bottom: 2px;
`

export const VideoPlayerFailureContext2 = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: #7e858e;
  margin-bottom: 8px;
`

export const VideoPlayerRetryButton = styled.button`
  height: 38px;
  width: 90px;
  padding: 8px;
  text-align: center;
  font-size: 15px;
  font-family: 'Roboto';
  color: #ffffff;
  background-color: #4f46e5;
  cursor: pointer;
  outline: none;
  border-width: 0px;
  border-radius: 6px;
`
