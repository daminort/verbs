import { createSelector } from 'reselect';
import { RootState } from '../store';

const value = (state: RootState) => state.Timer.value;
const running = (state: RootState) => state.Timer.running;

export const selectValue = createSelector([value], value => value);

export const selectRunning = createSelector([running], running => running);
