import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GuestHome from '../components/GuestHome';
import Signin from '../containers/SigninForm';
import Signup from '../containers/SignupForm';
import UserHome from '../containers/UserHome';
import ForgotPassword from '../containers/ForgotPassword';
import ResetPassword from '../containers/ResetPassword';
import NotFound from '../components/NotFound';
import TopNavGuest from '../components/TopNavGuest';
import TopNavLoggedIn from '../components/TopNavLoggedIn';


/**
 * @function RouteHandler
 * @description: Higher order component that determines
 * what routes a user can access based on authentication status.
 * It is invoked in App.jsx.
 * @param {Object} props
 * @returns {Object} RouteHandler component
 */
const RouteHandler = (props) => {
  const unauthRoutes = (
    <div>
      <Switch>
        <Route exact path="/" component={GuestHome} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/resetpassword" component={ResetPassword} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </div>
  );

  const authRoutes = (
    <div className='main-container'>
      <Switch>
        <Route exact path='/' component={UserHome} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </div>
  );

  const topNavLoggedIn = (
    <div>
      <TopNavLoggedIn/>
    </div>
  );

  const topNavGuest = (
    <div>
      <TopNavGuest/>
    </div>
  );

  return (
  <BrowserRouter>
    <div className='main'>
      { props.isLoggedIn ? topNavLoggedIn : topNavGuest}
      { props.isLoggedIn ? authRoutes : unauthRoutes }
    </div>
  </BrowserRouter>
  );
};

export default RouteHandler;
