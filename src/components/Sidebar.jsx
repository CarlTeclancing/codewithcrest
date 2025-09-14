import React ,{ useEffect,useContext} from 'react'
import { Link  ,useLocation } from 'react-router-dom'
import '../styles/sideBarStyles.css'
import UserContext from '../providers/userProvider'


function Sidebar() {

   const location = useLocation()   
   const {user ,setUser} = useContext(UserContext)

   async function getLocalUser(){
      try{
         const raw = await JSON.parse( localStorage.getItem('user') )
         // console.log("from local storage in sidebar: ", raw);
         setUser(raw)
      }
      catch(e){
         console.log(e);
      }
   }

   useEffect(()=>{
      if(!user){
         getLocalUser()
      }
   },[0])

   return (
    <div className='sidebar-admin'>
         <h2 className="logo p-10"><span>CODE</span>with<span>CREST</span></h2>
         <div className="navbar p-10">
               <Link className={`section ${location.pathname === "/dashboard" ? "active" : ""}`} to="/dashboard" >
                  <i className="bi bi-grid-fill"></i>
                  <span className='nav-element'>Dashboard</span>
                  
               </Link>
               <Link className={`section ${location.pathname === "/dashboard/submitlab" ? "active" : ""}`} to="/dashboard/submitlab">
                  <i class="bi bi-file-earmark-plus-fill"></i>
                  <span className='nav-element'>Submit Lab</span>
               </Link>
               <Link className={`section ${location.pathname === "/dashboard/submissions" ? "active" : ""}`} to="/dashboard/submissions">
                  <i class="bi bi-file-earmark-text-fill"></i>
                  <span className='nav-element'>Submissions</span>
               </Link>
               <Link className={`section ${location.pathname === "/dashboard/ranking" ? "active" : ""}`} to="/dashboard/ranking">
                  <i class="bi bi-trophy-fill"></i>
                  <span className='nav-element'>Ranking</span>
               </Link>
               <Link className={`section ${location.pathname === "/dashboard/community" ? "active" : ""}`} to="/dashboard/community">
                  <i class="bi bi-people-fill"></i>
                  <span className='nav-element'>Community</span>
               </Link>
               <Link className={`section ${location.pathname === "/dashboard/resources" ? "active" : ""}`} to="/dashboard/resources">
                  <i class="bi bi-file-earmark-text-fill"></i>
                  <span className='nav-element'>Resources</span>
               </Link>
               <Link className={`section ${location.pathname === "/dashboard/golive" ? "active" : ""}`} to="/dashboard/golive">
                  <i class="bi bi-broadcast"></i>
                  <span className='nav-element'>Go Live</span>
               </Link>
               <Link className={`section ${location.pathname === "/dashboard/settings" ? "active" : ""}`} to="/dashboard/settings">
                  <i class="bi bi-gear-fill"></i>
                  <span className='nav-element'>Settings</span>
               </Link>
         </div>
              
      </div>
  )
}

export default Sidebar