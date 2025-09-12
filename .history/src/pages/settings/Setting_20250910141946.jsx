import React, {useState ,useEffect} from 'react'

function Setting() {
  return (
    <div>
         <div style={{display:'flex', justifyContent:'space-between'}}>
              <h2>Settings</h2>
              <div style={{display:'flex', alignItems:'center'}}>
                <button>
                    Export</button>
                <button className='btnl'>Save Changes</button>
              </div>
        </div>

    </div>
  )
}

export default Setting