import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  BgContainer,
  Form,
  Logo,
  InputsContainer,
  Label,
  Input,
  CheckBox,
  CheckboxContainer,
  CheckLabel,
  LoginButton,
  ErrorMsg,
} from './StyledComponents'

class Login extends Component {
  state = {username: '', password: '', isChecked: false, errMsg: ''}

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changeCheckButton = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const details = {username, password}
    const options = {method: 'POST', body: JSON.stringify(details)}
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errMsg: data.error_msg})
    }
  }

  render() {
    const {username, password, isChecked, errMsg} = this.state
    console.log(errMsg)
    const type = isChecked ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDark} = value
          const loginLogoUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <BgContainer isDark={isDark}>
              <Form onSubmit={this.submitForm} isDark={isDark}>
                <Logo src={loginLogoUrl} alt="website logo" />
                <InputsContainer>
                  <Label htmlFor="username">USERNAME</Label>
                  <Input
                    placeholder="Username"
                    id="username"
                    type="text"
                    value={username}
                    onChange={this.changeUsername}
                  />
                </InputsContainer>
                <InputsContainer>
                  <Label htmlFor="password">PASSWORD</Label>
                  <Input
                    placeholder="Password"
                    id="password"
                    type={type}
                    value={password}
                    onChange={this.changePassword}
                  />
                </InputsContainer>
                <CheckboxContainer>
                  <CheckBox
                    id="show"
                    type="checkbox"
                    onChange={this.changeCheckButton}
                  />
                  <CheckLabel htmlFor="show" isDark={isDark}>
                    Show Password
                  </CheckLabel>
                </CheckboxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {errMsg !== '' ? <ErrorMsg>{`*${errMsg}`}</ErrorMsg> : ''}
              </Form>
            </BgContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Login
