import React, { useRef, useState } from "react";
const TodoInput = (props) => {
  const value = useRef();
  const [to, SetTo] = useState("");
  const SubmitHandler = (event) => {
    event.preventDefault();
    if (value.current.value !== "") {
      const newTodo = [...props.todos];
      const lastele = newTodo.slice(-1);
      const index = lastele[0] === undefined ? 1 : lastele[0].id + 1;
      props.setTodos((prevState) => {
        return [
          ...prevState,
          {
            id: index,
            text: value.current.value,
            isComplete: false,
            isEditing: false,
          },
        ];
      });
    }
    SetTo("");
  };
  const ResetInput = (e) => {
    let newto = to;
    newto = e.target.value;
    SetTo(newto);
  };
  return (
    <>
      <form
        onSubmit={SubmitHandler}
        // className="form__input d-flex flex-row mt-3"
        className="container d-flex justify-content-center align-items-center"
        style={{ marginTop: "20px" }}
      >
        <div className="container">
          <div className="container">
            <input
              onChange={ResetInput}
              value={to}
              className="styleHover"
              id="outlined-basic"
              placeholder="What's need to be done?"
              variant="outlined"
              ref={value}
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
            width: "30%",
            // height: 50,
            borderRadius: 20,
            boxShadow: "0 0 4px #808080",
            padding: "10px",
          }}
        >
          Add Task
        </button>
      </form>
    </>
  );
};

export default TodoInput;
