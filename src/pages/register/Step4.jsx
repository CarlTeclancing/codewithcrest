import React from 'react'
import { Link } from 'react-router-dom'
import SplitLayout from '../../components/SplitLayout'
function Step4() {
  return (
    <SplitLayout>
        <h2>Programming <span>Experience</span> </h2>
        <p>Help us understand your programming background and preferences to provide you with the best possible experience.</p>

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

        <div className="filter">
            <div>
                <label htmlFor="">Preferred Programming Language</label>
                <select name="" id="">
                    <option value="">Select your preferred language</option>
                </select>
            </div>

            <div>
                <label htmlFor="">Programming Experience Duration</label>
                <select name="" id="">
                    <option value="">Select your preferred language</option>
                </select>
            </div>
        </div>

        <div className="bug-level">
            <h4>How often do you code?</h4>
            <div className="checkbox">
                <input type="radio" value="" /><label htmlFor="">Daily</label>
                <input type="radio" value="" /><label htmlFor="">Weekly</label>
                <input type="radio" value="" /><label htmlFor="">Monthly</label>
                <input type="radio" value="" /><label htmlFor="">Occasionally</label>
                <input type="radio" value="" /><label htmlFor="">Rarely</label>
            </div>
            <h4>Describe Your Programming Experience</h4>
            <textarea name="" id="" placeholder='Tell us about your programming journey, projects you have worked on, technologies  you have used, and any notable achievements or challenges you have faced'></textarea>
        </div>

        <div className="buttons">
            <Link className='back' to='/step2'>Back</Link>
            <Link className='next-step' to='/step4'>Next</Link>
        </div>
    </SplitLayout>
  )
}

export default Step4