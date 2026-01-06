import React from 'react'

const UserList = () => {
  const users = [
    { id: 1, username: "Alice", age:22 },
    { id: 2, username: "Bob", age:23},
    { id: 3, username: "Charlie", age:24 }
  ];
  
  return (
    <div>
      <h2>UserList</h2>
      {users.map(({id, username, age}) => (
        <li key={id}>
          <span>{username}</span> <br />
          <span>{age}</span>
        </li>
      ))}   
    </div>
  )
}

export default UserList