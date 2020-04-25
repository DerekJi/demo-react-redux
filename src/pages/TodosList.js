import React from 'react';
import './TodosList.scss';
import ToggleButton from './ToggleStatusButton';
import classNames from "classnames";

const TodosList = ({ todos }) => {
  let key = 0;
  return (
    <ul>
      {
        todos.map(todo => (
            <li key={key++}>
              <span className="sp-id">{todo.id}</span>
              <span className="sp-name">{todo.name}</span>
              <i className={classNames(
                "sp-status",
                {
                  archived: todo.completed,
                  active: !todo.completed
                })}>
                {todo.completed ? 'archived' : 'active'}
              </i>
              <ToggleButton id={todo.id} completed={todo.completed}>Toggle Status</ToggleButton>
            </li>
          ))
      }
    </ul>
  );
};

export default TodosList;

