import React from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { useState } from 'react-router-dom'
import SplitLayout from '../../components/SplitLayout'
function Login() {

  const [email, setEmail]= useState("");
  const [password, setEmail]= useState("");
  return (
    <SplitLayout>
        <h2>Welcome Back to <br /> <span>CODE<span>with</span>CREST</span></h2>
        <p>Meet and share your experience with others across the globe.</p>

        <form action="">
            <label htmlFor="">Email Address</label>
            <input type="email" name="" id="" placeholder='Enter your email address'/><br /><br />
                
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" placeholder='Enter your password'/> <br/><br/>

            <Link>Forgotten Password</Link> <br /> <br />

            <button>Login</button>
        </form>

        <p>Do not have an account? <Link to="/step1">Register</Link></p>
    </SplitLayout>
  )
}

export default Login