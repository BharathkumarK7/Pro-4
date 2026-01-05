import React from 'react'
import { useEffect } from 'react'



const BasicEffect = () => {
  useEffect(() => {
    console.log('BasicEffect mounted')
  }, [])

  
  return (
    <div>BasicEffect
      <h1>Check the Console to see the Message.</h1>
    </div>
  )
}

export default BasicEffect