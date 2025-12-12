import React, { useState } from 'react'

const Shoppinglist = () => {
  const [items , setItems] = useState([]);
  const [name , setName] = useState('');
  const [quantity , setQuantity] = useState('');
  return (
    <div>
      <h2>Shopping List</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" />
      </form>
      </div>
  )
}

export default Shoppinglist