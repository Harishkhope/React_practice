import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div>
      <h1>im signup page</h1>
      <Link to="/login" className=" m-3 btn btn-success">Already a user</Link>
    </div>
  )
}
