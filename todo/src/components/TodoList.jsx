import React from 'react';
import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useTodo();

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
};

export default TodoList;
