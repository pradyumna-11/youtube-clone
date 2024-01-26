import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  min-height: 100vh;
  max-height: 100%;
  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};
`

export const HomeContentsBg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: -20px;
`

export const HomeInnerSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

export const BannerContainer = styled.div`
  background-image: URL('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 30vh;
  width: 100%;
  background-size: cover;
  display: ${props => (props.showBanner ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 5px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const BannerInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  padding-top: 10px;
  width: 350px;
  @media screen and (max-width: 768px) {
    min-width: 160px;
    max-width: 50%;
  }
`

export const BannerLogo = styled.img`
  height: 35px;
  width: 140px;
`

export const BannerContext = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 18px;
  margin-top: 25px;
  margin-bottom: 35px;
`

export const BannerButton = styled.button`
  height: 38px;
  width: 150px;
  padding: 6px;
  text-align: center;

  border-width: 1px;
  border-style: solid;
  border-color: #000000;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 19px;
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 5px;
`

export const BannerCloseButton = styled.button`
  height: 30px;
  width: 30px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  font-size: 0px;
  border-width: 0px;
`

export const HomeBottomSection = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  padding-top: 20px;
  padding-left: 25px;
  width: 100%;
  @media screen and (max-width: 576px) {
    padding-left: 0px;
  }
`

export const HomeSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  padding: 0px;
  @media screen and (max-width: 576px) {
    width: 90%;
    margin-left: 10px;
    margin-right: 5px;
  }
  @media screen and (min-width: 576px) {
    width: 70%;
  }
  @media screen and (min-width: 768px) {
    min-width: 500px;
    max-width: 45%;
  }
`

export const SearchInput = styled.input`
  width: 90%;
  padding: 8px;
  background-color: ${props => (props.isDark ? 'transparent' : '#ffffff')};
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  border-width: 1px;
  border-style: solid;
  outline: none;
`
export const HomeSearchButton = styled.button`
  height: 100%;
  width: 80px;
  background-color: ${props => (props.isDark ? '#606060' : '#ebebeb')};
  border-width: 1px;
  border-style: solid;
  padding: 6px;
  text-align: center;
  font-size: 0px;
`
export const HomeVideosContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const HomeFailureContainer = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
`

export const HomeFailureImg = styled.img`
  height: 35vh;
  width: 350px;
`

export const HomeFailureHeading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#00306e')};
  margin-top: 15px;
  margin-bottom: 6px;
`

export const HomeFailureContext1 = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: #7e858e;
  margin-bottom: 2px;
`

export const HomeFailureContext2 = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: #7e858e;
  margin-bottom: 8px;
`

export const HomeRetryButton = styled.button`
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
export const NoResultContainer = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
`

export const NoResultImg = styled.img`
  height: 35vh;
  width: 350px;
`

export const NoResultHeading = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
  font-size: 18px;
  font-family: 'Roboto';
  margin-top: 15px;
  margin-bottom: 6px;
`

export const NoResultDescription = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  margin-bottom: 5px;
  color: #94a3b8;
`
