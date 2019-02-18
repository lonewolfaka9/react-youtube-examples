import React, { Component } from 'react'

class VideoPlayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoData: []
        };

    }

    componentWillMount() {
        this.setState({ videoData: this.props.videoData }, () => { });
    }



    componentWillReceiveProps(nextProps) {
        this.setState({ videoData: nextProps.videoData }, () => { });
    }


    render() {
          const {title,videoId,thumbnail,description} = this.state.videoData;
          console.log("title",title);
        return (
            <div>
                <h5>{title}</h5>
                <div className="videoWrapper">
                    <iframe src={`https://www.youtube.com/embed/${videoId}`}
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        title={title} />
                </div>
                <p>{description}</p>
            </div>
        )
    }
}

 

export default VideoPlayer