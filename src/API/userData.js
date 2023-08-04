import axios from "axios";

export const getData = (setUsers, setState) => {
  axios
    .get("https://randomuser.me/api/?results=100")
    .then((res) => {
      console.log(res.data.results);
      setState(res.data.results);
      setUsers(res.data.results);
    })
    .catch((error) => {
      alert("Error While getting the Users Data");
    });
};

export const getUsersData = (setUsers) => {
  axios.get("http://localhost:5001/data").then((res) => {
    console.log(res);
    setUsers(res.data);
  });
};

export const sendUserDetails = (
  userdata,
  setUsers,
  setUser,
) => {

  if (userdata.name && userdata.gender) {
    axios
      .post("http://localhost:5001/data", userdata)
      .then((res) => {
        alert("User successfully Added");
        console.log(userdata.name);
        getUsersData(setUsers);
        setUser(" ");
        // setGender(' ')
        console.log(setUser);
      })
      .catch((error) => {
        alert("Failed to Add User");
      });
  }
};

export const deleteUserData = (id, setUsers) => {
  axios
    .delete(`http://localhost:5001/data/${id}`)
    .then(() => {
      alert("Removed User Successfully");
      getUsersData(setUsers);
    })
    .catch(() => {
      alert("Failed to Remove the Users");
    });
};
export default getData;
