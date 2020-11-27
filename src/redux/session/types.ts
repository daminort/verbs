import { SessionStatus } from '../../assets/enums/session';
import { IrregularRuEnSet } from '../../assets/types/sessionSets';

export enum SessionActionsTypes {
  START = '[Session] start',
  STOP = '[Session] stop',
  STATUS_SET = '[Session] status-set',

  IRREGULAR_RU_EN_SET_RELOAD = '[Session] irregular-ru-en-set-reload',
  IRREGULAR_RU_EN_SET_REFRESH = '[Session] irregular-ru-en-set-refresh',
};

export interface SessionState {
  status: SessionStatus;
  phase: string; // 'waiting' | 'validation' | 'results'
  irregularRuEnSet: IrregularRuEnSet;
};
