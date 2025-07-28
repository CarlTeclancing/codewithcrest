import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hello from './pages/Hello.jsx'

import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Ranking from './pages/ranking/Ranking.jsx'  
<<<<<<< HEAD
import Labs from './pages/labs/Labs.jsx'
import Submission from './pages/submission/Submission.jsx'
=======
import SubmitLab from './pages/submitLab/SubmitLab.jsx'
import Community from './pages/community/Community.jsx'
>>>>>>> 7fb28bc8a3f383cd71915a7bfc9ed5beb6f71bd4

const router = createBrowserRouter([
  {path:'/', element:<App />},
  {path:'/hello', element:<Hello />},
  {path:'/dashboard', element:<Dashboard />},
<<<<<<< HEAD
  {path:'/ranking', element:<Ranking />},
  {path:'/submit', element:<Labs />},
  {path:'/submissions', element:<Submission />},
=======
  {path:'/submitlab', element:<SubmitLab />},
  {path:'/community', element:<Community />},
  {path:'/ranking', element:<Ranking />}
>>>>>>> 7fb28bc8a3f383cd71915a7bfc9ed5beb6f71bd4
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
