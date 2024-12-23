import React from 'react'
import {Routes,Route} from 'react-router-dom' ; 
import Loader from '../Pages/Loader';
import HomePage from '../Pages/HomePage';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Work from '../Pages/Work';
import Contact from '../Pages/Contact';
import Software from '../Pages/AllServices/Software'
import MobileApp from '../Pages/AllServices/MobileApp'
import WebApp from '../Pages/AllServices/WebApp'
import WebUI from '../Pages/AllServices/WebUI';
import QualityA from '../Pages/AllServices/QualityA' 
import Deployment from '../Pages/AllServices/Deployment' ; 


function AllRoutes() {
  return (

 <Routes>
  <Route path="/" element={<Loader/>}></Route>
  <Route path="/Homepage" element={<HomePage/>}></Route>
  <Route path="/About" element={<About/>}></Route>
  <Route path="/Services" element={<Services/>}></Route>
  <Route path="/Work" element={<Work/>}></Route>
  <Route path="/Contact" element={<Contact/>}></Route>
  <Route path="/Services/CustomSoftwareSolutions" element={<Software/>}></Route>
  <Route path="/Services/MobileApplicationDevelopment" element={<MobileApp/>}></Route>
  <Route path="/Services/WebApplicationDevelopment" element={<WebApp/>}></Route>
  <Route path="/Services/WebandUI/UXDesign" element={<WebUI/>}></Route>
  <Route path="/Services/QualityAssurance" element={<QualityA/>}></Route>
  <Route path="/Services/DeploymentandMaintence" element={<Deployment/>}></Route>

 </Routes>
 
  )
}

export default AllRoutes