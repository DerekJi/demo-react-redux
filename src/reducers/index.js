import { combineReducers } from 'redux';
import todos from '../reducers/todos';
import filter from '../reducers/filter';

const rootReducer = combineReducers({
  todos,
  filter,
});

export default rootReducer;