import React from 'react'
import { Link } from 'react-router-dom'
import SplitLayout from '../../components/SplitLayout'
function Step3() {
  return (
    <SplitLayout>
        <h2>Personal <span>Information</span> </h2>
        <p>Meet and share your experience with others across the globe.</p>

        <div className="flex">
            <div className="step">
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

        <div className="assist step3">
            <h4>Challenge Type</h4><br />
            <div className="box-suggest">
                <div className="suggest">
                    <span>Web Dev</span>
                </div>
                <div className="suggest">
                    <span>Algorithm</span>
                </div>
                <div className="suggest">
                    <span>Cloud</span>
                </div>
                <div className="suggest">
                    <span>Database</span>
                </div>
                <div className="suggest">
                    <span>Mobile</span>
                </div>
                <div className="suggest">
                    <span>System Design</span>
                </div>
            </div>
        </div>

        <h4>Duration</h4>

        <div class="query">
            <div class="query1">
                <input type="radio" className="radio" name="Enquiry" /><label for="">3 months</label>
            </div>
            <div class="query1">
                <input type="radio" className="radio" name="Enquiry" /><label for="">6 months</label>
            </div>
            <div class="query1">
                <input type="radio" className="radio" name="Enquiry" /><label for="">9 months</label>
            </div>
       </div>

        <div className="buttons">
            <Link className='back' to='/step2'>Back</Link>
            <Link className='next-step' to='/step4'>Next</Link>
        </div>
    </SplitLayout>
  )
}

export default Step3