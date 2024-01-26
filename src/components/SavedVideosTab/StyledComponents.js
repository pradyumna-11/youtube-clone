import styled from 'styled-components'

export const SavedBgContainer = styled.div`
  min-height: 100vh;
  max-height: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const SavedContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: -20px;
`

export const SavedInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

export const SavedTopContainer = styled.div`
  height: 20vh;
  width: 100%;
  background-color: ${props => (props.isDark ? '#212121' : '#f1f1f1')};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 50px;
  @media screen and (max-width: 768px) {
    height: 10vh;
    padding: 20px;
  }
`
export const SavedHeading = styled.h1`
  font-size: 28px;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  margin-left: 17px;
`

export const SavedVideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: transparent;
  @media screen and (max-width: 576px) {
    padding: 0px;
  }
  @media screen and (min-width: 576px) {
    padding: 0px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 35px;
  }
`

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80vh;
  background-color: transparent;
  width: 100%;
`

export const NoVideosImg = styled.img`
  height: 50%;
  width: 350px;
  @media screen and (max-width: 576px) {
    width: 80%;
  }
`

export const NoVideosHeading = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-size: 20px;
  font-family: 'Roboto';
  margin-top: 8px;
  margin-bottom: 8px;
`

export const NoVideosDescription = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#94a3b8')};
`
