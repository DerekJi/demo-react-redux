  
import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  // all reducers
});

export const store = createStore(rootReducer, devToolsEnhancer());