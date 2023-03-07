import React from "react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const nav = useNavigate();
  return (
    <h1
      className="text-center"
      style={{ marginTop: "50px", cursor: "pointer" }}
      onClick={() => nav("/")}
    >
      Page Not Found
    </h1>
  );
};

export default NotFound;
