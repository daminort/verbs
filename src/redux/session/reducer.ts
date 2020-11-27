import { SessionStatus } from '../../assets/enums/session';
import { SessionAction } from './actions';
import { SessionActionsTypes, SessionState } from './types';

const initState: SessionState = {
  status: SessionStatus.inactive,
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
