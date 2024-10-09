import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddProfile from './components/Reusable/AddProfile.tsx'
import DashBoard from './components/Reusable/DashBoard.tsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/profile",
    element:<AddProfile/>
  },
  {
    path:"/dashboard",
    element:<DashBoard/>
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
