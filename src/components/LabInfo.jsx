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
                <div className="deadline">{deadline}</div>
                <div className="points">{point}</div>
            </div>
        </div>
    </div>
  )
}

export default LabInfo