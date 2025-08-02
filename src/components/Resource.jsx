import React from 'react'

function Resource({name,type,pic,hashtags,date}) {
  return (
    <div className='resource-box'>
        <div className="post-profile">
            <img src={pic} alt="" />
            <div className="post-profile-info">
                <p className="name">{name}</p>
                <p className="time">{type}</p>
            </div>
        </div>
        <span className='hashtag'>{hashtags}</span>
        
        <div className="headline">
            <p>Added: <span className='add-date'>{date}</span></p>
            <button>Download</button>
        </div>
    </div>
  )
}

export default Resource