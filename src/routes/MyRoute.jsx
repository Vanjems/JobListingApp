import React from 'react'
import { Routes, Route} from 'react-router-dom'
import App from '../App'
import Home from '../pages/home/Home'
import Jobdetailspage from '../pages/jobdetails/Jobdetailspage'

export default function MyRoute() {
  return (
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/' element={<Home />}/>
        <Route path='/jobdetails/:id' element={<Jobdetailspage />} />
      </Route>
    </Routes>
  )
}
