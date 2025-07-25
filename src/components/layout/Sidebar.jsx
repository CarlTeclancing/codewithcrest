import React from 'react'
import  './layout.css'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className='sidebar-admin'>
            
         <div className="navbar">
               <Link className={`section ${location.pathname === "/dashboard" ? "active" : ""}`} to="/dashboard" >
                  <i class="bi bi-grid-fill"></i>
                  <span className='nav-el'>Dashboard</span>
                  
               </Link>
               <Link className={`section ${location.pathname === "/submit" ? "active" : ""}`} to="/submit">
                  <i class="bi bi-file-earmark-plus-fill"></i>
                  <span className='nav-el'>Submit Lab</span>
               </Link>
               <Link className={`section ${location.pathname === "/submissions" ? "active" : ""}`} to="/submissions">
                  <i class="bi bi-file-earmark-text-fill"></i>
                  <span className='nav-el'>Submissions</span>
               </Link>
               <Link className={`section ${location.pathname === "/ranking" ? "active" : ""}`} to="/ranking">
                  <i class="bi bi-trophy-fill"></i>
                  <span className='nav-el'>Ranking</span>
               </Link>
               <Link className={`section ${location.pathname === "/courses" ? "active" : ""}`} to="/courses">
                  <i class="bi bi-bug-fill"></i>
                  <span className='nav-el'>Bug Tracking</span>
               </Link>
               <Link className={`section ${location.pathname === "/results" ? "active" : ""}`} to="/results">
                  <i class="bi bi-people-fill"></i>
                  <span className='nav-el'>Community</span>
               </Link>
               <Link className={`section ${location.pathname === "/complaints" ? "active" : ""}`} to="/complaints">
                  <i class="bi bi-file-earmark-text-fill"></i>
                  <span className='nav-el'>Resources</span>
               </Link>
         </div>
              
      </div>
  )
}

export default Sidebar