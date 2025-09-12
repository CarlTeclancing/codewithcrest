import React, {useState ,useEffect} from 'react'

function Setting() {
  return (
    <div>
         <div style={{display:'flex', justifyContent:'space-between'}}>
              <h3>Settings</h3>
              <div style={{display:'flex', alignItems:'center'}}>
                <button className='btnl'>Clear Form</button>
                <button className='btnl'>Save as draft</button>
              </div>
        </div>

    </div>
  )
}

export default Setting