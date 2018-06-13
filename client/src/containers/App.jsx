import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//
import jwtDecode from 'jwt-decode';

import RouteHandler from '../routes';
import { verifyAuth } from '../actions/auth/verifyAuth';

/**
 * @class The presentation of the App container will depend on whether the
          client is an authorized user who has already logged in.
 */
export class App extends Component {
  /**
   * @returns {undefined}
   */
  componentWillMount() {
    /*
      If authentication token exists in client's localStorage, decode it and
      check if it is expired.

      If it is not expired, use the token to verify the Authorization claim
      made by the client. This is acheived by the action creator verifyAuth.
      verifyAuth will proceed to dispatch verifyAuthLoading action.
    */
    if (localStorage && localStorage.getItem('x-auth')) {
      const token = localStorage.getItem('x-auth');
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decoded.exp > currentTime) {
        this.props.verifyAuth(token);
      }
    }
  }

  /**
   * @returns {undefined}
   */
  componentDidMount() {
    setTimeout(() => {
      // Bootstrap js modal is pop up window on top of current page
      $('.modal').modal();
    }, 800);
  }

  /**
   * @returns {undefined}
   */
  render() {
    // If authorization is currently being verified..
    if (this.props.verifyAuthLoading) {
      // Preloader is what you see on the page when rest of the user content is
      // loading.
      return (<Preloader message='Preparing your space...'/>);
    }

    // Here we will determine which page to display depending on whether we
    // are logged in
    const appRoutes = <RouteHandler isLoggedIn={this.props.isLoggedIn} />;

    // Return footer component
    return (
      <div class='main'>
        { appRoutes }
        <div className="footer center">
          <span className="left">
            <small> ©{(new Date()).getFullYear()} Outernship</small>
          </span>
          <span>
            <small> Matching the best projects for you </small>
          </span>
        </div>
      </div>
    );
  }
}

/*
  A function that maps the current state of the Redux store to the
  props required for App.
*/
const mapStateToProps = state => ({
  user: state.user,
  verifyAuthLoading: state.verifyAuthLoading,
  isLoggedIn: state.isAuthenticated
});

/*
  bindActionCreators takes in an object of action creators and the
  dispatch function of the store instance and returns an object of functions
  which actually dispatch the action to the store. This object of functions
  will be passed as props to App so that the action can actually be dispatched
  from App although App does not know about the existence of the Redux store.
*/
const mapDispatchToProps = dispatch =>
  bindActionCreators({ verifyAuth }, dispatch);

// This connects the App to the Redux store so that any updates in the state
// of the store will fire mapStateToProps and mapDispatchToProps which
// will update the props to App
export default connect(mapStateToProps, mapDispatchToProps)(App);
