import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import './layout.css'

function Layout({children}) {
  return (
    <div className='container'>
            <Header />
        <div className="row">
            <Sidebar />
        </div>
        <div className="content">
        {children}
        </div>
     </div>
  )
}

export default Layout