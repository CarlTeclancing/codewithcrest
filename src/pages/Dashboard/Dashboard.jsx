import React from 'react'
import Layout from '../../components/layout/Layout'
import './dashboard.css'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <Layout>
      <h1>Welcome <span>De Duke Kenzo</span> </h1>
      <p>Here's an overview of your weekly activities</p>

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
                {/* graph */}
      <div className="graph">??Graph??</div>

      <div className="updates">
        <h3>Updates</h3>
        <table>
         <thead>
           <tr>
               <th>Progress</th>
               <th>Today</th>
               <th>This Week</th>
               <th>This Month</th>
               <th>This Year</th>
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
    </Layout>
  )
}

export default Dashboard