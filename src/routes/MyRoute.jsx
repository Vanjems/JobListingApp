import React from 'react'
import { Routes, Route} from 'react-router-dom'
import App from '../App'
import Home from '../pages/home/Home'
import Jobdetailspage from '../pages/jobdetails/Jobdetailspage'
import Jobpage from '../pages/job/Jobpage'
import Loginpage from '../pages/loginpage/Loginpage'
import Signuppage from '../pages/siguppage/Signuppage'
import Aboutpage from '../pages/aboutpage/Aboutpage'
import Contactpage from '../pages/contactpage/Contactpage'

export default function MyRoute() {
  return (
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/' element={<Home />}/>
        <Route path='/jobpage' element={<Jobpage />}/>
        <Route path='/aboutpage' element={<Aboutpage />}/>
        <Route path='/contactpage' element={<Contactpage />}/>
        <Route path='/jobdetails/:id' element={<Jobdetailspage />} />
        <Route path='/loginpage' element={<Loginpage />}/>      
        <Route path='/signuppage' element={<Signuppage />}/>      
        </Route>
    </Routes>
  )
}
