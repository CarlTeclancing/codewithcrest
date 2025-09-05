import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SplitLayout, { SplitNav } from '../../../components/SplitLayout'

const programs = [
    
    {
        name:"Graphic Design",
        code:'gd'
    },
    {
        name:"Frontend dev",
        code:'ft'
    },
    {
        name:"Backend dev",
        code:'bk'
    },
    {
        name:"Mobile dev",
        code:'md'
    },
    {
        name:"DB Mangement",
        code:'dm'
    },
    {
        name:'Devops',
        code:'dv'
    },

]

function Challenge() {

    const navigate = useNavigate()
    const [info ,setInfo] = useState({
        program:'',
        duration:''
    })

    async function nextPage(){
        await localStorage.setItem('program',JSON.stringify(info))
        navigate('/experience')
    }


  return (
    <SplitLayout>
        <h2> <span>Internship</span> Preference and <span>Duration </span> </h2>
        <p>Meet and share your experience with others across the globe.</p>

        <SplitNav/>

        <div className="assist step3">
            <h4>Internship Program</h4><br />
            <div className="box-suggest">
                {programs.map((program ,idx) => (
                    <div style={{backgroundColor:info.program == program.code ? '#2563EB':'',}} className="suggest" key={idx} onClick={()=>setInfo({...info ,program:program.code})}>
                        <span style={{color:info.program == program.code ? 'white':''}}>{program.name}</span>
                    </div>    
                ))}
            </div>
        </div>

        <h4>Duration</h4>

        <div class="query">
            <div class="query1">
                <input type="radio" id='1m' className="radio" name="Enquiry" onClick={()=>setInfo({...info ,duration:1})} />
                <label htmlFor="1m">1 month</label>
            </div>
            <div class="query1">
                <input type="radio" id='2m' className="radio" name="Enquiry" onClick={()=>setInfo({...info ,duration:2})}/>
                <label htmlFor="2m">2 months</label>
            </div>
            <div class="query1">
                <input type="radio" id='3m' className="radio" name="Enquiry" onClick={()=>setInfo({...info ,duration:3})}/>
                <label htmlFor="3m">3 months</label>
            </div>
       </div><br/>

        <div className="buttons">
            <Link className='back' to='/personal-information'>Back</Link>
            <span className='next-step' style={{cursor:'pointer'}} onClick={nextPage}>Next</span>
        </div>
    </SplitLayout>
  )
}

export default Challenge