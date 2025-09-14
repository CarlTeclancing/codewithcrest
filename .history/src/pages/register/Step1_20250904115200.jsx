import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SplitLayout from '../../components/SplitLayout'

function Step1() {
    const activeStep = 1;
    const navigate = useNavigate(); 

    const handleNext = () => {
        navigate("/step2"); 
    };

    const [email, setEmail]= useState("");
      const [password, setPassword]= useState("");
    
  return (
    <SplitLayout>
        <h2>One <span>Platform</span> <br /> Empowering <span>Coding</span> Challenges</h2>
        <p>Meet and share your experience with others across the globe.</p>

        <div className="flex">
            <div className={`step ${activeStep=== 1 ? 'active': ''}`}>
                <p className='span'>1</p> 
                <p>Account set up</p>
            </div>
            <div className={`step ${activeStep=== 2 ? 'active': ''}`}>
                <p className='span'>2</p>
                <p>Personal information</p>
            </div>
            <div className={`step ${activeStep=== 3 ? 'active': ''}`}>
                <p className='span'>3</p>
                <p>Challenge Preferences & Duration</p>
            </div>
            <div className={`step ${activeStep=== 4 ? 'active': ''}`}>
                <p className='span'>4</p>
                <p>Experience & Programming Languages</p>
            </div>
        </div>

        <form onSubmit={handleSubmit}>
            <label htmlFor="">Email Address</label>
            <input 
             type="email"
             name="email" 
             placeholder='Enter your email address'
             value={email}
             onChange={(e)=> setEmail(e.target.value)}
             /> <br /><br />

            <label htmlFor="">Password</label>
            <input 
             type="password" 
             name="password"  
             placeholder='Enter your password'
             value={password}
             onChange={(e)=> setPassword(e.target.value)}/> <br/><br/>
            
            <label htmlFor="">Confirm Password</label>
            <input 
             type="password" 
             name=""  
             placeholder='Enter your password again'
             value={cpassword}
             onChange={(e)=> setCpassword(e.target.value)}
             /> <br/><br/>
        
            <div className="agree">
                <input type="checkbox" className='radio' name="" id="" />
                <label htmlFor="">Agree To The Terms And Conditions</label>
            </div>
            <button type="button" className="next" onClick={handleNext}>
             Register & Continue
            </button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
        
    </SplitLayout>
  )
}

export default Step1