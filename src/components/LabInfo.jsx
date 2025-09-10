import React from 'react'

function LabInfo({ id, title, hashtags, task, deadline, point, active, onClick, open }) {
  return (
    <div className={open ? 'lab-info-close':'lab-info'}>
        <div className="headline">
            <span className='lab-title'>{title}</span>
            {/* <div  style={{display:'flex' ,gap:'10px'}}>
                {hashtags.map((hashtag ,idx) => (
                    <span className="hashtags" key={idx}>{hashtag}</span>
                ))}
            </div> */}
        </div>

        <p className='task'>{task}</p>

        <div className="bottom-line">
            {/* <div style={{display:'flex' ,alignItems:'center' ,gap:5}}>
                <div className="deadline">
                    <i class="bi bi-calendar-check"></i>{' '}
                    <span>{deadline}</span>
                </div>
                <div className="points">
                    <i class="bi bi-star-fill"></i>
                    <span>{point}</span>
                </div>
            </div> */}
            <div>
                <button onClick={()=>onClick(id)} className={active?'':'inactive-btn'}>{active ? 'Submit lab':'Start lab'}</button>
            </div>
        </div>
    </div>
  )
}

export default LabInfo