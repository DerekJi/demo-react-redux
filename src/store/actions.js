import { ADD_TODO, TOGGLE_TODO } from './action-types';

let todoId = 1;

/**
 * 
 * @param {string} name 
 */
export const addTodo = (name) => {
  return {
    type: ADD_TODO,
    data: {
      id: todoId++,
      name,
      completed: false,
    }
  };
};

/**
 * 
 * @param {number} id 
 */
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    data: { id }
  };
};

/**
 * 
 * @param {number} id 
 */
export const removeTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    data: { id }
  };
};

/**
 * 
 * @param {string} filterName 
 */
export const filter = (filterName) => {
  return {
    type: TOGGLE_TODO,
    data: { filterName }
  };
};