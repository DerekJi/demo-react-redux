import React from 'react';
import TodosList from './TodosList';
import { connect } from 'react-redux';
import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETE } from '../store/filter/filter.action-types';

const TodoNotFound = () => (
  <div>
    <i>NO DATA FOUND</i>
  </div>
);

const TodoPanel = ({ todos }) => (
<div className="d-panel d-todos">
  <b>Todos List</b>
  { todos.length > 0
    ? <TodosList todos={todos}/>
    : <TodoNotFound />
  }
</div>
);

const mapStatesToProps = (states) => {
  return {
    todos: states.todos.filter(todo => visible(todo, states.filter)) || [],
  };
};

const visible = (todo, filter) => {
  switch (filter) {
    case FILTER_ACTIVE:
      return todo.completed === false;
    case FILTER_COMPLETE:
      return todo.completed === true;
    case FILTER_ALL:
    default:
      return true;
  }
}


export default connect(mapStatesToProps, null)(TodoPanel);
