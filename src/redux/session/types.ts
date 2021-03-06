import { SessionStatus, SessionPhase } from '../../assets/enums/session';
import { IrregularRuEnSet, IrregularEnRuSet } from '../../assets/types/sessionSets';

export enum SessionActionsTypes {
  START = '[Session] start',
  NEXT = '[Session] next',
  STOP = '[Session] stop',
  STATUS_SET = '[Session] status-set',

  PHASE_SET = '[Session] phase-set',

  IRREGULAR_RU_EN_SET_RELOAD = '[Session] irregular-ru-en-set-reload',
  IRREGULAR_RU_EN_SET_REFRESH = '[Session] irregular-ru-en-set-refresh',
  IRREGULAR_RU_EN_DEBT_REFRESH = '[Session] irregular-ru-en-debt-refresh',

  IRREGULAR_EN_RU_SET_RELOAD = '[Session] irregular-en-ru-set-reload',
  IRREGULAR_EN_RU_SET_REFRESH = '[Session] irregular-en-ru-set-refresh',
  IRREGULAR_EN_RU_DEBT_REFRESH = '[Session] irregular-en-ru-debt-refresh',
}

export interface SessionState {
  status: SessionStatus;
  phase: SessionPhase;

  irregularRuEnSet: IrregularRuEnSet;
  irregularRuEnDebt: Array<string>;

  irregularEnRuSet: IrregularEnRuSet;
  irregularEnRuDebt: Array<string>;
}
