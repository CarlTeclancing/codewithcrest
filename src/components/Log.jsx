import React from 'react'

function Log({title, message, time}) {
  return (
    <div className='log'>
        <h4>{title}</h4>
        <p>{message}</p>
        <span>{time}</span>
    </div>
  )
}

export default Log