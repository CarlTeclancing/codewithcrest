import React from 'react'
import Layout from '../../components/layout/Layout'
import GuideLines from '../../components/GuideLines'

const Submission = () => {
  return (
    <Layout>
        <h1>Submition <span>Analytics</span> </h1>
      <div className="box-updates">
        <div className="box">
          <p>Weekly Task</p>
          <span className='yellow'>--</span>
          <p>--<span></span> Vs Last Month</p>
        </div>
        <div className="box">
          <p>Total Points</p>
          <span className='yellow'>--</span>
          <p>--<span></span> Vs Last Month</p>
        </div>
        <div className="box">
          <p>Task Completed</p>
          <span className='yellow'>--</span>
          <p>--<span></span> Vs Last Month</p>
        </div>
        <div className="box">
          <p>Pending Tasks</p>
          <span className='yellow'>--</span>
          <p>--<span></span> Vs Last Month</p>
        </div>
      </div>

    <div className="updates">
        <h3>Resent Submissions</h3>
        <table>
         <thead>
           <tr>
               <th>Lab Title</th>
               <th>Date Submited</th>
               <th>Status</th>
               <th>Feedback</th>
               <th>Points Gained</th>
               <th>Action</th>
           </tr>
         </thead>
         <tbody>
           <tr>
            <td>Task</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td className='actions'></td>
           </tr>
         </tbody>
           </table>
      </div>

      <GuideLines />
    </Layout>
  )
}

export default Submission
