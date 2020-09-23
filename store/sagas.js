import { all, call } from 'redux-saga/effects';

import postsSagas from './posts/saga';

let actualBuildSagas = [];

actualBuildSagas = [
  call(postsSagas),
];

export default function* rootSaga() {
  yield all(actualBuildSagas);
}