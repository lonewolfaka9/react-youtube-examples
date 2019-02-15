import React, { Component } from 'react'
import AppHeader from '../components/AppHeader';
import cookie from 'react-cookies'
export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userAuth: null,
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

      console.log("cookie value " + authCookieValue);
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
       window.confirm('Invalid Credentials')    }
  }
  render() {
    return (

      <div >
        <div style={{
          minWidth: 320,
          maxWidth: 500,
          position: "absolute",
          margin: "auto",
          top: "20%",
          right: 0,
          bottom: 0,
          left: 0,
        }}>

          <form>
            <fieldset>
              <legend>Login here</legend>
              <label >Username</label>
              <br />

              <input style={{display:"table-cell", width:"100%"}} type="text" id="username" placeholder="Username" onChange={this.handleChange} value={this.state.username} />
              <br />

              <label >Password</label>
              <br />

              <input style={{display:"table-cell", width:"100%"}} type="password" id="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
              <br />

              <input type="button" value="Login" onClick={this.handleSubmit} />
            </fieldset>
          </form>
        </div>

      </div>
    )
  }
}
