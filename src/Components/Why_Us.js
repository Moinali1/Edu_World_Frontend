import React from "react";
import './css/Why_Us.css';

const Intro=()=>{
 return (
    <section id="introsection"> 
    <div className="introD1">Testimonial </div>
    <div className="introD2">Building Belives</div>
  </section>
 )   
}

const Mission=()=>{
    return (
        <section id="missionsection"> 
        <h2>Our Mission </h2>
        <div id="missionbox">
          <div id="item">
            <h3>Quality Education</h3>
            <p> Quality education lays the foundation for knowledge and skills necessary for personal and professional growth. It encompasses well-designed curriculum, competent teachers, effective learning methods, and access to resources, ensuring students receive a comprehensive and valuable learning experience</p>
          </div>
          <div id="item">
            <h3>Build Confidence</h3>
            <p>Building confidence is essential for personal growth and success. It involves overcoming challenges, embracing failure, and believing in oneself. By developing resilience, positive self-talk, and a growth mindset, individuals can enhance their confidence and achieve their goals with greater determination and self-assurance..</p>
          </div>
          <div id="item">
            <h3>Practical Knowledge</h3>
            <p>Practical education emphasizes hands-on learning experiences that bridge theory and real-world application. By engaging in practical activities, such as experiments, simulations, or projects, students gain valuable skills, problem-solving abilities, and a deeper understanding of how knowledge can be applied in practical contexts.</p>
          </div>
        </div>
      </section>
    )   
   }

const Sponsor=()=>{
 return (
    <section id="sponsorsection"> 
      <h3>Education Partners</h3>
      <div id="sponsors">
      <div className="sponsors1">
      <img className="img2 sp" src={require("./images/sp2.png")} alt=""/>
      <img className="img1 sp" src={require("./images/sp6.png")}  alt=""/>
      <img className="img3 sp" src={require("./images/sp3.png")} alt=""/>
      </div>
      <div className="sponsors2">
      <img className="img5 sp" src={require("./images/sp5.png")} alt=""/>
      <img className="img4 sp" src={require("./images/sp4.png")} alt=""/></div>
      </div>
    </section>
 )   
}   

const Why_Us=()=>{
    return (
        <div className="why-us">
            <Intro />
            <Mission />
            <Sponsor />
        </div>
    )
}

export default Why_Us;