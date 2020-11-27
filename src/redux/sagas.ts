import { all, fork } from 'redux-saga/effects';

import appSaga from './app/saga';
import sessionSaga from './session/saga';

export default function* rootSaga() {
  yield all([
    fork(appSaga),
    fork(sessionSaga),
  ]);
}
