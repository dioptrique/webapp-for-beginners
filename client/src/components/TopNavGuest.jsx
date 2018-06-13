import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

/**
 * @class SideNav
 */
export class TopNavGuest extends Component {
  /**
   * @function componentDidMount
   * @description: Component life-cycle method that
   * is called before the component mounts
   * @returns {undefined}
   */
  componentDidMount() {
    this.initMaterial();
    $('.side-nav .my-list-item a').click(() => {
      const windowSize = $(window).width();
      if (windowSize < 993) {
        $('.button-colllapse').sideNav('hide');
      }
    });
  }

  /**
   * @function componentDidUpdate
   * @description: Component life-cycle method that
   * is called when the component updates
   * @returns {undefined}
   */
  componentDidUpdate() {
    this.initMaterial();
  }

  /**
   * @function initMaterial
   * @description initializes material components
   * @returns {undefined}
   */
  initMaterial() {
    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
  }

  /**
   * @function render
   * @description component method that defines what would
   * be rendered by returning it
   * @returns {undefined}
   */
  render() {
    let navList = (
      <ul className='right hide-on-small-only' id=''>
        <li className='my-list-item'><NavLink to='/signin'>Sign in</NavLink></li>
        <li className='my-list-item'><NavLink to='/signup'>Sign up</NavLink></li>
      </ul>
    );
    return (
      <div className="navbar-div">
        <div className='navbar-fixed'>
          <nav>
            <div className='nav-wrapper lighten-1'>
              <NavLink to='/' className='brand-logo'>Outernship</NavLink>
              {navList}
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default TopNavGuest;
