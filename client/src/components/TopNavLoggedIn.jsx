import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

/**
 * @class SideNav
 */
export class TopNavLoggedIn extends Component {
  /**
   * @constructor
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
  }

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
    let navListLoggedIn = (
      <ul className='right hide-on-small-only'>
        <li className='my-list-item'><NavLink to='/'>My Profile</NavLink></li>
        <li className='my-list-item'><NavLink to='/'>Sign out</NavLink></li>
      </ul>
    );
    return (
      <div className="navbar-div">
        <div className='navbar-fixed'>
          <nav>
            <div className='nav-wrapper lighten-1'>
              <NavLink to='/' className='brand-logo'>Outernship</NavLink>
              {navListLoggedIn}
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default TopNavLoggedIn;
