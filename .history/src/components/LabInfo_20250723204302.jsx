import React from 'react'

function LabInfo({ title, hashtags, task, deadline, point }) {
  return (
    <div className='lab-info'>
        <div>
            <div className="headline">
                <h3>{title}</h3>
                <div className="hashtags">
                    <span>{hashtags}</span>
                </div>
            </div>
            <p>Create interactive loops using for, 
                while, and for Each methods. Implement counter 
                functionality and array manipulation techniques.</p>
            <div className="bottom-line">
                <div className="deadline"></div>
                <div className="points"></div>
            </div>
        </div>
    </div>
  )
}

export default LabInfo