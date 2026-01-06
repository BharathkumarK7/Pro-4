import React from 'react'

const Product = () => {
  const productInfo = [
    { ProductName: "Laptop", Price: 1000 },
    { ProductName: "Mouse", Price: 25 },
    { ProductName: "Keyboard", Price: 75 }
  ]
  return (
    <div>
      <h2>Product</h2>
      {productInfo.map(({ProductName, Price}) => (
        <ul key={Math.random()}>
          <li>Name: {ProductName}</li>
          <li>Price: {Price}</li>
        </ul>
      ))}
    </div>
  )
}

export default Product