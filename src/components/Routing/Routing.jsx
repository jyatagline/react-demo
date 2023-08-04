import React from "react";
import "./Routing.css";
import { Link, Outlet } from "react-router-dom";
const Routing = () => {
  return (
    <div className="flex-container">
      <div className="side-bar">
        <div>
          <Link to="electronics">Electronics</Link>

          <Link to="jwellery">Jwellery</Link>
          <Link to="textile">Textile</Link>

       

          <Link to="plastic">Plastic</Link>
        </div>
      </div>
      <div className="right-side">
        <Outlet />
      </div>
    </div>
  );
};

export default Routing;
