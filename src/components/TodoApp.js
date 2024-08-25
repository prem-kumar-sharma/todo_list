import React, { useState } from 'react';
import UserInput from './UserInput';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './TodoApp.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [userName, setUserName] = useState('');

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    setTodos([todo, ...todos]);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <div className="background-overlay"></div>
      {!userName ? (
        <UserInput setUserName={setUserName} />
      ) : (
        <>
          <h1 className="welcome-message">Welcome, {userName}! What's your plan for today?</h1>
          <TodoForm onSubmit={addTodo} />
          <TodoList
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        </>
      )}
    </div>
  );
};

export default TodoApp;
