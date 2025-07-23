import React from 'react'
import  './layout.css'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className='sidebar-admin'>
            <h2 className="logo"><span>Code</span>with<span>Crest</span></h2>
            
         <div className="navbar">
               <Link className={`section ${location.pathname === "/dashboard" ? "active" : ""}`} to="/dashboard" >
                  Dashboard
               </Link>
               <Link className={`section ${location.pathname === "/submit" ? "active" : ""}`} to="/submit">
                  Submit Lab
               </Link>
               <Link className={`section ${location.pathname === "/submissions" ? "active" : ""}`} to="/submissions">
                  My Submissions
               </Link>
               <Link className={`section ${location.pathname === "/ranking" ? "active" : ""}`} to="/ranking">
                  Ranking
               </Link>
               <Link className={`section ${location.pathname === "/courses" ? "active" : ""}`} to="/courses">
                  Bug Tracking
               </Link>
               <Link className={`section ${location.pathname === "/results" ? "active" : ""}`} to="/results">
                  Communit
               </Link>
               <Link className={`section ${location.pathname === "/complaints" ? "active" : ""}`} to="/complaints">
                  Resources
               </Link>
         </div>
              
      </div>
  )
}

export default Sidebar