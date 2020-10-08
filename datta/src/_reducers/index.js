import { combineReducers } from 'redux';

import { authentication } from './auth.reducer';
import reducer from './event.reducer'

const rootReducer = combineReducers({
  authentication,
  reducer
});

export default rootReducer;
