import React from 'react';
import { connect } from 'react-redux';

const Todo = ({ todos }) => {
  return (
    <div className="d-todos">
      Todo Container
      <ul>
      {
        todos.map(todo => (
          <li>{todo.name}</li>
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

