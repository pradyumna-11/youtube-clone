import styled from 'styled-components'

export const Navbar = styled.nav`
  height: 10vh;
  width: 100%;
  max-width: 1800px;
`

export const NavLogo = styled.img`
  height: 32px;
  width: 120px;
`

export const LargeContainer = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isDark === true ? '#313131' : '#ffffff')};
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LargeInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: auto;
`

export const ThemeButton = styled.button`
  cursor: pointer;
  outline: none;
  height: 35px;
  width: 40px;
  background-color: transparent;
  border-width: 0px;
  font-size: 0px;
  margin-right: 15px;
`

export const Profile = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 5px;
`

export const LogoutButton = styled.button`
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
  background-color: transparent;
  border-color: ${props => (props.isDark === true ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.isDark === true ? '#ffffff' : '#3b82f6')};
  font-size: 17px;
  text-align: center;
  padding: 6px;
  font-family: 'Roboto';
  height: 38px;
  width: 100px;
  cursor: pointer;
  margin-left: 15px;
  outline: none;
`

export const LogoutContainer = styled.div`
  height: 20vh;
  width: 400px;
  background-color: #424242;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`
export const LogoutPrompt = styled.p`
  color: #ffffff;
  font-size: 17px;
  font-family: 'Roboto';

  margin-bottom: 5px;
`

export const LogoutButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin-top: 10px;
`

export const CancelButton = styled.button`
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  border-color: #e2e8f0;
  color: #cbd5e1;
  font-size: 15px;
  font-family: 'Roboto';
  text-align: center;
  padding: 6px;
  height: 35px;
  width: 100px;
  background-color: transparent;
  outline: none;
`
export const ConfirmButton = styled.button`
  border-radius: 6px;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  text-align: center;
  padding: 5px;
  height: 35px;
  width: 100px;
  border-width: 0px;
  outline: none;
`

export const SmallNavbar = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => (props.isDark === true ? '#313131' : '#ffffff')};
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MenuButton = styled.button`
  height: 30px;
  width: 30px;
  background-color: transparent;
  margin-right: 5px;
  cursor: pointer;
  outline: none;
  font-size: 0px;
  border-width: 0px;
`

export const OptionsPopup = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => (props.isDark ? '#000000' : '#f4f4f4')};
`

export const CloseButton = styled.button`
  height: 30px;
  width: 30px;
  background-color: transparent;
  border-width: 0px;
  margin-left: auto;
  font-size: 0px;
  align-self: flex-end;
`

export const InnerOptions = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NavItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 150px;
  background-color: ${props => props.bgColor};
`

export const NavOptionsContent = styled.p`
  color: #cccccc;
  font-size: 16px;
  font-family: 'Roboto';
  margin-left: 5px;
`

export const SmallLogout = styled.button`
  height: 30px;
  width: 30px;
  font-size: 0px;
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  outline: none;
  margin-left: 15px;
`
