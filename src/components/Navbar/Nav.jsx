import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
const Nav = ({ logout, isLoggesIn }) => {
  return (
    <>
      <div className="nav-container">
        <div className="title">
          <h2>LOGO</h2>
        </div>

        <div className="menu">
          <Link to="/">STATE</Link>
          <Link to="axios">AXIOS</Link>
          <Link to="/routing">ROUTING</Link>
        

          {isLoggesIn && <button onClick={logout}>LOGOUT</button>}
        </div>
      </div>
    </>
  );
};

export default Nav;
