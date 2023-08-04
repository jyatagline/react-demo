import React, { useState } from "react";

const Login = ({ login, display, setIsDisplay }) => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  function verifyDetails() {
    if (user.name == "jay" && user.password == "123") {
      console.log(user);

      login();
      setUser(user);

      setIsDisplay("none");
    } else {
      alert("Please enter proper credentials");
    }
  }
  return (
    <div style={{ display, margin: "10%" }}>
      <h2 style={{ padding: "18px 0px" }}>Login Form</h2>

      <div style={{ padding: "18px 0px" }}>
        <input
          style={{ padding: "10px 20px" }}
          placeholder="Enter your username"
          onChange={(event) => {
            setUser({
              ...user,
              name: event.target.value,
            });
          }}
        />
      </div>
      <div>
        <input
          style={{ padding: "10px 20px" }}
          type="password"
          placeholder="Enter your password"
          onChange={(event) => {
            setUser({
              ...user,
              password: event.target.value,
            });
          }}
        />
      </div>
      <button onClick={verifyDetails} className="login-but">
        Login
      </button>
    </div>
  );
};

export default Login;
