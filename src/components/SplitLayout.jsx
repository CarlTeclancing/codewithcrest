import React from 'react'
import Swe from '../assets/Swe.jpg'
import { useLocation } from 'react-router-dom'
import '../styles/authStyles.css'


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

  const location = useLocation()

  return(
    <div className="flex" style={{justifyContent:'space-evenly'}}>
        <div className={location.pathname == '/register' ? 'step active':"step"}>
            <p className='span'>1</p>
            <p>Account set up</p>
        </div>
        <div className={location.pathname == '/personal-information' ? 'step active':"step"}>
            <p className='span'>2</p>
            <p>Personal information</p>
        </div>
        {/* <div className={location.pathname == '/program' ? 'step active':"step"}>
            <p className='span'>3</p>
            <p>Program </p>
        </div> */}
        <div className={location.pathname == '/experience' ? 'step active':"step"}>
            <p className='span'>3</p>
            <p>Experience </p>
        </div>
    </div>
  )
}