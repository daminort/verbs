import { takeLatest, all, put, call, delay, select } from 'redux-saga/effects';

import { EMPTY_TIME } from '../../assets/constants/timer';
import { TimerActionsTypes } from './types'
import { timerActions } from './actions';

function* start(action: ReturnType<typeof timerActions.start>) {
  yield put(timerActions.valueSet(EMPTY_TIME));
  yield put(timerActions.runningSet(true));
}

function* stop(action: ReturnType<typeof timerActions.stop>) {
  yield put(timerActions.valueSet(EMPTY_TIME));
  yield put(timerActions.runningSet(false));
}

export default function* timerSaga() {
  yield all([
    takeLatest(TimerActionsTypes.START, start),
    takeLatest(TimerActionsTypes.STOP, stop),
  ]);
}
