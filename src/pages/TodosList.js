import React from 'react';
import './TodosList.scss';
import ToggleButton from './ToggleStatusButton';

const TodosList = ({ todos }) => {
  let key = 0;
  return (
    <ul>
      {
        todos.map(todo => (
            <li key={key++}>
              <span className="sp-id">{todo.id}</span>
              <span className="sp-name">{todo.name}</span>
              <i className="sp-status">{todo.completed ? 'archived' : 'active'}</i>
              <ToggleButton id={todo.id}>Toggle Status</ToggleButton>
            </li>
          ))
      }
    </ul>
  );
};

export default TodosList;

