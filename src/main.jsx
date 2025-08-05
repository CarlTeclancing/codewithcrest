import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hello from './pages/Hello.jsx'

import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Ranking from './pages/ranking/Ranking.jsx'  
import Labs from './pages/labs/Labs.jsx'
import Submission from './pages/submission/Submission.jsx'

import SubmitLab from './pages/submitLab/SubmitLab.jsx'
import Community from './pages/community/Community.jsx'
import BugTracking from './pages/bugTracking/BugTracking.jsx'
import Resources from './pages/resources/Resources.jsx'
import Assistant from './pages/assistant/Assistant.jsx'
import Login from './pages/login/Login.jsx'
import Step1 from './pages/register/Step1.jsx'
import Step2 from './pages/register/Step2.jsx'
import Step3 from './pages/register/Step3.jsx'
import Step4 from './pages/register/Step4.jsx'
// fb28bc8a3f383cd71915a7bfc9ed5beb6f71bd4

const router = createBrowserRouter([
  {path:'/', element:<App />},
  {path:'/hello', element:<Hello />},
  {path:'/dashboard', element:<Dashboard />},
  {path:'/ranking', element:<Ranking />},
  {path:'/submit', element:<Labs />},
  {path:'/submissions', element:<Submission />},
  {path:'/login', element:<Login />},

  {path:'/submitlab', element:<SubmitLab />},
  {path:'/community', element:<Community />},
  {path:'/ranking', element:<Ranking />},
  {path:'/bugtracking', element:<BugTracking />},
  {path:'/resources', element:<Resources />},
  {path:'/step1', element:<Step1 />},
  {path:'/step2', element:<Step2 />},
  {path:'/step3', element:<Step3 />},
  {path:'/step4', element:<Step4 />},
  {path:'/assistant', element:<Assistant />}

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
