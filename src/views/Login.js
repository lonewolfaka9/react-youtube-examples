import React, { Component } from 'react'
//import AppHeader from '../components/AppHeader';
import cookie from 'react-cookies'

import { observable } from 'mobx';
  
class loginStore {
  @observable username = "";
  @observable password ="";
}

  class Login extends Component {

  constructor(props) {
    super(props);

   
  

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentWillMount() {
    var authCookieValue = cookie.load("auth");// should be replaced by auth token
    if (authCookieValue === undefined) {
      authCookieValue = false;
    } else {
      authCookieValue = JSON.parse(authCookieValue);
    }
    let userAuth = authCookieValue;
    if (authCookieValue) { this.props.history.push("/search") };

  }

  handleChange(event) {
    const { id, value } = event.target;
    this[id] = value;
    console.log(this.username, value);

  }

  handleSubmit() {
    const { username, password } = this;
      // hard coded auth logic
    if (username === "admin" && password === "password") {
      cookie.save("auth", true);
      this.props.history.push("/search")
    } else {
      window.confirm('Invalid Credentials')
    }
  }

  render() {

    const { username, password } = this;
    return (

      <div className="loginForm">
        <form>
          <fieldset>
            <div className="form-group">
              <label >Username</label>
              <input type="text" id="username" placeholder="Username" onChange={this.handleChange} value={username} />
              <label >Password</label>
              <input type="password" id="password" placeholder="Password" onChange={this.handleChange} value={password} />
              <input id="submit" type="button" value="Login" onClick={this.handleSubmit} />
            </div>
          </fieldset>
        </form>
      </div>

    )
  }
}

export default Login;
