import React from 'react';
import PropTypes from 'prop-types';

import VideoListEntry from './VideoListEntry';

export default class VideoList extends React.Component {

  createList() {
    let { videoList, handleSelectedVideo } = this.props;

    return videoList.map((item, i) => {
      return <VideoListEntry key={i} video={item} handleSelectedVideo={handleSelectedVideo}/>
    });
  }

  render() {
    let { videoList } = this.props;

    return (
      <div className="videoList"> 
        { this.createList() }
      </div>
    )
  }
};

VideoList.propTypes = {
  videoList: PropTypes.array.isRequired,
  handleSelectedVideo: PropTypes.func.isRequired,
}

