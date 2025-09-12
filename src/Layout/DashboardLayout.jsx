import React, {useEffect, useContext, useState} from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import '../styles/layout.css'
import UserContext from "../providers/userProvider";


const DashboardLayout = () => {
    
    const {user ,setUser} = useContext(UserContext)
    const [showMenu, setShowMenu] = useState(false)

    async function getLocalUser(){
      try{
         const raw = await JSON.parse( localStorage.getItem('user') )
         // console.log("from local storage in sidebar: ", raw);
         if(!raw || !raw.id || !raw.email || !raw.token){
            window.location.pathname = "/"
         }
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
    
    
    return(
        <React.Fragment>
            <div style={{border:'solid 0px blue',display:'flex' }}>
                <Sidebar />

                <div style={{border:'solid 0px red' ,flex:1 ,display:'flex', flexDirection:'column'}}>
                    <div>
                        <Header/>
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default DashboardLayout