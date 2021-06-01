import React, { useEffect, useRef, useState } from "react";
import { TodoList } from "./TodoList";
import { v4 as uuidv4 } from "uuid";
export const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  let inputValue = useRef();

  const add = () => {
    let name = inputValue.current.value;
    if (name === "") return;
    setTodos((prev) => [
      ...prev,
      { id: uuidv4(), name: name, completed: false },
    ]);
    inputValue.current.value = null;
  };

  const toggleTodo = (id) => {
    let newTodos = [...todos];
    let todo = newTodos.find((e) => e.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };
  return (
    <>
      <div>
        TodoList ({todos.filter((e) => e.completed === false).length} left)
      </div>
      <input ref={inputValue} type="text" />
      <button onClick={() => add()}>Add</button>
      <button>Delete</button>
      <div>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
    </>
  );
};
