import React from "react";

function Todo() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "darkblue" }}>My To-Do List</h1>
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          placeholder="Add a new task"
          style={{ padding: "5px" }}
        />
      </div>
      <div style={{ textAlign: "center", padding: "10px 0px" }}>
        <button
          style={{
            backgroundColor: "darkblue",
            color: "white",
            padding: "5px 10px",
            border: "none",
          }}
        >
          Add
        </button>
      </div>

      <div style={{ textAlign: "center", padding: "10px 0px" }}>
        <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}></ul>
      </div>
    </div>
  );
}

export default Todo;
