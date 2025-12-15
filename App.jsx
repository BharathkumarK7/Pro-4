import { useState } from 'react'
import Counter from './comps/Counter'
import Profile from './comps/Profile.jsx'
import Shoppinglist from './comps/Shoppinglist.jsx'
import CopyInput from './comps/CopyInput.jsx' 
import PopupContent from './comps/PopupContent.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello</h1> 
      <Counter />
      <Profile />
      <Shoppinglist />
      <CopyInput />
        </>
  )
}

export default App
