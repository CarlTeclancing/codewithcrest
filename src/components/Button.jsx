import React from 'react'
import './button.css';

function Button( {value} ) {
  return (
    <button className='btn'>
        {value}
    </button>
  )
}

export default Button