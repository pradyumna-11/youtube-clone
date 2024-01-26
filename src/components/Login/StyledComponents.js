import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#313131' : '#ffffff')};
`

export const Form = styled.form`
  height: 50vh;
  min-width: 450px;
  max-width: 50%;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: auto;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  padding-top: 50px;
  padding-bottom: 20px;
  padding-left: 45px;
  padding-right: 45px;
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    min-width: 85%;
    margin: 10px;
    padding-left: 15px;
    padding-right: 15px;
  }
`

export const Logo = styled.img`
  height: 45px;
  width: 170px;
  margin-bottom: 40px;
  align-self: center;
  @media screen and (max-width: 768px) {
    width: 120px;
    height: 35px;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 100%;
`

export const Label = styled.label`
  font-size: 11px;
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#616e7c')};
  margin-bottom: 3px;
  font-weight: bold;
`

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  color: #64748b;
  font-size: 15px;
  font-family: 'Roboto';
  border-width: 2px;
  border-color: #e2e8f0;
  border-style: solid;
  background-color: transparent;
`

export const CheckBox = styled.input`
  margin-right: 5px;
  border-radius: 8px;
  height: 19px;
  width: 19px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
  margin-top: -5px;
`

export const CheckLabel = styled.label`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-size: 18px;
  font-family: 'Roboto';
  margin-left: 5px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const LoginButton = styled.button`
  height: 38px;
  width: 100%;
  font-size: 17px;
  color: #ffffff;
  text-align: center;
  border-radius: 8px;
  border-width: 0px;
  cursor: pointer;
  outline: none;
  background-color: #3b82f6;
  padding: 6px;
  font-family: 'Roboto';
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 18px;
  margin-top: 15px;
  font-family: 'Roboto';
`
