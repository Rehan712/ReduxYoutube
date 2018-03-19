import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class Search extends React.Component {
  constructor() {
    super();

    this.localHandler = this.localHandler.bind(this)
    this.localHandler = _.debounce(this.localHandler, 500)
  }

  localHandler(e) {
    const { getVideos, cbUpdateVideos } = this.props;
    // run the api with the input value
    getVideos(this.input.value, cbUpdateVideos);

  }

  render() {
    console.log('props in search', this.props)
    return (
      <div className="search col-md-6 col-md-offset-4 form-inline"> 
        <input 
          type="text" 
          className="form-control"
          ref={(elem)=>this.input=elem}
          onChange={this.localHandler}
        />
        <button className="btn">
          <span className="glyphicon glyphicon-search "></span>
        </button>
      </div>
    )
  }
};

// Search.propTypes = {
//   getVideos: PropTypes.func.isRequired,
//   cbUpdateVideos: PropTypes.func.isRequired
// }








