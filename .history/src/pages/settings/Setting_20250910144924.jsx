import React, {useState ,useEffect} from 'react'
import Img1 from '../../assets/img1.jpg'
function Setting() {
  return (
    <div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <h2>Settings</h2>
            <div style={{display:'flex', alignItems:'center'}}>
                <button className='btnl'>
                    <i class="bi bi-download" style={{marginRight:'10px'}}></i>
                    Export
                </button>
                <button>
                    <i class="bi bi-floppy" style={{marginRight:'10px'}} ></i>
                    Save Changes
                </button>
            </div>
        </div>
        
        <div className="lab-info">
            <div className="post-profile">
                <img src={Img1} alt="" />
                <div className="post-profile-info">
                    <span className="name">De Duke Shape Kenzo</span>
                    <span className="time">Pro Member</span>
                    <span className="time">37% journey complete</span>
                </div>
            </div>
            <div className="post-profile-info">
                <span>-@designerX</span>
                <div style={{display:'flex', alignItems:'center'}}>
                    <button className='btnl'>
                        <i class="bi bi-download" style={{marginRight:'10px'}}></i>
                        Export
                    </button>
                    <button>
                        <i class="bi bi-floppy" style={{marginRight:'10px'}} ></i>
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Setting