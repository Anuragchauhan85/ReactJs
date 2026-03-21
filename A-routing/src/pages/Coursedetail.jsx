import React from 'react'
import { useParams } from 'react-router-dom'

const Coursedetail = () => {

  const param =useParams()

  return (
      <div>
          <h1> {param.id} course detail</h1>
    </div>
  )
}

export default Coursedetail