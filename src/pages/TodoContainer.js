import React from 'react';
import { connect } from 'react-redux';
import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETE } from '../store/filter/filter.action-types';

const Todo = ({ todos }) => {
  let key = 0;
  return (
    <div className="d-panel d-todos">
      Todos List
      <ul>
      {
        todos.map(todo => (
          <li key={key++}>{todo.name}</li>
        ))
      }
      </ul>
    </div>
  );
};

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


export default connect(mapStatesToProps, null)(Todo);

