import React from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { useState } from 'react-router-dom'
import SplitLayout from '../../components/SplitLayout'
function Login() {

  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");

  const handleSubmit= async (e) =>{
    e.preventDefault();
    try {
      // Send login request to your backend
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // If success, you get data from backend
      console.log(res.data);
      alert("Login successful!");
      
  }
  return (
    <SplitLayout>
        <h2>Welcome Back to <br /> <span>CODE<span>with</span>CREST</span></h2>
        <p>Meet and share your experience with others across the globe.</p>

        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              name="email" 
              placeholder='Enter your email address'
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              /><br /><br />
                
            <label htmlFor="">Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder='Enter your password'
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              /> <br/><br/>

            <Link>Forgotten Password</Link> <br /> <br />

            <button>Login</button>
        </form>

        <p>Do not have an account? <Link to="/step1">Register</Link></p>
    </SplitLayout>
  )
}

export default Login