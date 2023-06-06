import React from "react";
import { Link } from "react-router-dom";
import './css/Nav.css';

const Nav=(props)=>{
    return (<nav id="navbar">
        <div id="logo">
        <Link to="/about#secondary"> 
        <img src={require('./images/logo.png')} alt=""/>
        <p>Edu World</p>
        </Link>
      </div>
      <div id="navbar-option">   
        <ul className="list-1 navlist"> 
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li className="service-button"><Link>Services</Link>
            <div className="servicemenu">
              <ul> 
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/teaching">Join Us</Link></li>
                <li ><Link to="/about/#location">Service Location</Link></li>
              </ul>
            </div>
          </li>
        </ul>
        <ul className="list-2 navlist-1">          
          <li><Link to="/contact"> Contact Us</Link></li>
          <li><Link to="/why-us"> Why Us?</Link></li>
        {/* <li><Link to="/login">Login</Link></li> */}
        {/* <li><Link to="/logout">Logout</Link></li> */}
        </ul>
        {/* <div className="cartopt"> <Link to="/cartpage"> 
        <img src={require('./images/cart.png')} alt=""/>
        </Link>
        </div> */}
      </div>
      <div className="LogoutButton"><Link to="/logout">Logout</Link></div>
  </nav>)
}

export default Nav;