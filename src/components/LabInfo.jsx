import React from 'react'

function LabInfo({ title, hashtags, task, deadline, point, active }) {
  return (
    <div className='lab-info'>
        <div className="headline">
            <h3>{title}</h3>
            <div  style={{display:'flex' ,gap:'10px'}}>
                {hashtags.map((hashtag ,idx) => (
                    <span className="hashtags" key={idx}>{hashtag}</span>
                ))}
            </div>
        </div>

        <p className='task'>{task}</p>

        <div className="bottom-line">
            <div style={{display:'flex' ,alignItems:'center' ,gap:5}}>
                <div className="deadline">
                    <i class="bi bi-calendar-check"></i>{' '}
                    <span>{deadline}</span>
                </div>
                <div className="points">
                    <i class="bi bi-star-fill"></i>
                    <span>{point}</span>
                </div>
            </div>
            <div>
                <button className={active?'':'inactive-btn'}>{active ? 'Submit lab':'Start lab'}</button>
            </div>
        </div>
    </div>
  )
}

export default LabInfo