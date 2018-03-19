import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

import VideoListEntry from './VideoListEntry';
import {getVideos} from '../actions'

class VideoList extends React.Component {

  createList() {
    let { videoList, handleSelectedVideo } = this.props;

    return videoList.map((item, i) => {
      return <VideoListEntry key={i} video={item} handleSelectedVideo={handleSelectedVideo} index={i}/>
    });
  }

  render() {
    let { videoList } = this.props;
    console.log('videoLIst is ',videoList)

    return (
      <div className="videoList"> 
        { this.createList() }
      </div>
    )
  }
};

// VideoList.propTypes = {
//   videoList: PropTypes.array.isRequired,
//   handleSelectedVideo: PropTypes.func.isRequired,
// }


function mapStateToProps(state) {
  return {
    videoList:state.videoList
  }
}

export default connect(mapStateToProps,{getVideos})(VideoList)