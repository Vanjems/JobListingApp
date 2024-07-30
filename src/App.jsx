import React from 'react'
import Home from './pages/home/Home'
import { Outlet } from 'react-router-dom'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Jobdetails from './pages/jobdetails/Jobdetails'

export default function App() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
