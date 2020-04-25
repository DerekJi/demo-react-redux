import React from 'react';
import './App.scss';
import AddTodo from './pages/AddTodoContainer';
import TodoList from './pages/TodosPanel';
import Filter from './pages/FilterPanel';

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
