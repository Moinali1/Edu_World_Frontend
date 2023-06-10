import React from "react";
import './css/Home.css';
import classNames from "classnames";
import {Link} from "react-router-dom"


const HomePrimaryContainer=()=>{

    return(
        <section id="wucontainer">
        <div id="wucontainer1">
          <div className={classNames("c1","item")}>Where technology teams build better skills, faster</div>
          <div className={classNames("c2","item")}> Technology teams are only as successful as their skills are relevant. With access to expert-authored courses and content, skill assessments and analytics, Pluralsight Skills gives you the most effective path to building business-critical skills.</div><Link to="/courses">    
            <div className="container-btn item">Join Now</div></Link>
        </div>
      </section>
    )
}

const HomePrimary=()=>{

    return(
        <section id="wuprimary">
      <div id="wuprimary-container"> 
        <div id="wuprimary1">
          <div className="head1">THE TECHNOLOGY SKILLS PLATFORM</div>
          <div className="head2">Empower employees to build their skills</div>
        </div>
        <div id="wuprimary2"> 
          <div className="wu-image1"> 
          <img src={require("./images/PrimaryImg1.png")} alt=""/>
          </div>
          <div className="wuprimary22"> 
            <div className="wup1">COURSE LIBRARY</div>
            <div className="wup2">Feel confident your team is learning from the industry’s best         </div>
            <div className="wup3">Upskill your team with courses on the most in-demand technology topics, taught by the experts who know them best. </div>
            <div className="wup4">
              <div className="wup41 wup-list-box">
                <ul type="arrow">
                  <li className="it">Software Development </li>
                  <li className="it">Machine Learning & AI </li>
                  <li className="it">Business Analytics </li>
                </ul>
              </div>
              <div className="wup42 wup-list-box">
                <ul> 
                  <li className="it">Data Professional</li>
                  <li className="it">Information & Cybersecurity</li>
                  <li className="it">Blockchain</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

const HomeSeeThis=()=>{
  const d= new Date();
    return(
        <section id="wusecondary"> 
        <div id="wuseconadry1">
          <div className="wusecondary-head">See this</div>
        </div>
        <div id="wuseconadry2">
          <div className="wuseconadry1-row1 wuseconadry1-row"> 
            <div className="wublock wublock1">
              <div className="img-box">
               <img src={require('./images/why10.png')} alt=""/> 
               </div>
              <div className="space-block"> </div>
              <div className="box-content">93% of surveyed organizations realized a return on their investment within 6-12 months of implementing Pluralsight</div>
            </div>
            <div className="wublock wublock2">
              <div className="img-box"> 
              <img src={require("./images/why11.png")} alt=""/>
              </div>
              <div className="space-block"> </div>
              <div className="box-content">96% of surveyed organizations are likely to recommend Pluralsight, increases retention and keeps employees engaged</div>
            </div>
            <div className="wublock wublock3">
              <div className="img-box">
               <img src={require("./images/why13.png")} alt=""/>
              </div>
              <div className="space-block"> </div>
              <div className="box-content">Over half of surveyed organizations confirmed that Pluralsight has enabled them to save time and money</div>
            </div>
          </div>
          <div className="wuseconadry1-row2 wuseconadry1-row">
            <div className="wublock wublock4">
              <div className="img-box"> 
              <img src={require("./images/why14.png")} alt=""/>
              </div>
              <div className="space-block"> </div>
              <div className="box-content">Providing skill development resources to your employees increases retention and keeps employees engaged</div>
            </div>
            <div className="wublock wublock5">
              <div className="img-box"> 
              <img src={require("./images/why15.png")} alt=""/>
              </div>
              <div className="space-block"> </div>
              <div className="box-content">Tools like Pluralsight enable objective career development discussions and guide employees into future roles</div>
            </div>
            <div className="wublock wublock6">
              <div className="img-box">
               <img src={require("./images/why16.png")}  alt=""/>
               </div>
              <div className="space-block"> </div>
              <div className="box-content">A culture of learning encourages employees to grow and learn from one another, making the whole business better</div>
            </div>
          </div>
          <div>
            <div className="box0">TechValidate Survey, {d.getFullYear()}</div>
          </div>
        </div>
      </section>
    )
}

const Home=()=>{
  
    return(
        <div>
            <HomePrimaryContainer />
            <HomePrimary />
            <HomeSeeThis />
        </div>
    )
}

export default Home;