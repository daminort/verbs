import { ActionUnion, createAction } from '../commonTypes';
import { TimerActionsTypes } from './types';

export const timerActions = {
  start: () => createAction(TimerActionsTypes.START),
  stop: () => createAction(TimerActionsTypes.STOP),
  valueSet: (value: string) => createAction(TimerActionsTypes.VALUE_SET, { value }),
  runningSet: (running: boolean) => createAction(TimerActionsTypes.RUNNING_SET, { running }),
};

export type TimerAction = ActionUnion<typeof timerActions>;
