import React from 'react'

const New = () => {
  const Newm = [
    {M:"M1 Competition", price: "$1500"},
    {M:"M2 Competition", price: "$1700"},
    {M:"M3 Competition", price: "$2000"},
    {M:"M4 Competition", price: "$2500"},
    {M:"M5 Competition", price: "$3000"},
    {M:"M6 Competition", price: "$3500"},
  ]
  return (
    <div>
      <h1>M1 Competition</h1>
      {Newm.map (({M,price} )=> (
        <ul key = {Math.random()}>
          <li>Bayerish Moterin Werke {M} costs {price}</li>
        </ul>
      ))}
    </div>
  )
}

export default New;