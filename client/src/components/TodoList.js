import React, { useContext, useEffect } from "react";
import TodoApi from "../apis/TodoApi";
import { TodoContext } from "../context/TodoContext";

const TodoList = (props) => {
  const { todos, setTodos } = useContext(TodoContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await TodoApi.get("/");
        setTodos(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <table className="table mt-3 align-middle">
      <thead>
        <tr>
          <th className="col-8 text-center" scope="col">
            <span className="ms-3">Description</span>
          </th>
          <th className="col-2 text-center" scope="col">
            Edit
          </th>
          <th className="col-2 text-center" scope="col">
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        {todos &&
          todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>
                  <span className="ms-3">{todo.description}</span>
                </td>
                <td className="text-center">
                  <button className="btn btn-warning">Edit</button>
                </td>
                <td className="text-center">
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default TodoList;
