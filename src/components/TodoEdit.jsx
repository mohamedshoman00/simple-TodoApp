import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const TodoEdit = (props) => {
  const [todo, setTodo] = useState({ id: 0, text: "", isComplete: false });
  const params = useParams();
  const nav = useNavigate();
  useEffect(() => {
    const lastele = props.todos.slice(-1)[0];
    if (params.id <= lastele.id) {
      const newtodos = [...props.todos];
      const oldtodo = newtodos.filter((e) => e.id === parseInt(params.id))[0];
      setTodo(oldtodo);
    }
  }, []);
  const handleChange = (e) => {
    // clone
    let newstate = { ...todo };
    // edit
    newstate[e.target.name] = e.target.value;
    // set state
    setTodo(newstate);
  };
  const onsub = (event) => {
    event.preventDefault();
    if (todo.text !== "") {
      const newtodos = [...props.todos];
      // console.log();
      // const i = todo.id - 1;
      const newtodo = newtodos.find((e) => e.id === todo.id);
      const i = newtodos.indexOf(newtodo);
      // console.log(todo);
      // console.log(newtodo);
      // console.log(i);
      newtodos[i] = { ...todo };
      props.setTodos(newtodos);
    }
    nav("/");
  };
  return (
    <>
      <h3 className="text-center">Edit todo</h3>
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ marginTop: "50px" }}
      >
        <form
          onSubmit={onsub}
          className="container d-flex justify-content-center align-items-center"
        >
          <div className="container">
            <div className="container">
              <input
                className="styleHover"
                id="outlined-basic"
                placeholder="What's need to be done?"
                variant="outlined"
                name="text"
                value={todo.text}
                onChange={handleChange}
                style={{
                  width: "100%",
                  height: 50,
                  borderRadius: 20,
                  paddingLeft: 15,
                  border: "1px solid #808080",
                  boxShadow: "0 0 4px #808080",
                  outline: "none",
                }}
              />
            </div>
          </div>
          <button
            className="btn btn-outline-success"
            style={{
              width: 150,
              height: 50,
              borderRadius: 20,
              boxShadow: "0 0 4px #808080",
            }}
          >
            Edit Task
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoEdit;
