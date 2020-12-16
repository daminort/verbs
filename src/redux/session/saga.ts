import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { SessionPhase, SessionStatus } from '../../assets/enums/session';
import { IrregularEnRuSet, IrregularRuEnSet } from '../../assets/types/sessionSets';
import { IrregularService } from '../../services/IrregularService';

import { scoreActions } from '../score/actions';
import { selectCorrect, selectWrong } from '../score/selectors';

import { selectIrregularRuEnDebt, selectIrregularEnRuDebt } from './selectors';

import { SessionActionsTypes } from './types';
import { sessionActions } from './actions';
import { nextIrregularEnRu, nextIrregularRuEn, selectModes } from './helpers';

function* start() {
  const { isIrregularRuEn, isIrregularEnRu, isPhrasalRuEn, isPhrasalEnRu } = yield call(selectModes);
  yield put(scoreActions.reset());

  if (isIrregularRuEn) {
    yield put(sessionActions.irregularRuEnSetReload());
  }
  if (isIrregularEnRu) {
    yield put(sessionActions.irregularEnRuSetReload());
  }
  if (isPhrasalRuEn) {
    // TODO: process results for Phrasal Ru-En
  }
  if (isPhrasalEnRu) {
    // TODO: process results for Phrasal En-Ru
  }

  yield put(sessionActions.statusSet(SessionStatus.active));
  yield put(sessionActions.phaseSet(SessionPhase.waiting));
}

function* next(action: ReturnType<typeof sessionActions.next>) {
  const { isError } = action.payload;
  const { isIrregularRuEn, isIrregularEnRu, isPhrasalRuEn, isPhrasalEnRu } = yield call(selectModes);

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
    yield call(nextIrregularEnRu, isError);
  }
  if (isPhrasalRuEn) {
    // TODO: process results for Phrasal Ru-En
  }
  if (isPhrasalEnRu) {
    // TODO: process results for Phrasal En-Ru
  }
}

function* stop() {
  const { isIrregularRuEn, isIrregularEnRu, isPhrasalRuEn, isPhrasalEnRu } = yield call(selectModes);

  if (isIrregularRuEn) {
    const debt: Array<string> = yield select(selectIrregularRuEnDebt);
    yield call(IrregularService.saveDebt, debt);
  }
  if (isIrregularEnRu) {
    const debt: Array<string> = yield select(selectIrregularEnRuDebt);
    yield call(IrregularService.saveDebt, debt);
  }
  if (isPhrasalRuEn) {
    // TODO: process results for Phrasal Ru-En
  }
  if (isPhrasalEnRu) {
    // TODO: process results for Phrasal En-Ru
  }

  yield put(sessionActions.statusSet(SessionStatus.inactive));
  yield put(sessionActions.phaseSet(SessionPhase.finish));
}

/* Irregular: Ru -> En */
function* irregularRuEnSetReload() {
  const sessionSet: IrregularRuEnSet = yield call(IrregularService.loadRuEn);

  yield put(scoreActions.totalSet(sessionSet.length));

  yield put(sessionActions.irregularRuEnDebtRefresh([]));
  yield put(sessionActions.irregularRuEnSetRefresh(sessionSet));
}

/* Irregular: En -> Ru */
function* irregularEnRuSetReload() {
  const sessionSet: IrregularEnRuSet = yield call(IrregularService.loadEnRu);

  yield put(scoreActions.totalSet(sessionSet.length));

  yield put(sessionActions.irregularEnRuDebtRefresh([]));
  yield put(sessionActions.irregularEnRuSetRefresh(sessionSet));
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* sessionSaga() {
  yield all([
    takeLatest(SessionActionsTypes.START, start),
    takeLatest(SessionActionsTypes.NEXT, next),
    takeLatest(SessionActionsTypes.STOP, stop),

    takeLatest(SessionActionsTypes.IRREGULAR_RU_EN_SET_RELOAD, irregularRuEnSetReload),
    takeLatest(SessionActionsTypes.IRREGULAR_EN_RU_SET_RELOAD, irregularEnRuSetReload),
  ]);
}
