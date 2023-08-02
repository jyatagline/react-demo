import React from 'react'

const UserTable = ({users}) => {
  return (
    <table style={{ width: "100%", textAlign: "center" }} border= 
    "1" rules='all'>
    <thead style={{padding:"10px"}}>
      <tr>
        <th>IMAGE</th>
        <th>NAME</th>
        <th>GENDER</th>
        <th>EMAIL</th>
        <th>AGE</th>
      </tr>
    </thead>
    <tbody>
      {users.map((ele) => {
        return (
          <tr key={ele.cell}>
            <td key={ele.location.number}>
              <img src={ele.picture.medium} alt={'phot'}/>
            </td>
            <td  key={ele.location.number}>
              {ele.name.first}
              {ele.name.last}
            </td>
            <td  key={ele.location.number}>{ele.gender}</td>
            <td  key={ele.location.number}>{ele.email}</td>
            <td  key={ele.location.number}>{ele.dob.age}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
  )
}

export default UserTable
