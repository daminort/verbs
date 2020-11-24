import { Directions, Modes } from '../../assets/enums/app';
import { ActionUnion, createAction } from '../commonTypes';
import { AppActionsTypes } from './types';

export const appActions = {
  modeChange: (mode: Modes) => createAction(
    AppActionsTypes.MODE_CHANGE,
    { mode },
  ),
  modeSet: (mode: Modes) => createAction(
    AppActionsTypes.MODE_SET,
    { mode },
  ),
  directionChange: (direction: Directions) => createAction(
    AppActionsTypes.DIRECTION_CHANGE,
    { direction },
  ),
  directionSet: (direction: Directions) => createAction(
    AppActionsTypes.DIRECTION_SET,
    { direction },
  ),
  pageReload: (mode: Modes, direction: Directions) => createAction(
    AppActionsTypes.PAGE_RELOAD,
    { mode, direction },
  ),
};

export type AppAction = ActionUnion<typeof appActions>;
