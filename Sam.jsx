import React from 'react'

const sam = () => {
  const Sseries = [
    {Mobile: "Samsung", Model: "S25", Performance:"Low"},
    {Mobile: "samsung", Model: "S25+", Performance:"Mid"},
    {Mobile: "samsung", Model: "S25 Ultra", Performance:"High"}
  ]

  return (
    <div>
      
      <h1>SAMSUNG</h1>
      {Sseries.map(({Mobile,Model,Performance}) => (
        <ul key = {Math.random()}>
          <li>{Mobile}</li>
          <li>{Model}</li>
          <li>{Performance}</li>
        </ul>
      ))}

      </div>
  )
}

export default sam