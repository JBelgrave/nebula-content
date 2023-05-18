import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todos from './Todos';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    setTodos((prev) => prev.map((item) => (item.id === todoId ? newValue : item)));
  };

  const sortAscending = () => {
    const sortedAsc = [...todos].sort((a, b) => a.text.localeCompare(b.text))
    setTodos(sortedAsc)
  };

  const sortDescending = () => {
    const sortedDesc = [...todos].sort((a, b) => b.text.localeCompare(a.text))
    setTodos(sortedDesc)
  };

  return (
    <div>
      <h1>What needs to be done today?</h1>
      <TodoForm onSubmit={addTodo} />
      <button class="asc" onClick={sortAscending}>Sort Ascending</button>
      <span> </span>
      <button class="desc" onClick={sortDescending}>Sort Descending</button>
      <Todos todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} sortAscending={sortAscending} sortDescending={sortDescending} />
    </div>
  );
}
