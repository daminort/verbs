import { SessionStatus, SessionPhase } from '../../assets/enums/session';
import { IrregularRuEnSet } from '../../assets/types/sessionSets';

export enum SessionActionsTypes {
  START = '[Session] start',
  NEXT = '[Session] next',
  STOP = '[Session] stop',
  STATUS_SET = '[Session] status-set',

  PHASE_SET = '[Session] phase-set',

  IRREGULAR_RU_EN_SET_RELOAD = '[Session] irregular-ru-en-set-reload',
  IRREGULAR_RU_EN_SET_REFRESH = '[Session] irregular-ru-en-set-refresh',
};

export interface SessionState {
  status: SessionStatus;
  phase: SessionPhase;
  irregularRuEnSet: IrregularRuEnSet;
};
