import React ,{useState} from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import SplitLayout, { SplitNav } from '../../../components/SplitLayout'
import { HOST_NAME } from '../../../../globals'


function Register() {
    
    const navigate = useNavigate()
    const [loading ,setLoading] = useState(false)
    const [error ,setError] = useState('')
    const [info ,setInfo] = useState({
        email:'',
        password:'',
        confirm:''
    })
    
    async function register(e){
        e.preventDefault()
        navigate("/personal-information")
return
            setLoading(true)
            setError('')
        try{
            const  {email ,password  ,confirm} = info
            if(confirm != password){
                return setError('Passwords must be identical')
            }
            const response = await fetch(`${HOST_NAME}/api/auth/register` ,{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({...info})
            })
            const data = await response.json()
            console.log(data);
            if(response.ok){
                await localStorage.setItem('user' ,data.user)
                navigate("/personal-information")
            }else{
                setError(data.error)
            }
        }
        catch(e){
            console.log(e);
            
        }finally{
            setLoading(false)
        }
    }

    function handleChange(e){
        setInfo({...info ,[e.target.name]:e.target.value})
    }

  return (
    <SplitLayout>
        <h2>One <span>Platform</span> <br /> Empowering <span>Coding</span> Challenges</h2>
        <p>Meet and share your experience with others across the globe.</p>

        <SplitNav/>

        <form action="" onSubmit={e=>register(e)} >
            <label htmlFor="email">Email Address</label>
            <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder='Enter your email address'
                onChange={handleChange}
                required
            /> <br /><br />

            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder='Enter your password'
                onChange={handleChange}
                required
            /> <br/><br/>
            
            <label htmlFor="confirm">Confirm Password</label>
            <input 
                type="password" 
                name="confirm" 
                id="confirm" 
                placeholder='Confirm your password'
                onChange={handleChange}
                required
            /> <br/><br/>
        
            <div className="agree">
                <input type="checkbox" className='radio' name="" id="terms" required/>
                <label htmlFor="terms">Agree To The Terms And Conditions</label>
            </div>
            <div style={{ padding:5,textAlign:'center' ,color:'crimson' ,fontSize:'smaller'}}> {error ? error : ''} </div>
            <button className='next' disabled={loading}>{!loading ? 'Register & Continue':'wait a moment...'}</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
        
    </SplitLayout>
  )
}

export default Register