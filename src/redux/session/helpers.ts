/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { put, select } from 'redux-saga/effects';

import { SessionPhase } from '../../assets/enums/session';
import {
  selectCurrentIrregularEnRu,
  selectCurrentIrregularRuEn,
  selectIrregularEnRuDebt,
  selectIrregularEnRuSet,
  selectIrregularRuEnDebt,
  selectIrregularRuEnSet,
} from './selectors';

import { sessionActions } from './actions';
import { selectIsIrregularEnRu, selectIsIrregularRuEn } from '../app/selectors';

function* selectModes() {
  const isIrregularRuEn = yield select(selectIsIrregularRuEn);
  const isIrregularEnRu = yield select(selectIsIrregularEnRu);
  const isPhrasalRuEn = false;
  const isPhrasalEnRu = false;

  return {
    isIrregularRuEn,
    isIrregularEnRu,
    isPhrasalRuEn,
    isPhrasalEnRu,
  };
}

function* nextIrregularRuEn(isError: boolean) {
  const sessionSet = yield select(selectIrregularRuEnSet);
  const currentItem = yield select(selectCurrentIrregularRuEn);

  if (isError) {
    const debt: Array<string> = yield select(selectIrregularRuEnDebt);
    debt.push(currentItem.key);
    yield put(sessionActions.irregularRuEnDebtRefresh(debt));
  }

  const nextSet = sessionSet.slice(1);

  if (nextSet.length === 0) {
    yield put(sessionActions.stop());
    yield put(sessionActions.phaseSet(SessionPhase.finish));
    return;
  }

  yield put(sessionActions.phaseSet(SessionPhase.waiting));
  yield put(sessionActions.irregularRuEnSetRefresh(nextSet));
}

function* nextIrregularEnRu(isError: boolean) {
  const sessionSet = yield select(selectIrregularEnRuSet);
  const currentItem = yield select(selectCurrentIrregularEnRu);

  if (isError) {
    const debt: Array<string> = yield select(selectIrregularEnRuDebt);
    debt.push(currentItem.key);
    yield put(sessionActions.irregularEnRuDebtRefresh(debt));
  }

  const nextSet = sessionSet.slice(1);

  if (nextSet.length === 0) {
    yield put(sessionActions.stop());
    yield put(sessionActions.phaseSet(SessionPhase.finish));
    return;
  }

  yield put(sessionActions.phaseSet(SessionPhase.waiting));
  yield put(sessionActions.irregularEnRuSetRefresh(nextSet));
}

export { nextIrregularRuEn, nextIrregularEnRu, selectModes };
