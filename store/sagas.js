import { all, call } from 'redux-saga/effects';

import postsSagas from './posts/saga';
import userSagas from './user/saga';

let actualBuildSagas = [];

actualBuildSagas = [
  call(postsSagas),
  call(userSagas),
];

export default function* rootSaga() {
  yield all(actualBuildSagas);
}