import { createSelector } from 'reselect';
import { RootState } from '../store';

const total = (state: RootState) => state.Score.total;
const correct = (state: RootState) => state.Score.correct;
const wrong = (state: RootState) => state.Score.wrong;

export const selectTotal = createSelector([total], total => total);

export const selectCorrect = createSelector([correct], correct => correct);

export const selectWrong = createSelector([wrong], wrong => wrong);

export const selectPassed = createSelector([selectCorrect, selectWrong], (correct, wrong) => {
  return correct + wrong;
});

export const selectProgress = createSelector([selectTotal, selectPassed], (total, passed) => {
  if (!total) {
    return 0;
  }

  return Math.round((passed * 100) / total);
});
