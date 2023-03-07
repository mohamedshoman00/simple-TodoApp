import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid justify-content-center gap-5">
          <NavLink
            to="/"
            className="navbar-brand"
            style={{ fontSize: "2em", color: "black", fontWeight: "bold" }}
          >
            To-Do App
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
