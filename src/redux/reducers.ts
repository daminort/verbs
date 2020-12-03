import { appReducer } from './app/reducer';
import { scoreReducer } from './score/reducer';
import { sessionReducer } from './session/reducer';

export default {
  App: appReducer,
  Score: scoreReducer,
  Session: sessionReducer,
};
