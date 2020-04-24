import { ADD_TODO, TOGGLE_TODO } from "../store/action-types";

/**
 * Array<Todo>
 */
const initialTodoState = [
  // {id: 0, name: 'abc', completed: false}
];

const todos = (state = initialTodoState, action) => {
  if (!action.data) {
    return state;
  }
  
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