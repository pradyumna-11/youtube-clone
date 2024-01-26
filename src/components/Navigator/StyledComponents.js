import styled from 'styled-components'

export const NavigatorMainContainer = styled.div`
  height: 100%;
  width: 250px;
  padding: 0px;
  background-color: ${props => (props.isDark ? '#313131' : '#ffffff')};
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavigatorContainer = styled.div`
  height: 95vh;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 30px;
  background-color: transparent;
`

export const NavigationItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 0px;
  margin-top: 0px;
  background-color: transparent;
`

export const NavigationItem = styled.li`
  width: 250px;
  padding-left: 15px;
  list-style-type: none;
  padding-top: 10px;
  background-color: ${props => props.bgColor};
`

export const NavigationItemButton = styled.button`
  background-color: transparent;
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 0px;
  border-width: 0px;
  cursor: pointer;
  outline: none;
`

export const ItemButtonText = styled.p`
  color: ${props => (props.isDark ? '#909090' : '#313131')};
  font-size: 15px;
  font-family: 'Roboto';
  margin-left: 20px;
`

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 20px;
`

export const ContactUsText = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-size: 18px;
  font-family: 'Roboto';
  margin-bottom: 13px;
  font-weight: bold;
`

export const MediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
`

export const MediaImage = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 5px;
`

export const EnjoyText = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#475569')};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 19px;
  margin-top: 7px;
`
