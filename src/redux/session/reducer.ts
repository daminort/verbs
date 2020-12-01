import { SessionPhase, SessionStatus } from '../../assets/enums/session';
import { SessionAction } from './actions';
import { SessionActionsTypes, SessionState } from './types';

const initState: SessionState = {
  status: SessionStatus.inactive,
  phase: SessionPhase.waiting,
  irregularRuEnSet: [],
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
    case SessionActionsTypes.IRREGULAR_RU_EN_SET_REFRESH: {
      return {
        ...state,
        irregularRuEnSet: action.payload.irregularRuEnSet,
      };
    }
    default: {
      return state;
    }
  }
}
