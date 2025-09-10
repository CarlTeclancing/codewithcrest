import React from 'react'

function Resource({name,type,pic,hashtags,date}) {
  return (
    <div className='resource-box'>
        <div className="post-profile">
            <img src={pic} alt="" />
            <div className="post-profile-info">
                <span className="name">{name}</span>
                <span className="time">{type}</span>
            </div>
        </div>

        <div style={{display:'flex' ,gap:10 ,padding:'10px 0px'}}>
          {hashtags.map((hashtag ,idx) => (
            <span className='hashtag' key={idx}>#{hashtag}</span>
          ))}

        </div>
        
        <div className="headline">
            <span style={{color:'grey', fontSize:'small'}}>Added: <span className='add-date'>{date}</span></span>
            <button>Download</button>
        </div>
    </div>
  )
}

export default Resource