import "./App.css";
import Nav from "./components/Navbar/Nav";
import Users from "./components/State/Users";
import User from "./components/JSON-USER/User";

import { Routes, Route, Navigate } from "react-router-dom";
import Routing from "./components/Routing/Routing";
import Electronics from "./components/Routing/Electronics";
import { useState } from "react";
import Login from "./components/Login/Login";
import Textile from "./components/Routing/Textile";
import Jwellery from "./components/Routing/Jwellery";
import Plastic from "./components/Routing/Plastic";
import Productdetails from "./components/Routing/ProductDetails";

function App() {
  const [isLoggesIn, setIsLoggedIn] = useState(false);
  const [display, setIsDisplay] = useState("block");

  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
    setIsDisplay("block");
  };
  return (
    <div className="App">
      <Nav logout={logout} isLoggesIn={isLoggesIn} />


    <Login login={login} display={display} setIsDisplay={setIsDisplay} />
   
   
   
  
      {isLoggesIn && (
        <Routes>
          <Route path="/" element={<Users />} />

          <Route path="/axios" element={<User />} />
          <Route path="/routing" element={<Routing />}>
            <Route path=""  element={<Navigate to="electronics" />}/>
            <Route path="electronics" element={<Electronics />} />
            <Route path="textile" element={<Textile />} />
            <Route path="jwellery" element={<Jwellery />} />
            <Route path="plastic" element={<Plastic />} />
          </Route>
          <Route path="/productdetails/:id" element={<Productdetails />} />
          
        </Routes>
      )}
    </div>
  );
}

export default App;
