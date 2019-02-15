import React, { Component } from 'react'

export default class AppHeader extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: "",
      suggestionArray: []// array of suggestion key word
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleChange(event) {

    var query = event.target.value;
    this.setState({ query: query }, () => {
      // fetch suggestion api here
    });

  }
  handleSubmit(event) {

    var query = this.state.query;
    query = query.trim();

    if (event.key === 'Enter' && query.length > 0) {
      this.props.queryString(query);

    }
  }
  render() {
    return (
      <div style={
        {
          height: 50,
          background: "#F0F0F0",
          border: "opx solid #CCC",
          minWidth: "100vW",
          margin: "0px",
          textAlign: "cetner",
          position: "fixed",
          top:0
        }
      }>
        <input style={{
          display: "flex",
          minWidth: 300,
          height: "80%",
          margin: "0 auto",
          fontSize: 16
        }}
          type="text" id="search" placeholder="search" value={this.state.query}
          onChange={this.handleChange} onKeyPress={this.handleSubmit} />
      </div>
    )
  }
}
