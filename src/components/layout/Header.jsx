import React from 'react'
import  './layout.css'
import Img1 from '../../assets/img1.jpg'
function Header() {
  return (
    <div className='head'>
      <h2 className="logo"><span>CODE</span>with<span>CREST</span></h2>
        <div>
            <input type="text" className='search' placeholder='search...'/>
        </div>
        <div className="profile">
            <p className='name'>De Duke Kenzo</p>
            <img src={Img1} alt="" />
        </div>
    </div>
  )
}

export default Header