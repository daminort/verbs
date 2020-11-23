export enum TimerActionsTypes {
  START = '[Timer] start',
  STOP = '[Timer] stop',
  VALUE_SET = '[Timer] value-set',
  RUNNING_SET = '[Timer] running-set',
};

export interface TimerState {
  value: string;
  running: boolean,
};
