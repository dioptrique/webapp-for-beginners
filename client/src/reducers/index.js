import { combineReducers } from 'redux';
import user from './auth/user/setUser';
import setUserLoading from './auth/user/loadingUser';
import verifyAuthLoading from './auth/status/authLoading';
import isAuthenticated from './auth/status/authStatus';
import verifyAuthFailed from './auth/status/authFailed';
import token from './auth/token/setToken';
import authFormErrorMessage from './auth/form/errorMessage';
import authFormLoading from './auth/form/requestLoading';
import authFormFailed from './auth/form/requestFailed';
import {
  requestResetLoading,
  requestResetMessage,
  resetPasswordLoading,
  resetPasswordError
} from './auth/user/resetPassword';

export default combineReducers({
  user,
  verifyAuthLoading,
  isAuthenticated,
  verifyAuthFailed,
  token,
  setUserLoading,
  authFormFailed,
  authFormLoading,
  authFormErrorMessage,
  requestResetLoading,
  requestResetMessage,
  resetPasswordLoading,
  resetPasswordError
});
