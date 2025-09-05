import React from 'react'
import { Link } from 'react-router-dom'
import SplitLayout from '../../components/SplitLayout'
function Step2() {
  return (
    <SplitLayout>
        <h2>Personal <span>Information</span> </h2>
        <p>Meet and share your experience with others across the globe.</p>

        <div className="flex">
            <div className={`step ${activeStep== 1 ? 'active': ''}`}>
                <p className='span'>1</p>
                <p>Account set up</p>
            </div>
            <div className={`step ${activeStep== 2 ? 'active': ''}`}>
                <p className='span'>2</p>
                <p>Personal information</p>
            </div>
            <div className={`step ${activeStep== 3 ? 'active': ''}`}>
                <p className='span'>3</p>
                <p>Challenge Preferences & Duration</p>
            </div>
            <div className={`step ${activeStep== 4 ? 'active': ''}`}>
                <p className='span'>4</p>
                <p>Experience & Programming Languages</p>
            </div>
        </div>

        <form action="">
            <label htmlFor="">Full Name</label>
            <input type="text" name="" id="" placeholder='Enter your full name'/><br /><br />
                
            <label htmlFor="">Username</label>
            <input type="text" name="" id="" placeholder='Enter your username'/> <br/><br/>

            <label htmlFor="">Profile Picture</label>
            <input type="file" name="" id="" className='file'/><br/><br/>

            <label htmlFor="">Phone number</label>
            <input type="number" name="" id="" placeholder='Enter your phone number'/> <br/><br/>

            <Link className='next' to="/step3">Next Step</Link>
        </form>
    </SplitLayout>
  )
}

export default Step2