import { all, fork } from 'redux-saga/effects';

import appSaga from './app/saga';
import sessionSaga from './session/saga';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* rootSaga() {
  yield all([fork(appSaga), fork(sessionSaga)]);
}
