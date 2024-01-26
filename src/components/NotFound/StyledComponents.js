import styled from 'styled-components'

export const NotFoundBgContainer = styled.div`
  min-height: 100vh;
  max-height: 100%;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

export const NotFoundContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 90vh;
  background-color: transparent;
  width: 100%;
`

export const NotFoundImg = styled.img`
  height: 50%;
  width: 350px;
  @media screen and (max-width: 576px) {
    width: 80%;
  }
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-size: 20px;
  font-family: 'Roboto';
  margin-top: 8px;
  margin-bottom: 8px;
`

export const NotFoundDescription = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#94a3b8')};
`
