import React from 'react'

const Productinfo = () => {
  const product = {
    name : "Laptop", price: 1200, Availability: "true",
    performance: "High performance laptop suitable for gaming and work." 

  }
  
  return (
    <div>
      <h1>Product Name: {product.name}</h1>
      <h3>Price: ${product.price}</h3>
      <h3>In Stock: {product.Availability ? "Yes" : "No"}</h3>
      <p>Description: {product.performance}</p> 
    </div>
  )
}

export default Productinfo