import React from 'react'

const GenderSelection = ({state,setUsers}) => {
  return (
    <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            margin: "20px",
          }}
        >
          <div>
            <input
              type="radio"
              name="gender"
              value="all"
              defaultChecked
              onChange={() => setUsers(state)}
            />
            All
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={() =>
                setUsers(state.filter((data) =>
                
                
                data.gender === "male" && data.dob.age>=50))
              }
            />
            Male
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={() =>
                setUsers(state.filter((data) => data.gender === "female"))
              }
            />
            Female
          </div>
        </div>
  )
}

export default GenderSelection
