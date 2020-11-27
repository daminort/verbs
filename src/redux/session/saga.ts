import { takeLatest, all, put, call, delay, select } from 'redux-saga/effects';

import { SessionStatus } from '../../assets/enums/session';
import { Directions, Modes } from '../../assets/enums/app';
import { IrregularService } from '../../services/IrregularService/IrregularService';

import { selectMode, selectDirection } from '../app/selectors';

import { SessionActionsTypes } from './types'
import { sessionActions } from './actions';
import { IrregularRuEnSet } from '../../assets/types/sessionSets';

function* start(action: ReturnType<typeof sessionActions.start>) {

  const mode = yield select(selectMode);
  const direction = yield select(selectDirection);

  const isIrregularRuEn = (mode === Modes.irregular && direction === Directions.ruEn);

  if (isIrregularRuEn) {
    yield put(sessionActions.irregularRuEnSetReload());
  }

  yield put(sessionActions.statusSet(SessionStatus.active));
}

function* stop(action: ReturnType<typeof sessionActions.stop>) {
  yield put(sessionActions.statusSet(SessionStatus.inactive));
}

function* irregularRuEnSetReload(action: ReturnType<typeof sessionActions.irregularRuEnSetReload>) {

  const sessionSet: IrregularRuEnSet = yield call(IrregularService.loadRuEn);

  yield put(sessionActions.irregularRuEnSetRefresh(sessionSet));
}

export default function* sessionSaga() {
  yield all([
    takeLatest(SessionActionsTypes.START, start),
    takeLatest(SessionActionsTypes.STOP, stop),
    takeLatest(SessionActionsTypes.IRREGULAR_RU_EN_SET_RELOAD, irregularRuEnSetReload),
  ]);
}
