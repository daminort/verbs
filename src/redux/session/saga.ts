import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { SessionPhase, SessionStatus } from '../../assets/enums/session';
import { IrregularRuEnSet } from '../../assets/types/sessionSets';
import { IrregularService } from '../../services/IrregularService/IrregularService';

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

  if (isIrregularRuEn) {
    const sessionSet = yield select(selectIrregularRuEnSet);
    const currentItem = yield select(selectCurrentIrregularRuEn);

    if (isError) {
      const debt: Array<string> = yield select(selectIrregularRuEnDebt);
      debt.push(currentItem.key);
      yield put(sessionActions.irregularRuEnDebtRefresh(debt));
    }

    const nextSet = sessionSet.slice(1);
    yield put(sessionActions.phaseSet(SessionPhase.waiting));
    yield put(sessionActions.irregularRuEnSetRefresh(nextSet));
  }

  if (isError) {
    const wrong = yield select(selectWrong);
    yield put(scoreActions.wrongSet(wrong + 1));

  } else {
    const correct = yield select(selectCorrect);
    yield put(scoreActions.correctSet(correct + 1));
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
