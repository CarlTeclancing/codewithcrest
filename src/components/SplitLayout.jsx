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