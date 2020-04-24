import React from 'react';
import { connect } from 'react-redux';

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
    todos: states.todos
  };
};


export default connect(mapStatesToProps, null)(Todo);

