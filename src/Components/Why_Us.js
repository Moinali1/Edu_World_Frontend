import React from "react";
import './css/Why_Us.css';

const Intro=()=>{
 return (
    <section id="introsection"> 
    <div className="d1">Welcome to the best Learning Platform! </div>
    <div className="d2">Here its Moon</div>
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
            <p>this is mission item  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto iure velit dolorum ipsa facilis ab impedit odit? Nemo dignissimoslore Lorem ipsum, dolor sit amet consectetur</p>
          </div>
          <div id="item">
            <h3>Build Confidence</h3>
            <p>this is mission item Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto iure velit dolorum ipsa facilis ab impedit odit? Nemo dignissimoslore Lorem ipsum, dolor sit amet consectetur</p>
          </div>
          <div id="item">
            <h3>Practical Knowledge</h3>
            <p>this is mission item  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto iure velit dolorum ipsa facilis ab impedit odit? Nemo dignissimos  lore Lorem ipsum, dolor sit amet consectetur    </p>
          </div>
        </div>
      </section>
    )   
   }

const Sponsor=()=>{
 return (
    <section id="sponsorsection"> 
      <h3>Our Collaboration</h3>
      <div id="sponsors">
      <img className="img2 sp" src={require("./images/sp2.png")} alt=""/>
      <img className="img3 sp" src={require("./images/sp3.png")} alt=""/>
      <img className="img1 sp" src={require("./images/sp6.png")}  alt=""/>
      <img className="img5 sp" src={require("./images/sp5.png")} alt=""/>
      <img className="img4 sp" src={require("./images/sp4.png")} alt=""/></div>
    </section>
 )   
}   

const Why_Us=()=>{
    return (
        <div>
            <Intro />
            <Mission />
            <Sponsor />
        </div>
    )
}

export default Why_Us;