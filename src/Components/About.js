import React, { useEffect, useRef } from "react";
import './css/About.css';

const AboutPrimary=()=>{
    return(<div>
      <section id="primary">
      <div className="d1">About Us</div>
      </section>
      <section id="primary2"> 
        <div className="d2">For us, it's not just about bringing you  education from various fields. It's about making a connection, which is why we sit down with the students, breshing up the things that will arrive success with full of knowledge. Learn with us!  </div>
      </section>
      </div>
    )
}

const AboutSecondary=()=>{
    return(
        <section id="secondary"> 
        <div className="sec1">
          <div className="sec11">HOW WE WORK!! </div>
          <div className="sec12"> 
            <ul>
              <li className="l1"> Analyse Student</li>
              <li className="l2"> Focus On Strength</li>
              <li className="l3"> Practical Implementation</li>
            </ul>
          </div>
        </div>
      </section>
    )
}
const AboutTernary=()=>{
    return(<section id="ternary"> 
      <div className="ter1">
        <div className="ter11">Our Aim </div>
        <div className="ter12">
          <p>Bringing good skills into you everyday. That's our mission.</p><br/>That means we don't just deliver--we bring it, always going the extra mile to make your experience memorable.
          And it means you can stand away from crowd ,enjoy everyday from zero to hero,
          to indulgent family desires, to be self confident. Whatever you crave for success, we can help.    
        </div>
      </div>
    </section>
    )
}
const AboutDanger=()=>{
    return(
        <section id="danger"> 
      <div className="dan1">
        <div className="dan11">About Us</div>
        <div className="dan12">
          <p>EduWorld is India’s leading on-demand learning platform, dedicated to bringing students a wide range of skill education,PPO offers and more, quickly and conveniently. Powered by technology and operational excellence, EduWorld is spearheading the growth of quick-commerce (q-commerce) across the region with  its network of retail partners, as well as pandamart cloud stores to provide more on-demand options beyond the thousands of courses .                        </p>
        </div>
      </div>
    </section>
    )
}
const AboutLocations=(props)=>{
    

    return(
        <section id={'location'} ref={props.secRef}> 
        <div className="lochead">Institute Locations</div>
        <div className="loc1">
          <div id="line"></div>
          <div className="row1 row">
            <ul> 
              <li><a href="//google.com"> <img className="city city1 img1 sp" src={require("./images/indore.jpg")} alt=""/>
                  <p id="para">Indore</p></a></li>
              <li><a href="//google.com"><img className="city city2 img1 sp" src={require("./images/mumbai.jpg")} alt=""/>
                  <p id="para">Mumbai</p></a></li>
              <li><a href="//google.com"><img className="city city3 img1 sp" src={require("./images/pune.jpg")} alt=""/>
                  <p id="para">Pune</p></a></li>
            </ul>
          </div>
          <div className="row2 row">
            <ul>
              <li><a href="//google.com"><img className="city city4 img1 sp" src={require("./images/delhi.jpg")} alt=""/>
                  <p id="para"> New Delhi</p></a></li>
              <li><a href="//google.com"><img className="city city5 img1 sp" src={require("./images/malegaon.jpg")} alt=""/>
                  <p id="para">Malegaon</p></a></li>
              <li><a href="//google.com"><img className="city city6 img1 sp" src={require("./images/kota.jpg")} alt=""/>
                  <p id="para">Kota</p></a></li>
            </ul>
          </div>
          <div className="row3 row">
            <ul> 
              <li><a href="//google.com"><img className="city city7 img1 sp" src={require("./images/hyderabad.jpg")} alt=""/>
                  <p id="para">hyderabad</p></a></li>
              <li><a href="//google.com"><img className="city city8 img1 sp" src={require("./images/channei.jpg")} alt=""/>
                  <p id="para">Channei</p></a></li>
              <li><a href="//google.com"><img className="city city9 img1 sp" src={require("./images/bhopal.jpg")} alt=""/>
                  <p id="para">Bhopal        </p></a></li>
            </ul>
          </div>
        </div>
      </section>
    )
}

function About(props){
  const sectionRef=useRef(null);

    const scrollToSection = () => {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(()=>{
    console.log(props.locationScroll)
      if(props.locationScroll==true)
      {
        scrollToSection();
      }
    })

    return(
        <div className="about">
        <AboutPrimary />
        <AboutSecondary />
        <AboutTernary />
        <AboutDanger />
        <AboutLocations secRef={sectionRef} name='locations'/>
        </div>
    )
}

export default About;
export {AboutLocations};