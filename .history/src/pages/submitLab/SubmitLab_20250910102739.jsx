import React ,{useState ,useEffect} from 'react'
import './submitlab.css'
import { Link, useNavigate } from 'react-router-dom'
import LabInfo from '../../components/LabInfo.jsx'
import { HOST_NAME } from '../../../globals.js'
import {Modal} from 'react-responsive-modal'
import moduleIcon from '../../assets/module-icon.png'

const lab = [
  { title: 'JavaScript Loops Lab', hashtags:['#Javascript', '#Loops' ,'#Beginner'], task:'Create interactive loops using for while, and for Each methods. Implement counter functionality and array manipulation techniques.' , deadline: 'Due in 2 days', point: '50pts' },
];

function SubmitLab() {

  const navigate = useNavigate()
  const [modules , setModules] = useState()
  const [loading ,setLoading] = useState(false)
  const [error ,setError] = useState('')
  const [showModal ,setShowModal] = useState(false)
  const [confirmModal, setConfirmModal] = useState(false)

  async function getModules(){
    try{
      setLoading(true)
      setError('')
      const response = await fetch(`${HOST_NAME}/api/modules/with-labs`)
      const data = await response.json()
      // console.log(data);
      
      if(response.ok){
        setModules(data)
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
    getModules()
  },[0])

  async function startLab(labId){
    console.log(labId);
    const file = await fetch(`${HOST_NAME}/labs/ft/html_basics.txt`)
    if(file.ok){
      const blob = await file.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'html_bascis.txt')
      document.body.appendChild(link)
      link.click()
      link.parentNode.removeChild(link)
      window.URL.revokeObjectURL(url)
    }
    // window.location.href = (`/${HOST_NAME}/labs/ft/html_basics.txt`)
    return
    try{
      const response = await fetch(`${HOST_NAME}/api/lab/start-lab`, {
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({})
      })
      const data = await response.json()
      if(response.ok){

      }else{

      }
    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <div className='dashboard-container'>
      
      <SubmitLabModal showModal={showModal} setShowModal={setShowModal} />
      <ConfirmationModal showModal={confirmModal} setShowModal={setConfirmModal} startLab={startLab}/>

      {
        modules && modules.map((mod, idx) => {
          return(
              <div key={idx} className={idx != 0? 'module-container module-lock':'module-container'} onClick={()=>{
                if(idx != 0){
                  navigate('/subscribe')
                }
              }} >
                <h3 
                  style={{display:'flex' ,justifyContent:'space-between', alignItems:'center', cursor:idx!=0?'not-allowed':'pointer'}}
                  // onClick={()=>}
                > 
                  <span style={{display:'flex' ,alignItems:'center' ,gap:10}}> 
                    <img src={moduleIcon} width={20} height={20} /> Module {idx+1} - {mod.name} 
                  </span> 
                  
                  <span style={{border:'solid 0px red' ,marginRight:20 ,padding:'0px 10px'}}>
                     {/* <i className='bi bi-chevron-down'></i>  */}
                     <i className={ idx != 0?'bi bi-lock':'bi bi-unlock'}></i> 
                  </span> 
                </h3>


                <div className='labs-container'>
                  {mod.labs.length != 0 && mod.labs.map((lab, index) => (
                    <LabInfo
                      open={false}
                      key={index}
                      id={lab.id}
                      title={lab.title}
                      onClick={setConfirmModal}
                      // hashtags={lab.hashtags || []}
                      task={lab.description || '---'}
                      // deadline={lab.deadline || 'test'}
                      // point={lab.point || 5}
                    />
                  ))}
                </div>

              </div>
          )
        })
      }

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
        <p>
          <h3 style={{textAlign:'center'}}>Submit Lab/Challenge</h3>

          <form onSubmit="">
            <div className="form-group">
              <div>
                <label htmlFor="">Title</label>
                <input
                  type="text"
                  name=''
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="">Technologies Used</label>
                <input
                  type="text"
                  name='technologiesUsed'
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <div>
                <label htmlFor="">Live Preview URL</label>
                <input
                  type="url"
                  name='liveURL'
                  placeholder='https://your-project.netlify.app'
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="">GitHub Repository URL</label>
                <input
                  type="url"
                  name='githubURL'
                  placeholder='https://github.com/username/repository'
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <div>
                <label htmlFor="">Lab Description</label>
                <textarea name="decription" id="decription" onChange={handleChange}></textarea>
              </div>
              <div>
                <label htmlFor="">Comments or Notes</label>
                <textarea name="comments" id="comments" onChange={handleChange}></textarea>
              </div>
            </div>

            <div style={{display:'flex', alignItems:'center'}}>
              <input style={{width:'auto'}} type="checkbox" /><label htmlFor="">Notify me when reviewed</label>
            </div>
            <br />
            <label>Challenge/Lab</label><br />
            <select style={{width:'95%', backgroundColor:'#bcbcbcff'}} name="" id="">
              <option value="">Select a Challenge</option>
            </select>
              <br /> <br />

            <div style={{display:'flex', justifyContent:'space-between'}}>
              <div style={{display:'flex', alignItems:'center'}}>
                <button className='btnl'>Clear Form</button>
                <button className='btnl'>Save as draft</button>
              </div>
              <button className='button'>Submit</button>
            </div>
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


const ConfirmationModal = ({showModal, setShowModal ,startLab}) => {
    
  return(
    <>
      <Modal open={showModal} onClose={()=>setShowModal(false)} showCloseIcon={false}>
        <div style={{border:'solid 0px red', textAlign:'center'}}>
            <h2>Are you sure ?!</h2>
            <div>
              <button style={{backgroundColor:'crimson' ,border:'none'}} onClick={()=>setShowModal(false)}>Cancel</button>
              <button onClick={()=>startLab(showModal)} >Accept</button>
            </div>
        </div>
      </Modal>
    </>
  )
}