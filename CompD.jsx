import React, {useContext}from 'react'
import { DataContext } from '../App'

const CompD = () => {
  const name = useContext(DataContext);
  return (
    <div>CompD <br />
      Hello I'm {name}
    </div>
  )
}

export default CompD;