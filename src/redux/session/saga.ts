import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { SessionPhase, SessionStatus } from '../../assets/enums/session';
import { IrregularService } from '../../services/IrregularService/IrregularService';

import { selectIsIrregularRuEn } from '../app/selectors';
import { selectIrregularRuEnSet, selectCurrentIrregularRuEn } from '../session/selectors';

import { SessionActionsTypes } from './types';
import { sessionActions } from './actions';
import { IrregularRuEnSet } from '../../assets/types/sessionSets';

function* start(action: ReturnType<typeof sessionActions.start>) {
  const isIrregularRuEn = yield select(selectIsIrregularRuEn);

  if (isIrregularRuEn) {
    yield put(sessionActions.irregularRuEnSetReload());
  }

  yield put(sessionActions.statusSet(SessionStatus.active));
  yield put(sessionActions.phaseSet(SessionPhase.waiting));
}

function* next(action: ReturnType<typeof sessionActions.next>) {
  const { isError } = action.payload;

  const isIrregularRuEn = yield select(selectIsIrregularRuEn);

  if (isIrregularRuEn) {
    const sessionSet = yield select(selectIrregularRuEnSet);
    const currentItem = yield select(selectCurrentIrregularRuEn);
    // TODO: check if there is an error in the exercise
    // ...
    if (isError) {
      // TODO: save debt for future
    }

    const nextSet = sessionSet.slice(1);
    yield put(sessionActions.phaseSet(SessionPhase.waiting));
    yield put(sessionActions.irregularRuEnSetRefresh(nextSet));
  }
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
    takeLatest(SessionActionsTypes.NEXT, next),
    takeLatest(SessionActionsTypes.STOP, stop),
    takeLatest(SessionActionsTypes.IRREGULAR_RU_EN_SET_RELOAD, irregularRuEnSetReload),
  ]);
}
