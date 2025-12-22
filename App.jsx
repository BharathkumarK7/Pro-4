import { createContext } from 'react'
import CompA from './comps/CompA' 

export const Data = createContext();



const App = () => {
  const name = "Bharath"
  return (
    <div>
      <Data.Provider value = {name}>
        <CompA />
      </Data.Provider>
    </div>
  )
}

export default App;  