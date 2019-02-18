import React, { Component } from 'react'

export default class SideBarItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };// initialize state here 
    this.loadVideo = this.loadVideo.bind(this);
  }
  
  loadVideo() {
    this.props.onClick(this.props.videoData);
  }
  
  render() {
    const data = this.props.videoData;
    return (
            <div className="sidebarItem" onClick={this.loadVideo}>
              <img src={data.thumbnail} alt={data.title} />
              <div >
                 <h4> {data.title}</h4>
              </div>
            </div>
    )
  }
}
