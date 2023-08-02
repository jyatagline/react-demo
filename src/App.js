import "./App.css";
import Nav from "./components/Navbar/Nav";
import Users from "./components/State/Users";
import User from "./components/JSON-USER/User";

import { Routes, Route } from "react-router-dom";
import Routing from "./components/Routing/Routing";
import Contact from "./components/Contact/Contact";
import Electronics from "./components/Routing/Electronics";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Users />} />

        <Route path="/axios" element={<User />} />
        <Route path="/routing" element={<Routing />}>

        <Route path="/routing/electronics" element={<Electronics/>}/>


        </Route>
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
