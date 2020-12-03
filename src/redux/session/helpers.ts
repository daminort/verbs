import { put, select } from 'redux-saga/effects';

import { SessionPhase } from '../../assets/enums/session';
import { selectCurrentIrregularRuEn, selectIrregularRuEnDebt, selectIrregularRuEnSet } from '../session/selectors';

import { sessionActions } from './actions';

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

export {
  nextIrregularRuEn,
};
