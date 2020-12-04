import { takeLatest, all, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { Modes, Directions } from '../../assets/enums/app';

import { sessionActions } from '../session/actions';
import { selectIsSessionActive } from '../session/selectors';

import { AppActionsTypes } from './types';
import { appActions } from './actions';
import { selectMode, selectDirection } from './selectors';

function* modeChange(action: ReturnType<typeof appActions.modeChange>) {
  const { mode } = action.payload;
  const direction: Directions = yield select(selectDirection);

  const route = `/${mode}/${direction}`;
  yield put(push(route));
}

function* directionChange(action: ReturnType<typeof appActions.directionChange>) {
  const { direction } = action.payload;
  const mode: Modes = yield select(selectMode);

  const route = `/${mode}/${direction}`;
  yield put(push(route));
}

function* pageReload(action: ReturnType<typeof appActions.pageReload>) {
  const { mode, direction } = action.payload;
  const isSessionActive: boolean = yield select(selectIsSessionActive);

  if (isSessionActive) {
    yield put(sessionActions.stop());
  }

  yield put(appActions.modeSet(mode));
  yield put(appActions.directionSet(direction));
}

export default function* appSaga() {
  yield all([
    takeLatest(AppActionsTypes.MODE_CHANGE, modeChange),
    takeLatest(AppActionsTypes.DIRECTION_CHANGE, directionChange),
    takeLatest(AppActionsTypes.PAGE_RELOAD, pageReload),
  ]);
}
