import React from 'react';
import { FaTrash } from 'react-icons/fa';
import './TodoList.css';

const TodoList = ({ todos, completeTodo, removeTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div
          className={todo.isComplete ? 'todo-row complete animate' : 'todo-row animate'}
          key={index}
        >
          <div
            key={todo.id}
            onClick={() => completeTodo(todo.id)}
            className={todo.isComplete ? 'task-text completed' : 'task-text'}
          >
            {todo.text}
          </div>
          <div className="icons">
            <FaTrash
              onClick={() => removeTodo(todo.id)}
              className="delete-icon"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
