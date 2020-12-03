import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { SessionPhase, SessionStatus } from '../../assets/enums/session';
import { IrregularRuEnSet } from '../../assets/types/sessionSets';
import { IrregularService } from '../../services/IrregularService';

import { scoreActions } from '../score/actions';
import { selectCorrect, selectWrong } from '../score/selectors';

import { selectIsIrregularRuEn } from '../app/selectors';
import {
  selectIrregularRuEnSet,
  selectCurrentIrregularRuEn,
  selectIrregularRuEnDebt,
} from '../session/selectors';

import { SessionActionsTypes } from './types';
import { sessionActions } from './actions';
import { nextIrregularRuEn } from './helpers';

function* start(action: ReturnType<typeof sessionActions.start>) {
  const isIrregularRuEn = yield select(selectIsIrregularRuEn);
  yield put(scoreActions.reset());

  if (isIrregularRuEn) {
    yield put(sessionActions.irregularRuEnSetReload());
  }

  yield put(sessionActions.statusSet(SessionStatus.active));
  yield put(sessionActions.phaseSet(SessionPhase.waiting));
}

function* next(action: ReturnType<typeof sessionActions.next>) {
  const { isError } = action.payload;

  const isIrregularRuEn = yield select(selectIsIrregularRuEn);
  const isIrregularEnRu = false;
  const isPhrasalRuEn = false;
  const isPhrasalEnRu = false;

  // score
  if (isError) {
    const wrong = yield select(selectWrong);
    yield put(scoreActions.wrongSet(wrong + 1));

  } else {
    const correct = yield select(selectCorrect);
    yield put(scoreActions.correctSet(correct + 1));
  }

  // exercises
  if (isIrregularRuEn) {
    yield call(nextIrregularRuEn, isError);
  }
  if (isIrregularEnRu) {
    // TODO: process results for Irregular En-Ru
  }
  if (isPhrasalRuEn) {
    // TODO: process results for Phrasal Ru-En
  }
  if (isPhrasalEnRu) {
    // TODO: process results for Phrasal En-Ru
  }
}

function* stop(action: ReturnType<typeof sessionActions.stop>) {
  const debt: Array<string> = yield select(selectIrregularRuEnDebt);
  yield call(IrregularService.saveDebtRuEn, debt);
  yield put(sessionActions.statusSet(SessionStatus.inactive));
}

function* irregularRuEnSetReload(action: ReturnType<typeof sessionActions.irregularRuEnSetReload>) {

  const sessionSet: IrregularRuEnSet = yield call(IrregularService.loadRuEn);

  yield put(scoreActions.totalSet(sessionSet.length));
  
  yield put(sessionActions.irregularRuEnDebtRefresh([]));
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
