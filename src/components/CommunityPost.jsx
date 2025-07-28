import React from 'react'

function CommunityPost({name, time, pic, code, title, description, hashtags}) {
  return (
    <div className='form-post'>
        <div className="post-profile">
            <img src={pic} alt="" />
            <div className="post-profile-info">
                <p className="name">{name}</p>
                <p className="time">{time}</p>
            </div>
        </div>

        <h4>{title}</h4>
        <p>{description}</p>
        <p>{code}</p>
        <span className='hashtag'>{hashtags}</span>
        <div className="icons">

        </div>
    </div>
  )
}

export default CommunityPost