import React from 'react'

function CommunityPost({name, time, pic, code, title, description, hashtags}) {
  return (
    <div className='form-post'>
        <div className="post-profile">
            <img src={pic} alt="" />
            <div className="post-profile-info">
                <span className="name">{name}</span>
                <span className="time">{time}</span>
            </div>
        </div>

        <strong>{title}</strong>
        <p style={{color:'grey'}} >{description}</p>
        <p>{code}</p>
        <span className='hashtag'>{hashtags}</span>
        <div className="icons">
        
        </div>
    </div>
  )
}

export default CommunityPost