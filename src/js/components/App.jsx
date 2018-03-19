import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux'


import Nav from './Nav';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import {getVideos} from '../actions'


import { YOUTUBE_KEY } from '../config/youtubekey'


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      // videoList: [],
      selectedVideo: {}
    }

    this.handleSelectedVideo = this.handleSelectedVideo.bind(this);
    // this.getVideos = this.getVideos.bind(this);
    this.cbGetVideos = this.cbGetVideos.bind(this);
    this.cbUpdateVideos = this.cbUpdateVideos.bind(this);
  }

  // getVideos(query, cb) {
  //   const fixed = 'https://www.googleapis.com/youtube/v3/search';
  //   let url = fixed + '?part=snippet' + '&maxResults=5' + '&q='+ query + '&key='+ YOUTUBE_KEY;
  //   axios.get(url).then(cb);
  // }

  cbGetVideos(data) {
    this.setState({
      videoList: data.data.items,
      selectedVideo: data.data.items[0]
    })
  }

  cbUpdateVideos(data) {
    this.setState({
      videoList: data.data.items,
    })
  }



  handleSelectedVideo(video) {
    this.setState({selectedVideo: video})
  }

  render() {
    let { selectedVideo } = this.state;
    let {getVideos}=this.props
    console.log('the getvideos function returns',getVideos)

    return (
      <div className="app">
        <Nav 
          getVideos={this.props.getVideos} 
          cbUpdateVideos={this.cbUpdateVideos}
        />
        <div className="col-md-7">
          <VideoPlayer selectedVideo={selectedVideo} />
        </div>
        <div className="col-md-5">
          <VideoList 
            videoList={this.props.videoList} 
            handleSelectedVideo={this.handleSelectedVideo}
          />
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.getVideos('javascript');
  }



};

// function mapStateToProps(state) {
//   return {
//     videoList:state.videoList
//   }
// }

export default connect(null,{getVideos})(App)