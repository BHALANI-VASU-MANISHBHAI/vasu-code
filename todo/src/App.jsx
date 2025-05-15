import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>📝 Todo List</h1>
      <TodoInput/>
      <TodoList/>
    </div>
  );
};

export default App;
