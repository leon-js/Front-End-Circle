import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
// import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'

@inject('UserStore')
@observer
class Login extends Component {

  setUser() {
    const { UserStore, history } = this.props
    UserStore.signIn()
    history.push('/')
  }

  login() {
    localStorage.setItem('login', 1)
    this.setUser()
  }

  logout() {
    localStorage.removeItem('login')
  }

  render() {

    return (
      <Fragment>
        <p>Login</p>
        <Link to="/">goHome</Link>
        <button onClick={this.login}>登陆</button>
        <button onClick={this.logout}>退出</button>
      </Fragment>
    )
  }
}

export default Login