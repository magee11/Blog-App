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
            className="inputSearch"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <NavLink
          to="/"
          className="navbuttons"
          style={({ isActive }) => ({
            color: isActive ? "yellow" : "white",
          })}
        >
          Home
        </NavLink>
        <NavLink
          className="navbuttons"
          to="/addpost"
          style={({ isActive }) => ({
            color: isActive ? "yellow" : "white",
          })}
        >
          AddPost
        </NavLink>
      </div>
    </div>
  );
};
