import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import todos from './todos/todos.reducer';
import filter from './filter/filter.reducer';

const rootReducer = combineReducers({
  todos,
  filter,
});

export const store = createStore(rootReducer, devToolsEnhancer());