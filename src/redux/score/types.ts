export enum ScoreActionsTypes {
  RESET = '[Score] reset',
  TOTAL_SET = '[Score] total-set',
  CORRECT_SET = '[Score] correct-set',
  WRONG_SET = '[Score] wrong-set',
  TIME_SET = '[Score] time-set',
}

export interface ScoreState {
  total: number;
  correct: number;
  wrong: number;
  time: number;
}
