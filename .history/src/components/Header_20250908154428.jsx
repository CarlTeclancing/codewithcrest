import React ,{useState ,useEffect} from 'react'
// import  './layout.css'
import Img1 from '../assets/img1.jpg'


function Header() {

  const [showMenu ,setShowMenu] = useState(false)

  useEffect(()=>{
    if(window.innerWidth <= 500){
      setShowMenu(true)
    }
  },[window.innerWidth])
  console.log(showMenu);
  

  return (
    <div className='head'>
      {/* {showMenu && <div>
          <span className='bi bi-menu'>🍺</span>        
      </div>} */}

      {/* <h2 className="logo"><span>CODE</span>with<span>CREST</span></h2> */}
        <div>
          <span style={{display:'flex', alignItems:'center'}}>
            <input type="text"  className='search' placeholder='🔍search...  '/>
          </span>
        </div>

        <div className="profile" style={{cursor:'pointer'}}>
            <p className='name'>De Duke Kenzo<br/><span className='points'>125 points</span></p>
            <img src={Img1} alt="" />
        </div>
    </div>
  )
}

export default Header