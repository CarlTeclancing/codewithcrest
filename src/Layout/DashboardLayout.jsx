import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";


const DashboardLayout = () => {
    return(
        <React.Fragment>
            <div style={{border:'solid 0px blue',display:'flex' }}>
                <Sidebar/>

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