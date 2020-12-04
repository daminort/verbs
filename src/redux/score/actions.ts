/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { ActionUnion, createAction } from '../commonTypes';
import { ScoreActionsTypes } from './types';

export const scoreActions = {
  reset: () => createAction(ScoreActionsTypes.RESET),
  totalSet: (total: number) => createAction(ScoreActionsTypes.TOTAL_SET, { total }),
  correctSet: (correct: number) => createAction(ScoreActionsTypes.CORRECT_SET, { correct }),
  wrongSet: (wrong: number) => createAction(ScoreActionsTypes.WRONG_SET, { wrong }),
};

export type ScoreAction = ActionUnion<typeof scoreActions>;
