import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const UpdateTodo = ({ todo }) => {
  const { id, description } = todo;
  const { todos, setTodos } = useContext(TodoContext);
  const [todoInput, setTodoInput] = useState(description);

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
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
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
