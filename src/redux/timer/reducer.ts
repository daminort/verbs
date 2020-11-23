
import { EMPTY_TIME } from '../../assets/constants/timer';
import { TimerAction } from './actions';
import { TimerActionsTypes, TimerState } from './types';

const initState: TimerState = {
  value: EMPTY_TIME,
  running: false,
};

export function timerReducer(state: TimerState = initState, action: TimerAction): TimerState {
  switch (action.type) {
    case TimerActionsTypes.VALUE_SET: {
      return {
        ...state,
        value: action.payload.value,
      };
    }
    case TimerActionsTypes.RUNNING_SET: {
      return {
        ...state,
        running: action.payload.running,
      };
    }
    default: {
      return state;
    }
  }
}
