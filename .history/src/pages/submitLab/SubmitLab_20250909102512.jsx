import React ,{useState ,useEffect} from 'react'
import './submitlab.css'
import { Link } from 'react-router-dom'
import LabInfo from '../../components/LabInfo.jsx'
import { HOST_NAME } from '../../../globals.js'
import {Modal} from 'react-responsive-modal'

const lab = [
  { title: 'JavaScript Loops Lab', hashtags:['#Javascript', '#Loops' ,'#Beginner'], task:'Create interactive loops using for while, and for Each methods. Implement counter functionality and array manipulation techniques.' , deadline: 'Due in 2 days', point: '50pts' },
    { title: 'JavaScript Loops Lab', hashtags:['#Javascript', '#Loops' ,'#Beginner'], task:'Create interactive loops using for while, and for Each methods. Implement counter functionality and array manipulation techniques.' , deadline: 'Due in 2 days', point: '50pts' },
];

function SubmitLab() {

  const [labs , setLabs] = useState()
  const [loading ,setLoading] = useState(false)
  const [error ,setError] = useState('')
  const [showModal ,setShowModal] = useState(false)

  async function getLabs(){
    try{
      setLoading(true)
      setError('')
      const response = await fetch(`${HOST_NAME}/api/lab/user/${'user.id'}`)
      const data = await response.json()
      if(response.ok){
        // setLabs(data.labs)
      }else{
        setError(data.error)
      }

    }
    catch(e){
      console.log(e);
      
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    // getLabs()
  },[0])

  return (
    <div className='dashboard-container'>
      
      <SubmitLabModal showModal={showModal} setShowModal={setShowModal} />

      <div style={{lineHeight:'100%'}}>
        <h3>Active lab</h3>
        <div className='labs-container'>
          {lab.slice(0 ,1).map((lab, index) => (
            <LabInfo
              key={index}
              title={lab.title}
              hashtags={lab.hashtags}
              task={lab.task}
              deadline={lab.deadline}
              point={lab.point}
              active={true}
              onClick={()=>setShowModal(true)}
            />
          ))}
        </div>
      </div>

      <div style={{lineHeight:'100%'}}>
        <h3>Available labs</h3>
        <div className='labs-container'>
          {lab.map((lab, index) => (
            <LabInfo
              key={index}
              title={lab.title}
              hashtags={lab.hashtags}
              task={lab.task}
              deadline={lab.deadline}
              point={lab.point}
            />
          ))}
        </div>
      </div>

      <table>

      </table>


      {/* <div className="nav">
        <select name="" id="">
            <option value="">Show All</option>
        </select>
        <div className="bar">
            <Link>Properties</Link>
            <Link>Filter</Link>
            <Link>Sort</Link>
            <Link>Clear All</Link>
        </div>
      </div> */}

      {/* <table>
        <thead>
        <tr>
            <th>Id</th>
            <th>Lab Title</th>
            <th>URL</th>
            <th>Points</th>
            <th>Date</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>01</td>
            <td>JavaScript Loops Assignment</td>
            <td className='url'>https://www.producthunt.com</td>
            <td>832</td>
            <td>Jan 1, 2020</td>
            <td>Delivered</td>
        </tr>
        <tr>
            <td>02</td>
            <td>JavaScript Loops Assignment</td>
            <td className='url'>https://www.producthunt.com</td>
            <td>832</td>
            <td>Jan 1, 2020</td>
            <td>Delivered</td>
        </tr>
        </tbody>
      </table> */}

    </div>
  )
}

export default SubmitLab


const SubmitLabModal = ({showModal ,setShowModal}) =>{

  function handleChange(e){
    setInfo({...info ,[e.target.name]:e.target.value})
  }

  return(
    <>
      <Modal open={showModal} onClose={()=>setShowModal(false)} >
        <h2>Submit lab</h2>
        <p>
          <h3>Submit Lab/Challenge</h3>

          <form onSubmit="">
            <label htmlFor="">Title</label>
            <input 
              type="text"
              name=''
              onChange={handleChange}
            />

            <label htmlFor="">Technologies Used</label>
            <input 
              type="text"
              name='technologiesUsed'
              onChange={handleChange}
            />

            <label htmlFor="">Live Preview URL</label>
            <input 
              type="url"
              name='liveURL'
              placeholder='https://your-project.netlify.app'
              onChange={handleChange}
            />

            <label htmlFor="">GitHub Repository URL</label>
            <input 
              type="url"
              name='githubURL'
              placeholder='https://github.com/username/repository'
              onChange={handleChange}
            />

            <label htmlFor="">Lab Description</label>
            <textarea name="decription" id="decription" onChange={handleChange}></textarea>

            <label htmlFor="">Comments or Notes</label>
            <textarea name="comments" id="comments" onChange={handleChange}></textarea>

            <input type="checkbox" /><label htmlFor="">Notify me when reviewed</label>
            
            <label>Challenge/Lab</label>
            <select name="" id="">
              <option value="">Select a Challenge</option>
            </select>
            <button>Clear Form</button>
            <button>Save as draft</button>
            <button className='button'>Submit</button>
          </form>

          {/* <div className="submit-option">
            <button className={`button ${location.pathname === "" ? "active" : ""}`}>Upload File</button>
            <button className={`button ${location.pathname === "" ? "active" : ""}`}>Submit Link</button>
          </div>

          <div className="upload">
            <form action="">
                <p>Drag and drop your files here! or</p>
                <input type="file" /><br />
                <span>Accepted formats: .zip, .html, .js, .py, .txt</span>
            </form>
          </div> */}
        </p>
      </Modal>
    </>
  )
}