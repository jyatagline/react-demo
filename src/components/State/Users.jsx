import React, { useState } from "react";
import UserTable from "./UserTable";
import GenderSelection from "./GenderSelection";
import getData from "../../userData";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [state, setState] = useState([]);
  function getUsers() {
    // getData(setUsers, setState);
    getData(setUsers, setState);
  }

  return (
    <div style={{ margin: "10px 20px" }}>
      <h2 style={{ textAlign: "center" }}>User Information</h2>
      <p style={{ padding: "20px", textAlign: "justify", lineHeight: "30px" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ipsam
        voluptatum in corporis, cumque odit est nam modi iure nobis ullam quas
        quasi delectus fugit hic laudantium ad, architecto culpa minus? Ipsum
        fugit itaque eos quod quos. Quae fugit explicabo porro corrupti quos
        magni repellendus tempora id, eius sequi voluptatibus animi earum
        repudiandae iusto sed autem incidunt harum placeat debitis nobis enim?
        Quidem id facere, magni laudantium voluptate unde dolore ducimus sint
        dolor doloremque odit nesciunt similique sequi vel ipsum at? Nam iusto,
        explicabo similique quos ut repellendus dolor dolorum ad voluptatibus
        cupiditate at minus ipsa atque, nostrum saepe quas reprehenderit
        deleniti eligendi voluptatum reiciendis. Saepe, ea! Quas iusto non
        exercitationem perspiciatis vel rerum veniam laborum possimus minus
        dolorum? Error deserunt officia sit. Ab, quis magnam. Animi adipisci
        amet quod corporis ut harum quidem officia, autem quo rerum tenetur
        veniam recusandae accusantium delectus cum iste consequuntur. Excepturi
        porro eum accusantium maxime quidem laudantium minima animi quia
        deleniti rem alias, placeat aspernatur a molestiae natus eveniet,
        asperiores magnam quasi nemo illo! Quod amet quasi eos dolore nostrum a
        illum laborum quia obcaecati sed. Illo repellendus fugit maxime
        explicabo assumenda minima ipsam alias nemo aliquid, maiores perferendis
        fugiat soluta, quos hic fuga?
      </p>
      <div style={{ margin: "15px 20px" }}>
        {users.length <= 0 && (
          <button style={{ padding: "10px 10px" }} onClick={getUsers}>
            Get Users
          </button>
        )}
      </div>

      {users.length > 0 && (
        <GenderSelection state={state} setUsers={setUsers} />
      )}

      {users.length > 0 && <UserTable users={users} />}
    </div>
  );
};

export default Users;
