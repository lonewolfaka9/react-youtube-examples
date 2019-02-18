import React, { Component } from 'react'
//import AppHeader from '../components/AppHeader';
import cookie from 'react-cookies'
export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userAuth: false,
      username: "",
      password: ""
    };

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
    this.setState({ userAuth: authCookieValue }, () => {

      //console.log("cookie value " + authCookieValue);
      if (authCookieValue) { this.props.history.push("/search") };

    });

  }


  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value }, () => {

      // validation
    })

  }

  handleSubmit() {

    if (this.state.username === "admin" && this.state.password === "password") {
      cookie.save("auth", true);
      this.props.history.push("/search")
    } else {
      window.confirm('Invalid Credentials')
    }
  }
  render() {
    return (

         <div className="loginForm">

          <form>
            <fieldset>
            <div className="form-group">
              <label >Username</label>
              <input type="text" id="username" placeholder="Username"  onChange={this.handleChange} value={this.state.username} />
              <label >Password</label>
              <input type="password" id="password" placeholder="Password"  onChange={this.handleChange} value={this.state.password} />
              <input id="submit" type="button" value="Login" onClick={this.handleSubmit} />
            </div>
             </fieldset>
          </form>
        </div>

     )
  }
}
