import React, {useState ,useEffect} from 'react'
import Img1 from '../../assets/img1.jpg'
import './setting.css'
function Setting() {
  return (
    <div className='dashboard-container'>
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
        
        <div className="post-profile profile-box" style={{}}>
            <div style={{display:'flex', justifyContent:'right'}}>
                <div style={{display:'flex', justifyContent:'space-evenly'}}>
                    <div className="post-profile">
                        <img src={Img1} alt="" />
                        <div className="post-profile-info">
                            <span className="name">De Duke Shape Kenzo</span>
                            <span className="time">Pro Member</span>
                            <span className="time">37% journey complete</span>
                        </div>
                    </div>
                    <div className="post-profile-info h">
                        <span style={{marginBottom:'8px'}}>-@designerX</span>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <button>
                                <i class="bi bi-fire" style={{marginRight:'10px'}}></i>
                                Streak Saver
                            </button>
                            <button>
                                <i class="bi bi-bug" style={{marginRight:'10px'}}></i>
                                Bug Hunter
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='btnl'>
                        <i class="bi bi-pen" style={{marginRight:'10px'}}></i>
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Setting