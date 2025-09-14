import React from 'react'
import { Link } from 'react-router-dom'
import SplitLayout from '../../components/SplitLayout'
function Step1() {

    const activeStep = 1;
  return (
    <SplitLayout>
        <h2>One <span>Platform</span> <br /> Empowering <span>Coding</span> Challenges</h2>
        <p>Meet and share your experience with others across the globe.</p>

        <div className="flex">
            <div className={`step ${activeStep== 1 ? 'active': }`}>
                <p className='span'>1</p>
                <p>Account set up</p>
            </div>
            <div className="step">
                <p className='span'>2</p>
                <p>Personal information</p>
            </div>
            <div className="step">
                <p className='span'>3</p>
                <p>Challenge Preferences & Duration</p>
            </div>
            <div className="step">
                <p className='span'>4</p>
                <p>Experience & Programming Languages</p>
            </div>
        </div>

        <form action="">
            <label htmlFor="">Email Address</label>
            <input type="email" name="" id="" placeholder='Enter your email address'/><br /><br />
                {/* <br/> */}
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" placeholder='Enter your password'/> <br/><br/>
            
            <label htmlFor="">Confirm Password</label>
            <input type="password" name="" id="" placeholder='Enter your password again'/> <br/><br/>
        
            <div className="agree">
                <input type="checkbox" className='radio' name="" id="" />
                <label htmlFor="">Agree To The Terms And Conditions</label>
            </div>
            <Link className='next' to="/step2">Register & Continue</Link>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
        
    </SplitLayout>
  )
}

export default Step1