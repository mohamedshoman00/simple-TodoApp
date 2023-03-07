import React from "react";
import { useNavigate } from "react-router-dom";
const TodoList = (props) => {
  const nav = useNavigate();
  return (
    <>
      <div className=" col-4 me-auto ms-auto mt-4">
        <ul className="list-group">
          {props.todos.map((e, i) => (
            <li
              className="d-flex justify-content-evenly align-items-center container pt-2 pb-2"
              style={{ borderBottom: "1px dashed gray", marginBottom: 3 }}
              key={i + 1}
            >
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ width: "80%" }}
              >
                <div className="listItemIcon">
                  <input
                    onClick={() => props.isCompleteHandler(e)}
                    type="Checkbox"
                    color="primary"
                    style={{ height: "14px", width: "14px" }}
                  />
                </div>
                <div
                  className="text-start p-2"
                  style={
                    e.isComplete === true
                      ? { textDecorationLine: "line-through" }
                      : { textDecorationLine: "none" }
                  }
                >
                  {e.text}
                </div>
                <div className="buttons">
                  <button
                    className="btn btn-success me-3"
                    onClick={() => nav(`/edit/${e.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => props.DeleteHandler(e)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
