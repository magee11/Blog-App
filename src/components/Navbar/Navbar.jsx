import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
export const Navbar = ({ search, setSearch }) => {
  return (
    <div>
      <div className="navbar">
        <div>
          <label>Search </label>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "gray" : "black",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/addpost"
          style={({ isActive }) => ({
            color: isActive ? "gray" : "black",
          })}
        >
          AddPost
        </NavLink>
      </div>
    </div>
  );
};
