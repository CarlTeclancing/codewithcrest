import React, {useState ,useEffect} from 'react'

function Setting() {
  return (
    <div>
 <div style={{display:'flex', justifyContent:'space-between'}}>
              <div style={{display:'flex', alignItems:'center'}}>
                <button className='btnl'>Clear Form</button>
                <button className='btnl'>Save as draft</button>
              </div>
              <button className='button'>Submit</button>
        </div>

    </div>
  )
}

export default Setting