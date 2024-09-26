import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Sorry the page you are looking for does not exist</p>
      <Link to={"/"}>Take me back</Link>
    </div>
  )
}

export default NotFound