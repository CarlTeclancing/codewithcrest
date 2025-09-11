import React, {useState ,useEffect} from 'react'

function Setting() {
  return (
    <div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <h2>Settings</h2>
            <div style={{display:'flex', alignItems:'center'}}>
                <button>
                    <i class="bi bi-download" style={{mar}}></i>
                    Export
                </button>
                <button className='btnl'>
                    <i class="bi bi-floppy"></i>
                    Save Changes
                </button>
            </div>
        </div>

    </div>
  )
}

export default Setting