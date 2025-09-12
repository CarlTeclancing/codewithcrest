import React ,{useState ,useEffect ,useContext} from 'react'
import UserContext from '../providers/userProvider'


function Header() {

  const {user} = useContext(UserContext)
  const [showMenu ,setShowMenu] = useState(false)

  useEffect(()=>{
    if(window.innerWidth <= 500){
      setShowMenu(true)
    }
  },[window.innerWidth])
  console.log(showMenu);
  

  return (
    <div className='head'>
      
      <div className='mobile-menu'>
        💻
      </div>

      {/* <h2 className="logo"><span>CODE</span>with<span>CREST</span></h2> */}
        {/* <div>
          <span style={{display:'flex', alignItems:'center'}}>
            <input type="text"  className='search' placeholder='🔍search...  '/>
          </span>
        </div> */}

        <div className="profile" style={{cursor:'pointer'}}>
            <div style={{display:'flex', flexDirection:'column'}}>
              <span className='name' >{user.profile && user.profile.name}</span>
              <span className='points' style={{fontSize:'x-small'}}>{user.email}</span>
            </div>
            <img src={''} alt="" />
        </div>
    </div>
  )
}

export default Header