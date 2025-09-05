import React from 'react'

const Lab = () => {
  return (
        <div className="lab">
            <div className="col-1">
                <h1>User Profile in react js</h1>
                <div className="tags">
                    <span>#javascript</span>
                    <span>#php</span>
                    <span>#frontdevelopement</span>
                    <span>#react</span>
                </div>
            </div>
            <div className="col">
                <p>Create interactive loops using for, while, and for Each methods. Implement counter functionality and array manipulation techniques.</p>

            </div>
            <div className="col-1">
                <div className="right">
                    <div className="sec">
                        <i class="bi bi-calendar-check"></i>
                        <span>Due in 2 days</span>
                    </div>
                    <div className="sec">
                        <i class="bi bi-star-fill"></i>
                        <span>50 pts</span>
                    </div>
                </div>
                <button className="btn-primary">Submit Lab</button>
            </div>
        </div>
  )
}

export default Lab
