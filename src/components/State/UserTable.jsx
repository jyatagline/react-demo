import React from 'react'

const UserTable = ({users,page,setPage}) => {


  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= users.length / 10 && selectedPage !== page) {
      setPage(selectedPage)
    }
  }
  return (

    <>
  
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
      {users.slice(page * 10 - 10, page * 10).map((ele) => {
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


  {users.length > 0 && <div className="pagination">
        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>

        {[...Array(users.length / 10)].map((_, i) => {
          return <span key={i} className={page === i + 1 ? "page__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
        })}

        <span onClick={() => selectPageHandler(page + 1)} className={page < users.length / 10 ? "" : "pagination__disable"}>▶</span>
      </div>}
  
  </>
  )
}

export default UserTable
