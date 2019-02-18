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

    let query = event.target.value;
    this.setState({ query: query }, () => {
      // fetch suggestion api here
    });

  }
  handleSubmit(event) {
    let query = this.state.query;
    query = query.trim();
    if (event.key === 'Enter' && query.length > 0) {
      this.props.queryString(query);
    }
  }
  render() {
    return (
      <div className="appHeader">
        <input  type="text" id="search" placeholder="type something and press 'Enter'" value={this.state.query} onChange={this.handleChange} onKeyPress={this.handleSubmit} />
      </div>
    )
  }
}
