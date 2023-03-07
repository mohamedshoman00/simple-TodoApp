import React, { useRef } from "react";
const TodoInput = (props) => {
  const value = useRef();
  const SubmitHandler = (event) => {
    event.preventDefault();
    if (value.current.value !== "") {
      const newTodo = [...props.todos];
      const lastele = newTodo.slice(-1);
      const index = lastele[0] === undefined ? 1 : lastele[0].id + 1;
      console.log(lastele[0]);
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
  };
  return (
    <>
      <form
        onSubmit={SubmitHandler}
        className="form__input d-flex flex-row mt-3"
      >
        <div className="container d-flex justify-content-flex-start flex-column">
          <div className="container d-flex justify-content-flex-start">
            <input
              className="styleHover"
              id="outlined-basic"
              placeholder="What's need to be done?"
              variant="outlined"
              ref={value}
              style={{
                width: 360,
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
          Add Task
        </button>
      </form>
    </>
  );
};

export default TodoInput;
