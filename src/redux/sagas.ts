import { all, fork } from 'redux-saga/effects';

import appSaga from './app/saga';
import timerSaga from './timer/saga';

export default function* rootSaga() {
  yield all([
    fork(appSaga),
    fork(timerSaga),
  ]);
}
