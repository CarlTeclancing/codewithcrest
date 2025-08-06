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
            <label>How often do you code?</label>
            <div className="checkbox">
                <input type="radio" value="" /><label htmlFor="">Daily</label>
                <input type="radio" value="" /><label htmlFor="">Weekly</label>
                <input type="radio" value="" /><label htmlFor="">Monthly</label>
                <input type="radio" value="" /><label htmlFor="">Occasionally</label>
                <input type="radio" value="" /><label htmlFor="">Rarely</label>
            </div>
        </div><br />

        <label>Describe Your Programming Experience</label>
        <textarea name="" id="" placeholder='Tell us about your programming journey, projects you have worked on, technologies  you have used, and any notable achievements or challenges you have faced'></textarea><br />

        <label htmlFor="">What types of projects have you worked on?</label>
        
        <div className='wrap'>
            <div>
                <input type="checkbox" /><label htmlFor="">Web Development</label>
            </div>
            <div>
                <input type="checkbox" /><label htmlFor="">Machine Learning</label>
            </div>
            <div>
                <input type="checkbox" /><label htmlFor="">DevOps/Infrastructure</label>
            </div>
            <div>
                <input type="checkbox" /><label htmlFor="">Mobile Development</label>
            </div>
            <div>
                <input type="checkbox" /><label htmlFor="">Desktop Applications</label>
            </div>
            <div>
                <input type="checkbox" /><label htmlFor="">API Development</label>
            </div>
            <div>
                <input type="checkbox" /><label htmlFor="">Data Science</label>
            </div>
            <div>
                <input type="checkbox" /><label htmlFor="">Game Development</label>
            </div>
            <div>
                <input type="checkbox" /><label htmlFor="">Database Design</label>
            </div>
        </div>
        <div className="buttons">
            <Link className='back' to='/step2'>Back</Link>
            <Link className='next-step' to='/login'>Finish</Link>
        </div>
    </SplitLayout>
  )
}

export default Step4