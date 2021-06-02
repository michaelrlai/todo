import React, { useContext, useState } from "react";
import TodoApi from "../apis/TodoApi";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [todoInput, setTodoInput] = useState("");

  const handleSubmit = async () => {
    if (todoInput == "") return;
    try {
      const response = await TodoApi.post("/", {
        description: todoInput,
      });
      console.log(response.data);
      setTodos([...todos, response.data]);
      setTodoInput("");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter todo"
          aria-describedby="button-addon2"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        ></input>
        <button
          className="btn btn-success"
          type="button"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
