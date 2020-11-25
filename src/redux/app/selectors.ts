import { createSelector } from 'reselect';
import { RootState } from '../store';

const mode = (state: RootState) => state.App.mode;
const direction = (state: RootState) => state.App.direction;
const loading = (state: RootState) => state.App.loading;

export const selectMode = createSelector([mode], mode => mode);

export const selectDirection = createSelector([direction], direction => direction);

export const selectLoading = createSelector([loading], loading => loading);
