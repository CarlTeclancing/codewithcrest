import React from 'react'
import Swe from '../assets/Swe.jpg'


function SplitLayout({children}) {
  return (
    <div className='split-screen'>
        <div className="split-left">
            {children}
        </div>

        <div className="split-right">
            <img src={Swe} alt="coding image" className='login-image'/>
        </div>
    </div>
  )
}

export default SplitLayout

export const SplitNav = () =>{
  return(
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
            <p>Program  & Duration</p>
        </div>
        <div className="step">
            <p className='span'>4</p>
            <p>Experience </p>
        </div>
    </div>
  )
}