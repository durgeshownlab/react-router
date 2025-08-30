import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div>
      <p>Page Not Found!</p>
      <button onClick={()=>navigate("/")}>Go Home</button>
    </div>
  )
}

export default NotFound
