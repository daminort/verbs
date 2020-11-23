import { takeLatest, all, put, call, delay, select } from 'redux-saga/effects';

import { EMPTY_TIME } from '../../assets/constants/timer';
import { Action } from '../commonTypes';
import { TimerActionsTypes } from './types'
import { timerActions } from './actions';

function* start(action: Action<TimerActionsTypes.START, {}>) {
  yield put(timerActions.valueSet(EMPTY_TIME));
  yield put(timerActions.runningSet(true));
}

function* stop(action: Action<TimerActionsTypes.STOP, {}>) {
  yield put(timerActions.valueSet(EMPTY_TIME));
  yield put(timerActions.runningSet(false));
}

export default function* timerSaga() {
  yield all([
    takeLatest(TimerActionsTypes.START, start),
    takeLatest(TimerActionsTypes.STOP, stop),
  ]);
}
