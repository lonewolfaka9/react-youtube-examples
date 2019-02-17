import React, { Component } from 'react'

export default class SideBarItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
    
    };


this.loadVideo = this.loadVideo.bind(this);

  }
  loadVideo(){

    this.props.onClick(this.props.videoData);

  }

  componentWillMount() {


  }
  render() {
    const data = this.props.videoData;
    return (

      <div style={{boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        "transition": "0.3s",margin:10
       }}
       
       onClick = {this.loadVideo}>
        <img src={data.thumbnail} alt={data.title} width={"100%"}  />
        <div style={{  "padding": "2px 16px" ,fontSize: "0.9em"}}>
          <h4> {data.title}</h4>
        </div>
      </div>



    )
  }
}
