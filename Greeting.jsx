import React from 'react'

const Greeting = () => {
  const greet= "Hello!";
  const name = "Bharath";
  const date = new Date(); 
  const time = new Date().getHours();
  return (
    <div>
      <h1>Greet : {greet}</h1>
      <p>Date : {date.getDate()}</p>
      <p>Time : {time}</p>
      <p>Name : {name}</p>
    </div>
  )
}

export default Greeting