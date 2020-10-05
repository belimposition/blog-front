import { createAction, createReducer } from 'redux-act';

export const createUser = createAction('user/createUser');
export const createUserSuccess = createAction('user/createUserSuccess');
export const createUserFailure = createAction('user/createUserFailure');

export const login = createAction('user/login');
export const loginSuccess = createAction('user/loginSuccess');
export const loginFailure = createAction('user/loginFailure');

export const logout = createAction('user/logout');
export const logoutSuccess = createAction('user/logoutSuccess');
export const logoutFailure = createAction('user/logoutFailure');

export const auth = createAction('user/auth');
export const authSuccess = createAction('user/authSuccess');
export const authFailure = createAction('user/authFailure');

const initialState = {
  name: '',
  email: '',
  _id: '',
  isAuth: false,
  isLoading: false,
  isError: false,
};


const handleCreateUser = (state) => ({
  ...state,
  isLoading: true,
  isError: false,
});

const handleCreateUserSuccess = (state, payload = {}) => ({
  ...state,
  ...payload,
  isAuth: true,
  isLoading: false,
  isError: false,
});

const handleCreateUserFailure = (state) => ({
  ...state,
  isLoading: false,
  isError: true,
});


const handleLogin = (state) => ({
  ...state,
  isLoading: true,
  isError: false,
});

const handleLoginSuccess = (state, payload = {}) => ({
  ...state,
  ...payload,
  isAuth: true,
  isLoading: false,
  isError: false,
});

const handleLoginFailure = (state) => ({
  ...state,
  isLoading: false,
  isError: true,
});


const handleLogout = (state) => ({
  ...state,
  name: '',
  email: '',
  isAuth: false,
  isLoading: true,
  isError: false,
});

const handleLogoutSuccess = (state) => ({
  ...state,
  name: '',
  email: '',
  isAuth: false,
  isLoading: false,
  isError: false,
});

const handleLogoutFailure = (state) => ({
  ...state,
  isLoading: false,
  isError: true,
});

const handleAuth = (state) => ({
  ...state,
});


const handleAuthSuccess = (state, payload = {}) => ({
  ...state,
  ...payload,
  isAuth: true,
});

const handleAuthFailure = (state) => ({
  ...state,
});


export default createReducer({
  [createUser]: handleCreateUser,
  [createUserSuccess]: handleCreateUserSuccess,
  [createUserFailure]: handleCreateUserFailure,

  [login]: handleLogin,
  [loginSuccess]: handleLoginSuccess,
  [loginFailure]: handleLoginFailure,

  [logout]: handleLogout,
  [logoutSuccess]: handleLogoutSuccess,
  [logoutFailure]: handleLogoutFailure,

  [auth]: handleAuth,
  [authSuccess]: handleAuthSuccess,
  [authFailure]: handleAuthFailure,

}, initialState);
