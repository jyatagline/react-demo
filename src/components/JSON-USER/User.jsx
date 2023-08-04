import { useState, useEffect } from "react";
import "./User.css";
import { sendUserDetails, getUsersData, deleteUserData } from "../../API/userData";

function User() {
  const [user, setUser] = useState("");
  const [gender, setGender] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // getUsersData(setUsers);
    getUsersData(setUsers);
  }, []);

  //   useEffect(() => {
  //     console.log("useEffect called");
  //   }, []);

  const addUserData = () => {
    // console.log(user, gender);
    let newUser = {
      name: user,
      gender: gender,
    };
    if (user.length > 1 && gender.length > 1) {
      sendUserDetails(newUser, setUsers, setUser, setGender);
      setUser(" ");
      setGender("");
    }

    // setUser(' ')
    else {
      alert("please fill proper details");
    }
  };

  //   const getUsers = () => {
  //     getUsersData(setUsers);
  //   };

  const deleteUser = (id) => {
    deleteUserData(id, setUsers);
  };
  return (
    <div className="container">
      <h2 style={{ padding: "16px 0px" }}> Add New User</h2>
      <p style={{ color: "red", margin: "15px" }}>
        This data will get stored on the JSON Server
      </p>
      <input
        value={user}
        type="text"
        placeholder="Enter User Name"
        onChange={(event) => {
          setUser(event.target.value);
          console.log(setUser);
        }}
      />
      <div>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(event) => {
            setGender(event.target.value);
            console.log(setGender);
          }}
        />
        male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(event) => {
            setGender(event.target.value);
          }}
        />
        female
      </div>

      <button
        className="login-but"
        onClick={addUserData}
        style={{ margin: "15px 0px" }}
      >
        Add User
      </button>

      {/* <button onClick={getUsers}>Get Users</button> */}

      <div style={{ padding: "20px 0px" }}>
        {users.length > 0 && (
          <table
            border={1}
            rules="all"
            style={{ margin: "auto", width: "500px", cursor: "pointer" }}
          >
            <thead>
              <tr>
                <th>NAME</th>
                <th>GENDER</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.gender}</td>
                    <td>
                      <button
                        className="deleteBut"
                        onClick={() => {
                          deleteUser(user.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default User;
