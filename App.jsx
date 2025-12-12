import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './comps/Counter'
import Profile from './comps/Profile.jsx'
import Shoppinglist from './comps/Shoppinglist.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello</h1> 
      <Counter />
      <Profile />
      <Shoppinglist />
        </>
  )
}

export default App
