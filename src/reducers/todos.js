import { ADD_TODO, TOGGLE_TODO } from "../store/action-types";

/**
 * Array<Todo>
 */
const initialTodoState = [];

const todos = (state = initialTodoState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state.todos,
        action.data
      ];

    case TOGGLE_TODO:
      return state.map(x => {
        if (x.id === action.data.id) {
          x.completed = !x.completed
        }
        return x;
      });

    default:
      return state;
  }

};

export default todos;