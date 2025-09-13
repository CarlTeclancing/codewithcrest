import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SplitLayout, { SplitNav } from '../../../components/SplitLayout'
import { HOST_NAME } from '../../../../globals'


function Experience() {

    const navigate = useNavigate()
    const [info ,setInfo] = useState({
        academicLevel:'',
        yoe:'',
        experience:''
    })
    const [loading ,setLoading] = useState(false)
    const [error ,setError] = useState('')

    async function getAllData(){
        const personal = await JSON.parse(localStorage.getItem('personal')) 
        // const program = await JSON.parse(localStorage.getItem('program')) 
        const userId = await localStorage.getItem('user')
        return {...personal ,userId:parseInt(userId)}
    }

    async function saveData(){
        const {yoe, experience, academicLevel} = info
        setLoading(true)
        setError('')
        try{
            const d = await getAllData() 
            console.log({...d, ...info});
            // return
            
            const response = await fetch(`${HOST_NAME}/api/profile`,{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({...d, ...info})
            })
            const data = await response.json()
            if(response.ok){
                navigate("/login")
                // save to localstorage
                // await localStorage.setItem('user', JSON.stringify(data.user))
                // navigate("/dashboard")
            }else{
                setError(data.error)
            }
        }
        catch(e){
            console.log(e);
        }
        finally{
            setLoading(false)
        }
    }

    function handleChange(e){
        setInfo({...info ,[e.target.name]:e.target.value})
    }

  return (
    <SplitLayout>
        <h2> <span>Experience</span> </h2>
        <p>Help us understand your programming background and preferences to provide you with the best possible experience.</p>

        <SplitNav/>

        <div className="filter">
            <div>
                <label htmlFor="al">Academic Level <span style={{color:'crimson'}}>*</span></label>
                <select name="academicLevel" id="al" onChange={handleChange} required>
                    <option value="Self taught">Self taught</option>
                    <option value="Bachelor degree">Bachelor degree</option>
                    <option value="Master degree">Master degree</option>
                    <option value="Doctorate">Doctorate</option>
                    <option value="PHD">PHD</option>

                </select>
            </div>

            <div>
                <label htmlFor="yoe">Years of Experience <span style={{color:'crimson'}}>*</span></label>
                <select name="yoe" id="yoe" onChange={handleChange} required>
                    <option value="< 1 year"> {'< 1year'} </option>
                    <option value="> 1 year  < 5 years"> {'> 1 year && < 5 years'} </option>
                    <option value="> 5 years"> {'> 5 years'} </option>
                </select>
            </div>
        </div>
        <br/>

        {/* <div className="bug-level">
            <label>How often do you code?</label>
            <div className="checkbox">
                <input type="radio" value="" /><label htmlFor="">Daily</label>
                <input type="radio" value="" /><label htmlFor="">Weekly</label>
                <input type="radio" value="" /><label htmlFor="">Monthly</label>
                <input type="radio" value="" /><label htmlFor="">Occasionally</label>
                <input type="radio" value="" /><label htmlFor="">Rarely</label>
            </div>
        </div><br /> */}

        <label htmlFor='experience'>Describe Your Experience in any domain</label>
        <textarea 
            name="experience" 
            id="experience"  
            value={info.experience} 
            placeholder='Tell us about your  journey, projects you have worked on, technologies  you have used, and any notable achievements or challenges you have faced'
            onChange={handleChange}
        ></textarea><br />
        <br/>

        {/* <label htmlFor="">What types of projects have you worked on?</label> */}
        
        {/* <div className='wrap'>
            <div>
                <input type="checkbox" /><label htmlFor="">Web Development</label>
            </div>
            <div>
                <input type="checkbox" /><label htmlFor="">Machine Learning</label>
            </div>
            <div>
                <input type="checkbox" /><label htmlFor="">DevOps/Infrastructure</label>
            </div>
            <div>
                <input type="checkbox" /><label htmlFor="">Mobile Development</label>
            </div>
            <div>
                <input type="checkbox" /><label htmlFor="">Desktop Applications</label>
            </div>
            <div>
                <input type="checkbox" /><label htmlFor="">API Development</label>
            </div>
            <div>
                <input type="checkbox" /><label htmlFor="">Data Science</label>
            </div>
            <div>
                <input type="checkbox" /><label htmlFor="">Game Development</label>
            </div>
            <div>
                <input type="checkbox" /><label htmlFor="">Database Design</label>
            </div>
        </div> */}
        <div style={{textAlign:'center', color:'crimson', padding:'5px'}}>
            {error && error}
        </div>
        <div className="buttons">
            <Link className='back' to='/personal-information'>Back</Link>
            <span className='next-step' style={{cursor:'pointer'}} onClick={loading ?'':()=>saveData()}>Finish</span>
        </div>
    </SplitLayout>
  )
}

export default Experience