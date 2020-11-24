import { Modes, Directions } from '../../assets/enums/app';
import { AppAction } from './actions';
import { AppActionsTypes, AppState } from './types';

const initState: AppState = {
  mode: Modes.irregular,
  direction: Directions.ruEn,
};

export function appReducer(state: AppState = initState, action: AppAction): AppState {
  switch (action.type) {
    case AppActionsTypes.MODE_SET: {
      return {
        ...state,
        mode: action.payload.mode,
      };
    }
    case AppActionsTypes.DIRECTION_SET: {
      return {
        ...state,
        direction: action.payload.direction,
      };
    }
    default: {
      return state;
    }
  }
}
