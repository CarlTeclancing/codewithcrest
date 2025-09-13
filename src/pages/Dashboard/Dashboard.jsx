import {useState ,useEffect ,useContext} from 'react'
import './dashboard.css'
import { HOST_NAME } from '../../../globals'
import UserContext from '../../providers/userProvider'

function Dashboard() {

  const {user} = useContext(UserContext)
  const [summary ,setSummary] = useState()
  const [loading , setLoading] = useState(false)
  const [error ,setError] = useState('')

  async function getSummary(){
    try{
      setLoading(true)
      const response = await fetch(`${HOST_NAME}/api/summary/${'user.id'}`)
      const data = await response.json()
      if(response.ok){
        // setSummary(data.summary)
      }else{
        setError(data.error)
      }
    }
    catch(e){
      console.log(e.message);
      
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    getSummary()
  },[0])

  

  return (
    <div className='dashboard-container'>
      <div style={{lineHeight:'90%'}}>
        <h1>Welcome <span style={{color:'darkblue'}}>{user.profile && user.profile.name}</span> </h1>
        <p>Here's an overview of your weekly activities</p>
      </div>

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
      {/* <div className="graph">??Graph??</div> */}

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
    </div>
  )
}

export default Dashboard