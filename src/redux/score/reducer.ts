import { ScoreAction } from './actions';
import { ScoreActionsTypes, ScoreState } from './types';

const initState: ScoreState = {
  total: 0,
  correct: 0,
  wrong: 0,
};

export function scoreReducer(state: ScoreState = initState, action: ScoreAction): ScoreState {
  switch (action.type) {
    case ScoreActionsTypes.RESET: {
      return initState;
    }
    case ScoreActionsTypes.TOTAL_SET: {
      return {
        ...state,
        total: action.payload.total,
      };
    }
    case ScoreActionsTypes.CORRECT_SET: {
      return {
        ...state,
        correct: action.payload.correct,
      };
    }
    case ScoreActionsTypes.WRONG_SET: {
      return {
        ...state,
        wrong: action.payload.wrong,
      };
    }
    default: {
      return state;
    }
  }
}
