import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]); // stores the list of Todo items
  const [newTodo, setNewTodo] = useState(""); // stores the text of a new Todo item

  // function to add new Todo items
  const addTodo = () => {
    if (newTodo.trim() === "") {
      // if newTodo item is empty, then don't do anything (aka, don't add an empty Todo to the Todo items list)
      return;
    }
    setTodos([...todos, newTodo]);
    setNewTodo(""); // Clear the input field
  };

  // function to remove an item from the Todo items list
  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
