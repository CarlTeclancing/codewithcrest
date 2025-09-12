import React, {useState ,useEffect} from 'react'

function Setting() {
  return (
    <div>
         <div style={{display:'flex', justifyContent:'space-between'}}>
              <h2>Settings</h2>
              <div style={{display:'flex', alignItems:'center'}}>
                <button>Clear Form</button>
                <button className='btnl'>Save as draft</button>
              </div>
        </div>

    </div>
  )
}

export default Setting