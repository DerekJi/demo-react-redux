import React from 'react';

const TodosList = ({ todos }) => {
  let key = 0;
  return (
    <ul>
      {
        todos.map(todo => (
            <li key={key++}>{todo.name}</li>
          ))
      }
    </ul>
  );
};

export default TodosList;

