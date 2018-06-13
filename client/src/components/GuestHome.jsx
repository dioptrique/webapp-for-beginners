import React, { Component } from 'react';

/**
 * @class
 */
export default class GuestHome extends Component {
  /**
   * @function render
   * @returns {Object} jsx component for landing page
   */
  render() {
    return (
      <div className='guest-home center'>
        <div id="guest-home-info">
          <h5 className="guest-home-header">
            Search for a project
          </h5>
          <h6 className="guest-info-text">
            Currently 112358 projects in our listing
          </h6>
        </div>
      </div>
    );
  }
}
