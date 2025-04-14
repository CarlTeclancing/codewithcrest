
import React from 'react'
import Button from './Button'

function Navigation() {
  return (
    <div className='nav'>
        <h1>CwC</h1>
        <div className="nav-el">
            <a href='home'>Home</a>
            <a href='home'>About</a>
            <a href='home'>Contact</a>
            <a href='home'>Services</a>
        </div>

        <Button value={"Register"} />
    </div>
  )
}

export default Navigation