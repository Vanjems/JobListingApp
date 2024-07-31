import React from 'react'
import { Routes, Route} from 'react-router-dom'
import App from '../App'
import Home from '../pages/home/Home'
import Jobdetailspage from '../pages/jobdetails/Jobdetailspage'
import Jobpage from '../pages/job/Jobpage'
import Loginpage from '../pages/loginpage/Loginpage'
import Signuppage from '../pages/siguppage/Signuppage'

export default function MyRoute() {
  return (
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/' element={<Home />}/>
        <Route path='/jobpage' element={<Jobpage />}/>
        <Route path='/jobdetails/:id' element={<Jobdetailspage />} />
        <Route path='/loginpage' element={<Loginpage />}/>      
        <Route path='/signuppage' element={<Signuppage />}/>      
        </Route>
    </Routes>
  )
}
