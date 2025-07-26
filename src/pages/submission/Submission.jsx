import React from 'react'
import Layout from '../../components/layout/Layout'

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


      <div className="col">
        <h3>📌 Submission Guidelines</h3>
        <div className="col-flex-row">
            <div className="col">
                <h3>💡 Tips for Success</h3>
                <ul>
                    <p>• Include screenshots and proper file names</p>
                    <p>• Test your code before submission</p>
                    <p>• Add comments explaining your approach</p>
                    <p>• Follow the lab requirements checklist</p>
                </ul>
            </div>
            <div className="col">
                <h3>❌ Common Rejection Reasons</h3>
                <ul>
                    <p>• Missing required files or documentation</p>
                    <p>• Code doesn\'t run or has syntax errors</p>
                    <p>• Incomplete implementation of requirements</p>
                    <p>• Poor code organization or naming</p>
                </ul>
            </div>
            <div className="col">
                <h3>💡 Tips for Success</h3>
                <span>Get support from our community and instructors</span><br/>
                <span>Join our WhatsApp community for real-time help</span><br/>
                <button className="btn-primary">Contact Admn</button>
            </div>

        </div>
      </div>
    </Layout>
  )
}

export default Submission
