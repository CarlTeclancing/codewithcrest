import React from 'react'
import Sidebar from '../Sidebar'
import Header from './Header'
import './layout.css'

function Layout({children}) {
  return (
    <div className='container'>
        
        <Header />

        <div className="content">
          <Sidebar />
          <div className="container-2">
            {children}
          </div>
        </div>

     </div>
  )
}

export default Layout;