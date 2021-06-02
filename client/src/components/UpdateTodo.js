import React, { useContext, useState } from "react";
import TodoApi from "../apis/TodoApi";
import { TodoContext } from "../context/TodoContext";

const UpdateTodo = ({ todo }) => {
  const { id, description } = todo;
  const { todos, setTodos } = useContext(TodoContext);
  const [todoInput, setTodoInput] = useState(description);

  const handleSubmit = async () => {
    if (todoInput == "") return;
    try {
      const response = await TodoApi.put(`/${id}`, {
        description: todoInput,
      });
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            todo.description = todoInput;
          }
          return todo;
        })
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#id${id}`}
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        onClick={() => {
          setTodoInput(description);
        }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit todo
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setTodoInput(description);
                }}
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setTodoInput(e.target.value)}
                value={todoInput}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => {
                  setTodoInput(description);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleSubmit}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateTodo;
