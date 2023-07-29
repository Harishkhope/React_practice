import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div>
      <h1>Im login page</h1>
      <Link to="/signup" className='btn btn-success m-3'>Register</Link>
    </div>
  )
}
