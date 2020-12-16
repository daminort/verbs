/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { put, select, call } from 'redux-saga/effects';

import { StatisticService } from '../../services/StatisticService';
import { SessionPhase } from '../../assets/enums/session';
import { selectCorrect, selectWrong, selectTime } from '../score/selectors';
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
import { Statistics } from '../../assets/types/statistics';

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

function* saveStatistics() {
  const correct = yield select(selectCorrect);
  const wrong = yield select(selectWrong);
  const time = yield select(selectTime);

  const statistics: Statistics = yield call(StatisticService.loadIrregularStats);

  statistics.total = statistics.total + (correct + wrong);
  statistics.correct = statistics.correct + correct;
  statistics.wrong = statistics.wrong + wrong;
  statistics.time = statistics.time + time;

  yield call(StatisticService.saveIrregularStats, statistics);
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

export { selectModes, saveStatistics, nextIrregularRuEn, nextIrregularEnRu };
