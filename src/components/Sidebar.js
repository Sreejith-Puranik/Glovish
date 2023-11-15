import React from "react";
import "../ComponentCss/Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <div className="sidebar">
      {props.role === "User" ? (
        <Link to={`/home`} className="menu">
          Home
        </Link>
      ) : (
        <>
          {props.role === "Usermain" ? (
            <Link to={`/user`} className="menu">
              Home
            </Link>
          ) : (
            <Link to={`/admin`} className="menu">
              Home
            </Link>
          )}
        </>
      )}
      <a href="/" className="menu">
        About
      </a>
      <a href="/" className="menu">
        Services
      </a>
      <a href="/" className="menu">
        Contact
      </a>
    </div>
  );
}

export default Sidebar;
