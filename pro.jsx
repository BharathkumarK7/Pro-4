import React from 'react'

const pro = () => {
  const prodx = [
    {prod: "Tv", price: "$400", company: "Sony", Size: "32inch"},
    {prod: "Tv", price: "$500", company: "LG", Size: "40inch"},
    {prod: "Tv", price: "$600", company: "Samsung", Size: "50inch"},
    {prod: "Tv", price: "$700", company: "Panasonic", Size: "60inch"},
    {prod: "Tv", price: "$800", company: "Toshiba", Size: "70inch"}
  ]
  return (
    <div>
      <h2>List of available Televisions</h2>
        {prodx.map(({prod, price, company, size}) => (
          <ul key = {Math.random}>
            <li>Product: {prod}</li>
            <li>Price: {price}</li>
            <li>Brand: {company}</li>
            <li>Size: {size}</li>
          </ul>
        )) }

    </div>
  )
}

export default pro;