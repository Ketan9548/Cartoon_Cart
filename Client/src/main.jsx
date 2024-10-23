import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Ben10, Doraemon, Home, Naruto, Tomjerry,Login,Registration } from './Components/1index.js';
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/doraemon' element={<Doraemon />} />
      <Route path='/Ben_10' element={<Ben10 />} />
      <Route path='/Naruto' element={<Naruto />} />
      <Route path='/Tom_Jerry' element={<Tomjerry />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
