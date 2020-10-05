import Router from 'next/router';
import {
  all,
  takeLatest,
  takeEvery,
  put,
  getContext,
  call,
} from 'redux-saga/effects';

import {
  createUser,
  createUserSuccess,
  createUserFailure,

  login,
  loginSuccess,
  loginFailure,

  logout,
  logoutSuccess,
  logoutFailure,

  auth,
  authSuccess,
  authFailure,

} from './index';


export function* createUserSaga({ payload }) {
  const axios = yield getContext('axios');

  try {
    const response = yield call(
      axios.post,
      '/api/users/registration',
      {
        ...payload
      },
    );

    yield put(createUserSuccess(response.data.data));
    yield Router.push('/');
  } catch (error) {
    yield put(createUserFailure());
  }
};

export function* loginSaga({ payload }) {
  const axios = yield getContext('axios');

  try {
    const response = yield call(
      axios.post,
      '/api/users/login',
      {
        ...payload
      },
    );

    yield put(loginSuccess(response.data.data));
    yield Router.push('/');
  } catch (error) {
    yield put(loginFailure());
  }
};

export function* logoutSaga() {
  const axios = yield getContext('axios');

  try {
    yield call(
      axios.post,
      '/api/users/logout'
    );
    yield put(logoutSuccess());
    yield Router.push('/');
  } catch (error) {
    yield put(logoutFailure());
  }
};

export function* authUserSaga(token) {
  const axios = yield getContext('axios');

  if (!token) return;

  try {
    const response = yield call(
      axios.post,
      '/api/users/auth',
      {
        token
      }
    );
    yield put(authSuccess(response.data.data));
    yield Router.push('/');
  } catch (error) {
    yield put(authFailure());
  }
};


export default function* postsSagas() {
  yield all([
    takeLatest(createUser, createUserSaga),
    takeLatest(login, loginSaga),
    takeLatest(logout, logoutSaga),
    takeLatest(auth, authUserSaga),
  ]);
};
