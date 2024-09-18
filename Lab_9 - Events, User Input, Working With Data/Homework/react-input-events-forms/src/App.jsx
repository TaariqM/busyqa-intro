import { useState } from "react";
import React, { Component } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // prevent form submission
    if (this.state.newTodo.trim() === "") {
      return; // check for empty input
    }

    this.setState((prevState) => ({
      todos: [...prevState.todos, prevState.newTodo],
      newTodo: "",
    }));
  };

  removeTodo = (index) => {
    const updatedTodos = [...this.state.todos];
    updatedTodos.splice(index, 1);
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add a new todo"
            value={this.state.newTodo}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {todo}{" "}
              <button onClick={() => this.removeTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
