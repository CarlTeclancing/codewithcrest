import React, { useState ,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SplitLayout from '../../../components/SplitLayout'
import { HOST_NAME } from '../../../../globals';
import UserContext from '../../../providers/userProvider';


function Login() {

  const navigate = useNavigate()
  const {user ,setUser} = useContext(UserContext)
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [loading ,setLoading] = useState(false)
  const [error ,setError] = useState('')

  const handleSubmit= async (e) =>{
    e.preventDefault();
    setLoading(true)
    setError('')
    try {
      
      const response = await fetch(`${HOST_NAME}/api/auth/login` ,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({email ,password})
      })
      const data = await response.json()
      console.log(data);
      if(response.ok){
        let obj = {token:data.token, email:data.userData.email, profile:data.profile || {} ,id:data.userData.id ,modules:data.modules || [] ,labs:data.labs || []}
        await localStorage.setItem('user' ,JSON.stringify(obj))
        setUser(obj)
        navigate("/dashboard")
      }else{
        setError(data.error)
      }
    } 
    catch (err) {
      // If backend returns error
      console.error(err.response?.data || err.message);
      setError('Verify your connection')
      // alert(err.response?.data?.error || "Something went wrong");
    }
    finally{
      setLoading(false)
    }
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
            <div style={{padding:'5px', color:'crimson' ,textAlign:'center'}}>
              {error && error}
            </div>
            <button disabled={loading} >Login</button>
        </form>

        <p>Do not have an account? <Link to="/register">Register</Link></p>
    </SplitLayout>
  )
}

export default Login