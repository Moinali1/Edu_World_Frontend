import React, { useEffect, useState } from "react";
import './css/Contact.css';

const ContactPrimary=()=>{
    return (
        <div>
            <h1 id="heading">Fill the details and get a call back</h1>
        </div>
    )
}

const ContactForm=()=>{
    const [username,setUserName]=useState('');
    const [phone,setPhone]=useState('');
    const [isVaildPhone,setIsValidPhone]=useState(true);
    const [email,setEmail]=useState('');
    const [isVaildEmail,setIsValidEmail]=useState(true);
    const [gender,setGender]=useState('');
    const [course,setCourse]=useState('');
    const [pin,setPin]=useState('');
    const [isValidPin,setIsValidPin]=useState(true);
    const [address,setAddress]=useState('');
    const [query,setQuery]=useState('');

    // setUserName();
    // setEmail(localStorage.getItem("user").email);
    
    useEffect(()=>{
        const user=localStorage.getItem("user");
        const parsedUser= JSON.parse(user);
        // console.log(parsedUser.username)
        // console.log(parsedUser.email)
        setUserName(parsedUser.username);
        setEmail(parsedUser.email);
    },[])

    const handleUserName=(e)=>
    {
        const{value}=e.target;
        const restrictedValue=value.slice(0,80);
        setUserName(restrictedValue);
    }

    const handlePhoneChange = (e) => {
        const { value } = e.target;
        // Perform validation or restrictions on the input value
        const restrictedValue = value.replace(/[^0-9]/g,''); // Restrict input to numeric characters only
        const truncatedValue = restrictedValue.slice(0, 10);
        setPhone(truncatedValue);
      }; 

    const validatePhone=()=>{
        const isValid= phone.length==10;
        setIsValidPhone(isValid);
    }  

      
  const handleEmailChange = (e) => {
    const { value } = e.target;
    // Perform validation or restrictions on the email value
    const restrictedValue = value.replace(/\s/g, ''); // Remove whitespace
    setEmail(restrictedValue);
  };

  const validateEmail = () => {
    // Perform email validation
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsValidEmail(isValid);
  };

  const handlePinChange=(e)=>{
    const {value}= e.target;

    const restrictedValue= value.replace(/[^0-9]/g,'');
    const truncatedValue=restrictedValue.slice(0,6);
    setPin(truncatedValue);
  }

  const validatePin = () => {
    // Perform email validation
    const isValid = pin.length==6;
    setIsValidPin(isValid);
  };


    const VerifyAndSubmitDetails= async ()=>{

      if(username.length>0 && phone.length==10 && isVaildEmail && gender!="" && course!="0" && pin.length==6 && address!="" && query!="")
      {

        try{
        let result = await fetch('https://edu-world-backend.vercel.app/contactdetails',{
            method:"post",
            body:JSON.stringify({username,phone,email,gender,course,pin,address,query}),
            headers:{
                'Content-Type':'application/json'
            }
        });

        result= await result.json();

        if(result.response=="1")
        {
            alert("Details submitted SUCCESSFULLY! we will shortly contact you");
        }
        else if(result.response=="2")
        {
            alert("A request already exist with the Email! Please wait we will shortly contact you");
            console.log(username,phone,email,gender,course,pin,address);

        }
        else{
          alert("Database not responding for /contactdetails");
        }
    }
    catch
    {
        alert("Server not responding")
    }
  }
  else{
    alert("!DETAILS NOT SUBMITTED, fill all the entries properly");
  }
    

    }

    return(
<div className="outerDetailsContainer">
<div  id="detailsContainer">
<input type="text"  className= "myinput" name="username" value={username} placeholder="Enter your name.."
onChange={handleUserName}
/>
<input type="phone" className= "myinput" name="phone" value={phone} placeholder="Enter your phone number" pattern="[1-9]{1}[0-9]{9}" onChange={handlePhoneChange} onBlur={validatePhone}/>
{!isVaildPhone && (
        <div className="error-message">
          Please enter a valid Phone Number
        </div>
      )}



<input type="email" className= "myinput" name="email" value={email} placeholder="Enter your email.." onChange={handleEmailChange} onBlur={validateEmail} />
{!isVaildEmail && (
        <div className="error-message">
          Please enter a valid Email
        </div>
      )}


<div className="myinput-radio">
<input type="radio" className= "rb rb1" name="gender" value="Male" onChange={(e)=>setGender(e.target.value)} />&nbsp;&nbsp; Male
<input type="radio" className= "rb rb2" name="gender" value="Female" onChange={(e)=>setGender(e.target.value)} />&nbsp;&nbsp; Female
</div>


<select className="myinput" id="Course-list" name="course" value="0"  onChange={(e)=>setCourse(e.target.value)} > 
<option className="opt" value="0" disabled="disabled"  >Select an option (Optional)</option>
<option className="opt" value="System Analysis">System Analysis </option>
<option className="opt" value="Business Analytic">Business Analytic</option>
<option className="opt" value="Artificial Intelligence">Artificial Intelligence</option>
<option className="opt" value="Data Science">Data Science</option>
<option className="opt" value="Cyber Security">Cyber Security</option>
<option className="opt" value="Digital marketing">Digital marketing</option>
<option className="opt" value="Crypto Protocol">Crypto Protocol</option>
<option className="opt" value="Business Statistics">Business Statistics</option>
<option className="opt" value="System Design">System Design</option>
</select>



<input type="pin"  className= "myinput" name="pin" value={pin} placeholder="Enter your area pincode.." onChange={handlePinChange} onBlur={validatePin} />
{!isValidPin && (
        <div className="error-message">
          Please enter a valid Pin
        </div>
      )}



<textarea type="text"  className= "myinput address" value={address} name="address" placeholder="Enter your address.." onChange={(e)=>setAddress(e.target.value)} ></textarea>


<textarea type="text"  className= "myinput query" value={query} name="address" placeholder="Ask your query" onChange={(e)=>setQuery(e.target.value)} ></textarea>



<button id="btn" onClick={VerifyAndSubmitDetails}>submit </button>

</div>
</div>
)
}

const Contact=()=>{
    return(
        <div className="mainContactDiv">
            <ContactPrimary/>
            <ContactForm/>
        </div>
    )
}

export default Contact;