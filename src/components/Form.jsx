import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
const Form = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <TodoInput todos={props.todos} setTodos={props.setTodos} />
      <TodoList
        todos={props.todos}
        isCompleteHandler={props.isCompleteHandler}
        DeleteHandler={props.DeleteHandler}
      />
    </div>
  );
};

export default Form;
