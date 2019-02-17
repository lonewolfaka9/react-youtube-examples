import React, { Component } from 'react'
import AppHeader from '../components/AppHeader';
import cookie from 'react-cookies'
import SideBarItem from '../components/SideBarItem';
import VideoPlayer from '../components/VideoPlayer';

export default class SearchDash extends Component {


  constructor(props) {
    super(props);

    this.state = {
      userAuth: false,
      query: "",
      nextPageToken: "",// use this to load next page data
      videoData: [],
      searchData: [],
      loading: "Search Something"
    };

    this.fetchQuery = this.fetchQuery.bind(this);
    this.youtubeRestApiCall = this.youtubeRestApiCall.bind(this);
    this.handleClick = this.handleClick.bind(this);



  }
  componentWillMount() {
    var authCookieValue = cookie.load("auth");// should be replaced by auth token
    if (authCookieValue === undefined) {
      authCookieValue = false;
    } else {
      authCookieValue = JSON.parse(authCookieValue);
    }
    this.setState({ userAuth: authCookieValue }, () => {

      //"cookie value " + authCookieValue);
      if (!authCookieValue) { this.props.history.push("/") };

    });

  }

  fetchQuery(query) {

    this.setState({ query: query, loading: "loading ..." }, () => {
      this.youtubeRestApiCall("", query, this);
    });


  }

  youtubeRestApiCall(pageToken, query, _this) {
    var url = "https://www.googleapis.com/youtube/v3/search?q=" + query + "&maxResults=25&part=snippet&key=AIzaSyB_tfJo8Hb8ZOyLHF0mjcyG0nI1EtERPbc";

    if (pageToken !== "") {
      url += "&pageToken=" + pageToken;
    }

    // console.log(url)
    fetch(url)
      .then((resp) => resp.json()) // Transform the data into json
      .then(function (data) {
        // Create and append the li's to the ul
        //console.log("result ");

        var nextPageToken = data.nextPageToken;
        var array = data.items;
        var searchData = [];

        var videoData = [];
        array.forEach(function (item) {

          if (item.id.kind === "youtube#video") {
            var tempDict = [];
            tempDict["videoId"] = item.id.videoId;
            tempDict["title"] = item.snippet.title;
            tempDict["thumbnail"] = item.snippet.thumbnails.medium.url;
            tempDict["description"] = item.snippet.description;
            //console.log(tempDict);
            searchData.push(tempDict);
          }
        });

        if (searchData.length > 0) {
          videoData = searchData[0];
          // console.log(videoData);
        }

        _this.setState({ nextPageToken: nextPageToken, searchData: searchData, videoData: videoData, loading: "Search Something" }, () => { console.log(_this.state.searchData) });
      }).catch(error => console.error(error));
  }

  handleClick(videoData) {

    this.setState({ videoData: videoData }, () => { console.log(this.state.videoData) });

  }

  render() {
    return (
      <div>
        <AppHeader queryString={this.fetchQuery} />



        <div className="row">
          <div className="col two">
            {Object.keys(this.state.videoData).length > 0
              ? <VideoPlayer videoData={this.state.videoData} />
              :
              this.state.loading}
          </div>
          <div className="col  one">    {
            this.state.searchData.map(
              function (data, i) {


                return <SideBarItem key={i} onClick={this.handleClick} videoData={data} />
              }, this
            )
          }    </div>



        </div>

      </div>
    )
  }
}
