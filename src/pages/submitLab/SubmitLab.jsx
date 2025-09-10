import React ,{useState ,useEffect ,useContext} from 'react'
import './submitlab.css'
import { Link, useNavigate } from 'react-router-dom'
import LabInfo from '../../components/LabInfo.jsx'
import { HOST_NAME } from '../../../globals.js'
import {Modal} from 'react-responsive-modal'
import moduleIcon from '../../assets/module-icon.png'
import UserContext from '../../providers/userProvider.jsx'

const lab = [
  { title: 'JavaScript Loops Lab', hashtags:['#Javascript', '#Loops' ,'#Beginner'], task:'Create interactive loops using for while, and for Each methods. Implement counter functionality and array manipulation techniques.' , deadline: 'Due in 2 days', point: '50pts' },
    { title: 'JavaScript Loops Lab', hashtags:['#Javascript', '#Loops' ,'#Beginner'], task:'Create interactive loops using for while, and for Each methods. Implement counter functionality and array manipulation techniques.' , deadline: 'Due in 2 days', point: '50pts' },
];

function SubmitLab() {

  const navigate = useNavigate()
  const {user ,setUser} = useContext(UserContext)
  const [modules , setModules] = useState()
  const [loading ,setLoading] = useState(false)
  const [error ,setError] = useState('')
  const [labModal ,setLabModal] = useState(false)
  const [challengeModal ,setChallengeModal] = useState(false)
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

  async function startLab(lab){
    // console.log(lab.id);
    // return
    try{
      const response = await fetch(`${HOST_NAME}/api/user-lab`, {
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({lab_id:lab.id, user_id:user.id})
      })
      const data = await response.json()
      console.log(data);
      
      if(response.ok){
        const file = await fetch(`${HOST_NAME}/labs/${lab.module}/${lab.file}`)

        // Saving the user's active labs 
        let tmp = user
        tmp.labs = tmp.labs ? [...user.labs, {id:lab.id, status:'started' }] : [{id:lab.id, status:'started'}]
        await localStorage.setItem('user' ,JSON.stringify(tmp))
        setUser(tmp)

        // Downloading the lab file
        if(file.ok){
          const blob = await file.blob()
          const url = window.URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', lab.file)
          document.body.appendChild(link)
          link.click()
          link.parentNode.removeChild(link)
          window.URL.revokeObjectURL(url)
        }

        setConfirmModal(false)
      }else{
        setError(data.error)
      }
    }
    catch(e){
      console.log(e);
    }
  }

  async function submitLab(e, code){
    e.preventDefault()
    console.log(code);
      // return
    try{
      const response = await fetch(`${HOST_NAME}/api/user-lab/${labModal.id}`, {
        method:'put',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({code:code})
      })
      const data = await response.json()
      console.log(data);
      
      if(response.ok){
        let tmp = user
        let newLabs = tmp.labs.map(l => {
          if(l.id == labModal.id){
            l.status = 'completed'
          }
          return l
        })
        tmp.labs = newLabs
        setUser(tmp)
        await localStorage.setItem('user', JSON.stringify(tmp))
      
        setLabModal(false)
      }else{
        
      }
    }
    catch(e){
      console.log(e.message);
      
    }
  }

// console.log(user.labs);


  return (
    <div className='dashboard-container'>
      
      <SubmitChallengeModal showModal={challengeModal} setShowModal={setChallengeModal} />
      <SubmitLabModal showModal={labModal} setShowModal={setLabModal} submitLab={submitLab} />
      <ConfirmationModal showModal={confirmModal} setShowModal={setConfirmModal} startLab={startLab}/>

      {
        modules && modules.map((mod, idx) => {
          return(
              <div key={idx} className={!user.modules.includes(mod.code) ? 'module-container module-lock':'module-container'} onClick={()=>{
                if(!user.modules.includes(mod.code)){
                  navigate('/subscribe?code='+mod.code)
                }
              }} >
                <h3 
                  style={{display:'flex' ,justifyContent:'space-between', alignItems:'center', cursor:!user.modules.includes(mod.code) ?'not-allowed':'pointer'}}
                  // onClick={()=>}
                > 
                  <span style={{display:'flex' ,alignItems:'center' ,gap:10}}> 
                    <img src={moduleIcon} width={20} height={20} /> Module {idx+1} - {mod.name} 
                  </span> 
                  
                  <span style={{border:'solid 0px red' ,marginRight:20 ,padding:'0px 10px'}}>
                     {/* <i className='bi bi-chevron-down'></i>  */}
                     <i className={ !user.modules.includes(mod.code) ?'bi bi-lock':'bi bi-unlock'}></i> 
                  </span> 
                </h3>


                <div className='labs-container'>
                  {mod.labs.length != 0 && mod.labs.map((lab, index) => (
                    <LabInfo
                      key={index}
                      lab={lab}
                      confirmModal={setConfirmModal}
                      submitLab={setLabModal}
                      userLabs={user.labs}
                      // onClick={setConfirmModal}
                    />
                  ))}
                </div>

              </div>
          )
        })
      }

    </div>
  )
}

export default SubmitLab


const SubmitLabModal = ({showModal ,setShowModal, submitLab}) =>{

  const [code, setCode] = useState('')

  return(
    <>
      <Modal open={showModal} onClose={()=>setShowModal(false)} showCloseIcon={false}>
        <div style={{display:'flex', flexDirection:'column'}}>
          <h3 style={{textAlign:'center'}}>Submit Lab</h3>

          <form onSubmit={e=>submitLab(e, code)}>
            <div className="form-group">
              <div>
                <label htmlFor="">Title</label>
                <input
                  type="text"
                  name=''
                  value={showModal.title}
                  disabled
                />
              </div>
            </div>

            <div className="form-group">
              <div>
                <label htmlFor="">Lab Code</label>
                <textarea 
                  name="decription" 
                  id="decription" 
                  style={{minWidth:'400px'}} 
                  onChange={e=>setCode(e.target.value)}
                  placeholder='Copy and paste your code here !'
                ></textarea>
              </div>
            </div>

            <div style={{display:'flex', justifyContent:'space-between'}}>

              <button className='button'>Submit</button>
            </div>
          </form>

        </div>
      </Modal>
    </>
  )
}


const SubmitChallengeModal = ({showModal ,setShowModal}) =>{

  function handleChange(e){
    setInfo({...info ,[e.target.name]:e.target.value})
  }

  return(
    <>
      <Modal open={showModal} onClose={()=>setShowModal(false)} showCloseIcon={false}>
        <p>
          <h3 style={{textAlign:'center'}}>Submit Challenge</h3>

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
            <label>Challenge</label><br />
            <select style={{width:'94%', backgroundColor:'#bcbcbcff'}} name="" id="">
              <option value="">Select a Challenge</option>
            </select>
              <br /> <br />

            <div style={{display:'flex', justifyContent:'space-between'}}>
              <div style={{display:'flex', alignItems:'center'}}>
                <button>Clear Form</button>
                <button>Save as draft</button>
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