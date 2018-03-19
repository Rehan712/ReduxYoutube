import React from 'react';
import PropTypes from 'prop-types';

import Search from './Search'

const Nav = (props) => {    
//this.props = { getVideos: function....} 
  return (
    <div className="nav"> 
      <Search {...props}>This is something</Search>
    </div>
  );
};

// Nav.propTypes = {
//   getVideos: PropTypes.func.isRequired,
//   cbUpdateVideos: PropTypes.func.isRequired
// }

export default Nav;