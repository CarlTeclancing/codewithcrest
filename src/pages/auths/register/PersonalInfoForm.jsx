import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SplitLayout, { SplitNav } from '../../../components/SplitLayout'


function PersonalInfo() {

    const navigate = useNavigate()
    const [info ,setInfo] = useState({
        name:'',
        phone:'',
        profile:'',
    })
    const [image ,setImage] = useState()

    async function nextPage(e){
        e.preventDefault()
        await localStorage.setItem('personal',JSON.stringify(info))
        navigate('/experience')
    }

    function handleChange(e){
        setInfo({...info ,[e.target.name]:e.target.value})
    }

    function handleFileChange(e){
        setInfo({...info ,profile:e.target.files[0]})
        const reader = new FileReader()
        reader.onload = () => {
            setImage(reader.result)
        }
        reader.readAsDataURL()
    }

  return (
    <SplitLayout>
        <h2>Personal <span>Information</span> </h2>
        <p>Meet and share your experience with others across the globe.</p>

        <SplitNav/>

        <form action="" onSubmit={nextPage} >
            <label htmlFor="name">Full Name <span style={{color:'crimson'}}>*</span></label>
            <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder='Enter your full name'
                value={info.name}
                onChange={handleChange}
                required
            /><br /><br />
                
            {/* <label htmlFor="">Username</label>
            <input 
                type="text" 
                disabled
                value={info.name.trim().slice(0 ,5).toLocaleLowerCase()}
            /> <br/><br/> */}

            <label htmlFor="profile">Profile Picture</label>
            <input 
                type="file" 
                name="profile" 
                id="profile"
                onChange={handleFileChange} 
                className='file'
            /><br/><br/>

            <label htmlFor="phone">Phone number <span style={{color:'crimson'}}>*</span></label>
            <input 
                type="number" 
                name="phone" 
                id="phone" 
                placeholder='Enter your phone number'
                value={info.phone}
                onChange={handleChange}
                required
            /> <br/><br/>

            <button className='next'>Next Step</button>
        </form>
    </SplitLayout>
  )
}

export default PersonalInfo