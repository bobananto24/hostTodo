import React from "react";
export const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            onChange={() => toggleTodo(todo.id)}
            checked={todo.completed}
            type="checkbox"
          ></input>
          {todo.name}
        </div>
      ))}
    </div>
  );
};
