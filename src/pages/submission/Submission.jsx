import React ,{useState ,useEffect, useContext} from 'react'
import Modal from 'react-responsive-modal'
import GuideLines from '../../components/GuideLines'
import { HOST_NAME } from '../../../globals'
import UserContext from '../../providers/userProvider'

const Submission = () => {

  const {user} = useContext(UserContext)
  const [submissions ,setSubmissions] = useState([])
  const [error ,setError] = useState('')
  const [viewCode, setViewCode] = useState(false)
  const [loading ,setLoading] = useState(false)
// console.log(user);

  async function getSubmissions(){
    setLoading(true)
    try{
      const response = await fetch(`${HOST_NAME}/api/user-lab/user/${user.id}`)
      const data = await response.json()
      // console.log(data);
      
      if(response.ok){
        setSubmissions(data)
      }else{
        setError(data.error)
      }
    }
    catch(e){ 
      console.log(e.message);
      setError('Verify  your connection')      
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    getSubmissions()
  },[0])

  function getColor(code){
    switch(code){
      case 'started':
        return 'blue'
      case 'completed':
        return 'green'
      default:
        return 'grey'
    }
  }

  return (
    <div className='dashboard-container'>

      {/* <div className="box-updates">
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
      </div> */}

        <CodeModal showModal={viewCode} setShowModal={setViewCode} />

      <div className="updates">
        <h3>Submissions</h3>
        <table>
         <thead>
           <tr>
               <th>Lab Title</th>
               <th>Date Submited</th>
               <th>Status</th>
               {/* <th>Feedback</th> */}
               {/* <th>Points Gained</th> */}
               <th>Action</th>
           </tr>
         </thead>

         <tbody>
          {
            submissions && submissions.map((sub ,idx) => {
              return(
                <tr key={sub.id} >
                  <td>{sub.title}</td>
                  <td>{sub.submitedAt ? sub.submitedAt.split('T')[0] : '---'}</td>
                  <td style={{color:getColor(sub.status)}} >{sub.status}</td>
                  {/* <td>0</td> */}
                  {/* <td>0</td> */}
                  <td className='actions'>  <button onClick={()=>setViewCode(sub.code)} > <i className='bi bi-eye'></i>view code</button> </td>
                </tr>
              )
            })
          }

          {submissions && !error && submissions.length == 0 && <tr> <td colSpan={5} style={{textAlign:'center', padding:10, color:'grey', fontWeight:'bold', fontSize:'large'}}> No Submissions </td> </tr>}

          {error &&  <tr> <td colSpan={5} style={{textAlign:'center', padding:10, color:'crimson', fontWeight:'bold', fontSize:'large'}}> {error} </td> </tr>}

         </tbody>
        </table>
      </div>

      <GuideLines />
    </div>
  )
}

export default Submission

const CodeModal = ({showModal, setShowModal}) => {

  return(
    <Modal open={showModal} onClose={()=>setShowModal(false)} showCloseIcon={false}>
      <div>
        <h3> Submitted Code </h3>
        <textarea  style={{border:'none', minWidth:'400px', height:'500px'}} disabled value={showModal} ></textarea>
      </div>
    </Modal>
  )
}
