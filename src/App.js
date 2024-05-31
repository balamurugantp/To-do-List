import React, { useState, useEffect } from 'react';
import TodoInput from '../src/components/TodoInput';
import TodoList from '../src/components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    //default data
    const initialTodos = [
      { id: 1, text: 'Java', completed: false },
      { id: 2, text: 'Angular', completed: false },
      { id: 3, text: 'React', completed: false },
    ];
    setTodos(initialTodos);
  }, []);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='bg-color'>
      <h1><center>To-do List</center></h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
