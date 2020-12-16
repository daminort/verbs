import { SessionPhase, SessionStatus } from '../../assets/enums/session';
import { SessionAction } from './actions';
import { SessionActionsTypes, SessionState } from './types';

const initState: SessionState = {
  status: SessionStatus.inactive,
  phase: SessionPhase.waiting,
  irregularRuEnSet: [],
  irregularRuEnDebt: [],
  irregularEnRuSet: [],
  irregularEnRuDebt: [],
};

export function sessionReducer(state: SessionState = initState, action: SessionAction): SessionState {
  switch (action.type) {
    case SessionActionsTypes.STATUS_SET: {
      return {
        ...state,
        status: action.payload.status,
      };
    }
    case SessionActionsTypes.PHASE_SET: {
      return {
        ...state,
        phase: action.payload.phase,
      };
    }
    /* Irregular: Ru -> En */
    case SessionActionsTypes.IRREGULAR_RU_EN_SET_REFRESH: {
      return {
        ...state,
        irregularRuEnSet: action.payload.irregularRuEnSet,
      };
    }
    case SessionActionsTypes.IRREGULAR_RU_EN_DEBT_REFRESH: {
      return {
        ...state,
        irregularRuEnDebt: action.payload.irregularRuEnDebt,
      };
    }
    /* Irregular: En -> Ru */
    case SessionActionsTypes.IRREGULAR_EN_RU_SET_REFRESH: {
      return {
        ...state,
        irregularEnRuSet: action.payload.irregularEnRuSet,
      };
    }
    case SessionActionsTypes.IRREGULAR_EN_RU_DEBT_REFRESH: {
      return {
        ...state,
        irregularEnRuDebt: action.payload.irregularEnRuDebt,
      };
    }
    default: {
      return state;
    }
  }
}
