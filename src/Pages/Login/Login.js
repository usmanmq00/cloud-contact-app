import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div className='upper'>
      <form className='logInForm'>
        <h1 className='logInTitle'>Log In</h1>
        <label>Email <input className="logInField1" type='email' placeholder='Enter Email' /></label><br></br>
        <label>Password <input className="logInField2" type='passwword' placeholder='Enter Password' /></label><br></br>
        <Link to='/'><button className='logInSub' >Log In</button></Link>
      </form>
    </div>
  )
}

export default Login
