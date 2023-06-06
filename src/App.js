import React, { useRef } from "react";
import './App.css';
import Nav from './Components/Nav'; 
import Footer from './Components/Footer'; 
import Signin from './Components/Signin';
import Home from './Components/Home';
import About from './Components/About';
import Courses from './Components/Courses';
import Contact from './Components/Contact';
import CourseDetails from './Components/CourseDetails';
import Why_Us from './Components/Why_Us';
import Teaching from './Components/Teaching';
import {BrowserRouter,Routes,Route, Outlet} from 'react-router-dom';
import PrivateComponent from './Components/PrivateComponent';
import { useEffect, useState } from 'react';





function App() {
  
  const [joinCourse,setJoinCourse]=useState('');
  const [isLoggedIn,setLoggedIn]=useState(false);
  useEffect(()=>{
    if(localStorage.getItem('user'))
    {
      setLoggedIn(true);
    }
    else
    {
      setLoggedIn(false);
    } 
    setJoinCourse(localStorage.getItem('courseSelected'));
    // console.log(joinCourse)
  });//rendering multiple time

  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
    <BrowserRouter>
    {/* <Nav /> */}
    {isLoggedIn && <Nav />}
    <Routes>

      <Route element={<PrivateComponent />}>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About scrolltolocation="FALSE"/>}/>
      <Route path="/courses" element={<Courses setJoinCourse={setJoinCourse} />}/>
      {/* <Route path="/about#location" Component={<About scrolltolocation="TRUE" scrollFunction={scrollToSection} reference={sectionRef}/>}/> */}
      <Route path="/contact" element={<Contact />}/>
      <Route path="/join" element={<CourseDetails courseName={localStorage.getItem('courseSelected')} />}/>
      <Route path="/why-us" element={<Why_Us />}/>
      <Route path="/teaching" element={<Teaching />}/>
      </Route>
      <Route path="/logout" element={<Signin clearStorage="true" setLoginState={setLoggedIn}/>}/>
      <Route path="/login" element={<Signin clearStorage="false" setLoginState={setLoggedIn}/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
