import React from 'react'
import '../styles/button.css';

function Button( {value} ) {
  return (
    <button className='btn'>
        {value}
    </button>
  )
}

export default Button