import React from 'react'

const Users = () => {
  const UserInfo =[
    { Username: "Bharath",
      Email: "bharath@gmail.com",
      Location: "India"
    },
    {
      Username: "JohnWick",
      Email: "john@gmail.com",
      Location: "USA"
    },
    {
      Username: "HarryPotter",
      Email: "harrypotter@gmail.com",
      Location: "UK"

    }
    
  ]
  return (
    <main>
      { UserInfo.map(({Username, Email, Location}) => (
        <ul key={Math.random()}>
          <li>{Username}</li>
          <li>{Email}</li>
          <li>{Location}</li>
        </ul>
      ))}
    </main>
  )
}

export default Users