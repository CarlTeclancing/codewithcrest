import React from 'react'

function LabInfo({ title, hashtags, task, deadline, point }) {
  return (
    <div className='lab-info'>
        <div>
            <div className="headline">
                <h3>{title}</h3>
                <div >
                    <span className="hashtags">{hashtags}</span>
                </div>
            </div>
            <p className='task'>{task}</p>
            <div className="bottom-line">
                <div className="deadline">
                    <i class="bi bi-calendar-check"></i>
                    <span>{deadline}</span>
                </div>
                <div className="points">
                    <i class="bi bi-star-fill"></i>
                    <span>{point}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LabInfo