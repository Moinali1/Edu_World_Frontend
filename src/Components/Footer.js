import React from "react";
import './css/Footer.css';
const Footer=()=>
{
    const d= new Date()
    return (
        <div>
        <div id="end">copyright© {d.getFullYear()} | All rigths reserved</div>
        </div>
    )
}
export default Footer;