import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './Components/HeaderNav'
import HomeBanner from './Components/HomeBanner';
import FeatureOn from './Components/FeatureOn';
import CardsHappystudent from './Components/CardsHappystudent';
import Carriercouncelling from './Components/Carriercouncelling';
import ThreeVideoPart from './Components/ThreeVideoPart';
import AboutUs from './Components/AboutUs';
import StudentsGallery from './Components/studentsGallery';
import PeopleSay from './Components/PeopleSay';

function App() {


  return (
    <>
  <HeaderNav/>
  <HomeBanner/>
  <FeatureOn/>
  <Carriercouncelling/>
  <CardsHappystudent/>
  <ThreeVideoPart/>
  <AboutUs/>
  <StudentsGallery/>
  <PeopleSay/>

    </>
  )
}

export default App
