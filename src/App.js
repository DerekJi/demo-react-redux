import React from 'react';
import './App.scss';
import AddTodo from './pages/AddTodoContainer';
import TodoList from './pages/TodoContainer';
import Filter from './pages/FilterContainer';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
      <Filter />
    </div>
  );
}

export default App;
