import React from 'react'
import  './layout.css'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className='sidebar-admin'>
         <h2 className="logo p-10"><span>CODE</span>with<span>CREST</span></h2>
         <div className="navbar p-10">
               <Link className={`section ${location.pathname === "/dashboard" ? "active" : ""}`} to="/dashboard" >
                  <i class="bi bi-grid-fill"></i>
                  <span className='nav-element'>Dashboard</span>
                  
               </Link>

               <Link className={`section ${location.pathname === "/submitlab" ? "active" : ""}`} to="/submitlab">
                  <i class="bi bi-file-earmark-plus-fill"></i>
                  <span className='nav-element'>Submit Lab</span>
               </Link>
               <Link className={`section ${location.pathname === "/submissions" ? "active" : ""}`} to="/submissions">
                  <i class="bi bi-file-earmark-text-fill"></i>
                  <span className='nav-element'>Submissions</span>
               </Link>
               <Link className={`section ${location.pathname === "/ranking" ? "active" : ""}`} to="/ranking">
                  <i class="bi bi-trophy-fill"></i>
                  <span className='nav-element'>Ranking</span>
               </Link>
               <Link className={`section ${location.pathname === "/bugtracking" ? "active" : ""}`} to="/bugtracking">
                  <i class="bi bi-bug-fill"></i>
                  <span className='nav-element'>Bug Tracking</span>
               </Link>

               <Link className={`section ${location.pathname === "/community" ? "active" : ""}`} to="/community">
                  <i class="bi bi-people-fill"></i>
                  <span className='nav-element'>Community</span>
               </Link>
               <Link className={`section ${location.pathname === "/resources" ? "active" : ""}`} to="/resources">
                  <i class="bi bi-file-earmark-text-fill"></i>
                  <span className='nav-element'>Resources</span>
               </Link>
         </div>
              
      </div>
  )
}

export default Sidebar