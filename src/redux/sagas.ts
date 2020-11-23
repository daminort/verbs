import { all, fork } from 'redux-saga/effects';

import timerSaga from './timer/saga';

export default function* rootSaga() {
  yield all([
    fork(timerSaga),
  ]);
}
