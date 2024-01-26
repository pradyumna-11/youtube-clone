import styled from 'styled-components'

export const GamingTabBgContainer = styled.div`
  min-height: 100vh;
  max-height: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const GamingTabContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: -20px;
`

export const GamingTabInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

export const GamingTabTopContainer = styled.div`
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
export const GamingTabHeading = styled.h1`
  font-size: 28px;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  margin-left: 17px;
`

export const GamingTabVideosContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: transparent;
  @media screen and (max-width: 576px) {
    padding: 0px;
    justify-content: space-around;
  }
  @media screen and (min-width: 576px) {
    padding-left: 15px;
    padding-right: 0px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 35px;
  }
`

export const GamingFailureContainer = styled.div`
  height: 60vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
`

export const GamingFailureImg = styled.img`
  height: 35vh;
  width: 350px;
`

export const GamingFailureHeading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#00306e')};
  margin-top: 15px;
  margin-bottom: 6px;
`

export const GamingFailureContext1 = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: #7e858e;
  margin-bottom: 2px;
`

export const GamingFailureContext2 = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: #7e858e;
  margin-bottom: 8px;
`

export const GamingRetryButton = styled.button`
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
