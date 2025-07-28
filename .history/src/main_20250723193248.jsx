import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hello from './pages/Hello.jsx'

import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Ranking from './pages/ranking/Ranking.jsx'  
import SubmitLab fro
const router = createBrowserRouter([
  {path:'/', element:<App />},
  {path:'/hello', element:<Hello />},
  {path:'/dashboard', element:<Dashboard />},
  {path:'/ranking', element:<Ranking />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
