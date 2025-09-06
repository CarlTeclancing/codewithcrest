import React ,{useState ,useEffect} from 'react'
import GuideLines from '../../components/GuideLines'

const Submission = () => {

  const [submissions ,setSubmissions] = useState()
  const [error ,setError] = useState('')
  const [loading ,setLoading] = useState(false)

  return (
    <div className='dashboard-container'>

      <div className="box-updates">
        <div className="box">
          <p>Labs Submited</p>
          <span className='yellow'>--</span>
          <p>--<span></span> Vs Last Month</p>
        </div>
        <div className="box">
          <p>Pending Review</p>
          <span className='yellow'>--</span>
          <p>--<span></span> Vs Last Month</p>
        </div>
        <div className="box">
          <p>Rejected</p>
          <span className='yellow'>--</span>
          <p>--<span></span> Vs Last Month</p>
        </div>
        <div className="box">
          <p>Total submission</p>
          <span className='yellow'>--</span>
          <p>--<span></span> Vs Last Month</p>
        </div>
      </div>

      <div className="updates">
        <h3>Recent Submissions</h3>
        <table>
         <thead>
           <tr>
               <th>Lab Title</th>
               <th>Date Submited</th>
               <th>Status</th>
               <th>Feedback</th>
               {/* <th>Points Gained</th> */}
               <th>Action</th>
           </tr>
         </thead>
         <tbody>
           <tr>
            <td>Task</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            {/* <td>0</td> */}
            <td className='actions'></td>
           </tr>
         </tbody>
           </table>
      </div>

      <GuideLines />
    </div>
  )
}

export default Submission
