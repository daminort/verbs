import { Modes, Directions } from '../../assets/enums/app';

export enum AppActionsTypes {
  MODE_CHANGE = '[App] mode-change',
  MODE_SET = '[App] mode-set',
  DIRECTION_CHANGE = '[App] direction-change',
  DIRECTION_SET = '[App] direction-set',
  LOADING_SET = '[App] loading-set',
  PAGE_RELOAD = '[App] page-reload',
};

export interface AppState {
  mode: Modes;
  direction: Directions;
  loading: boolean;
};
