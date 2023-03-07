import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import TodoEdit from "./components/TodoEdit";
const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "First Todo", isComplete: false },
    { id: 2, text: "Second Todo", isComplete: false },
    { id: 3, text: "third Todo", isComplete: false },
  ]);
  const isCompleteHandler = (e) => {
    const i = todos.indexOf(e);
    setTodos((prevState) => {
      prevState[i] = {
        ...prevState[i],
        isComplete: !prevState[i].isComplete,
      };
      return [...prevState];
    });
  };
  const DeleteHandler = (e) => {
    const newTodos = [...todos];
    const newT = newTodos.filter((t) => t.id !== e.id);
    setTodos(newT);
  };
  return (
    <>
      <div className="wrapper">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Form
                todos={todos}
                setTodos={setTodos}
                isCompleteHandler={isCompleteHandler}
                DeleteHandler={DeleteHandler}
              />
            }
          />
          <Route
            path="edit/:id"
            element={<TodoEdit todos={todos} setTodos={setTodos} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
