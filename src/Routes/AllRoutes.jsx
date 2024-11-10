import React from 'react'
import {Routes,Route} from 'react-router-dom' ; 
import Loader from '../Pages/Loader';
import HomePage from '../Pages/HomePage';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Work from '../Pages/Work';
import Contact from '../Pages/Contact';

function AllRoutes() {
  return (
 <>
 <Routes>
  <Route path="/" element={<Loader/>}></Route>
  <Route path="/Homepage" element={<HomePage/>}></Route>
  <Route path="/About" element={<About/>}></Route>
  <Route path="/Services" element={<Services/>}></Route>
  <Route path="/Work" element={<Work/>}></Route>
  <Route path="/Contact" element={<Contact/>}></Route>
 </Routes>
 </>
  )
}

export default AllRoutes