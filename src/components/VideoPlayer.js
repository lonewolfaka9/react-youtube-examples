import React, { Component, PropTypes } from 'react'

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

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

        this.setState({ videoData: nextProps.videoData }, () => { });
    }







    render() {
        //   const videoData =this.state.videoData;
        return (
            <div>

                <h5>{this.state.videoData.title}</h5>
                <div className="videoWrapper">
                    <iframe src={`https://www.youtube.com/embed/${this.state.videoData.videoId}`}
                        frameBorder='0'
                        allow='autoplay; encrypted-media'

                        title={this.state.videoData.title}
                        width="400px" height="300px" />
                </div>
                <p>{this.state.videoData.description}</p>
            </div>
        )
    }
}

VideoPlayer.propTypes = {

}

export default VideoPlayer