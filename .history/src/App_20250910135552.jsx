import React  from 'react'
import { createBrowserRouter, RouterProvider ,Route ,Routes } from 'react-router-dom'

import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Ranking from './pages/ranking/Ranking.jsx'  
import Submission from './pages/submission/Submission.jsx'

import SubmitLab from './pages/submitLab/SubmitLab.jsx'
import Community from './pages/community/Community.jsx'
import Resources from './pages/resources/Resources.jsx'
import Assistant from './pages/assistant/Assistant.jsx'
import Login from './pages/auths/login/Login.jsx'
import Register from './pages/auths/register/_Register.jsx'
import PersonalInfo from './pages/auths/register/PersonalInfoForm.jsx'
import Experience from './pages/auths/register/ExperienceForm.jsx'
import Program from './pages/auths/register/ProgramForm.jsx'
import { UserProvider } from './providers/userProvider.jsx'
import DashboardLayout from './Layout/DashboardLayout.jsx'
import Subscribe from './pages/subscribe/Subscribe.jsx'
import GoLive from './pages/golive/GoLive.jsx'

function App() {

  const router = createBrowserRouter([
    {path:'/', element:<Login />},
    // No landing page
    // Auth pages
    {path:'/login',  index:true,element:<Login />},
    {path:'/register', element:<Register />},
    {path:'/personal-information', element:<PersonalInfo />},
    {path:'/program', element:<Program />},
    {path:'/experience', element:<Experience/>},

    // Subscribtion page
    {
      path:'/subscribe',
      element:<Subscribe/>
    },

    // Dashboard pages
    {
      path:'/dashboard', 
      element:<DashboardLayout/>,
      children:[
        {
          index:true,
          element:<Dashboard/>
        },
        {path:'submissions', element:<Submission />},
        {path:'submitlab', element:<SubmitLab />},
        {path:'community', element:<Community />},
        {path:'ranking', element:<Ranking />},
        {path:'resources', element:<Resources />},
        {path:'golive', element:<G />},

      ]
    },

    // {path:'/ranking', element:<Ranking />},
    // {path:'/bugtracking', element:<BugTracking />},
    // {path:'/hello', element:<Hello />},
    // {path:'/assistant', element:<Assistant />}

  ]);

  return (
    <>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </>
  )
}

export default App

const Temp = () => {
  return(
    <>
      testing temp comp
    </>
  )
}