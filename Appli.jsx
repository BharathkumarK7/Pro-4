import React from 'react'

const Appli = () => {
  const appliances = [
    {appliance: "Fridge", cap: "250L", price: "$500"},
    {appliance: "Heater", cap: "20 Liters", price: "$150"},
    {appliance: "Washing Machine", cap: "7kg", price: "$700"}
  ]
  return (
    <div>
      <h2>Appliances</h2>

      {appliances.map(({appliance, cap, price}) => (
        <ul key = {Math.random}>
          <li>Name: {appliance}</li>
          <li>Capacity: {cap}</li>
          <li>Price: {price}</li>
        </ul>
      ))}

    

    </div>
  )}

export default Appli