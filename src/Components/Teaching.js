import React, { useEffect, useState } from "react";
import './css/Teaching.css';



const TeachingPrimary=(props)=>{
    function handleTeachingFormVisiblity()
    {
        props.handleTeachingForm(true);
    }
    return(
        <div className="teaching-primary">
        <div className="teaching-primary1">

            <div className="teaching-primary-box">
                <h1>Come teach with us</h1>
                <p>Become an instructor and change lives — including your own</p>
                <button className="teaching-box-button" onClick={handleTeachingFormVisiblity}> Get Started</button>
            </div>
        </div>
        <div className="teaching-primary2">
            <div className="teaching-primary-img-div">
            <img src="https://blog.udemy.com/wp-content/uploads/2021/07/reading-girl-2.png" alt="no image"/>
            </div>
        </div>
        </div>
    )
}

const TeachingReason=(props)=>{
    return(
        <div className="reason">
            <img src={props.url} alt="no image"/>
            <h2>{props.reason_h1}</h2>
            <p>{props.reason_p}</p>
        </div>
    )
}

const TeachingSecondary=()=>{
    return(
        <div className="teaching-secondary">
            <h1> So many reasons to start</h1>
            <div className="reasons-box">
                <TeachingReason url="https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg" reason_h1="Teach your way" reason_p="Publish the course you want, in the way you want, and always have control of your own content."/>
                <TeachingReason url="https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg" reason_h1="Inspire learners" reason_p="Teach what you know and help learners explore their interests, gain new skills, and advance their careers."/>
                <TeachingReason url="https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg" reason_h1="Get rewarded" reason_p="Expand your professional network, build your expertise, and earn money on each paid enrollment."/>
            </div>
        </div>
    )
}

const TeachingForm=(props)=>{
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [isVaildPhone,setIsValidPhone]=useState(true);
    const [email,setEmail]=useState('');
    const [isValidEmail,setIsValidEmail]=useState(true);
    const [gender,setGender]=useState('');
    const [address,setAddress]=useState('');
    const [question,setQuestion]=useState('');
    const [selectedResumeFile, setSelectedResumeFile] = useState(null);


    const handleUserName=(e)=>
    {
        const{value}=e.target;
        const restrictedValue=value.slice(0,80);
        setName(restrictedValue);
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




  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    setSelectedResumeFile(file);
  };



  useEffect(()=>{
    console.log(selectedResumeFile)
  },[selectedResumeFile])


  const VerifyAndSubmitTeachingDetails = async () => {

    // alert("File upload option is not supported due to the server restriction. That's why currently restricted it.")
    // return;
    // just for server restriction

    if (name.length === 0 || phone.length !== 10 || !isValidEmail || gender === "" || address === "" || question === "") {
      alert("Submit the details properly");
      return;
    }//|| selectedResumeFile === null removed form if
  
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("phone", phone);
    // formData.append("email", email);
    // formData.append("gender", gender);
    // formData.append("address", address);
    // formData.append("question", question);
    // formData.append("resumeFile", selectedResumeFile);
    try{
    let result = await fetch('https://edu-world-backend.vercel.app/teachingdetails', {
      method: "POST",
      // body: formData,
      body: JSON.stringify({name,phone,email,gender,address,question}),
      headers:{
        'Content-Type':'application/json'
    }
    });
    result = await result.json();
  
    if (result.response === "1") {
      alert("Details submitted SUCCESSFULLY! We will shortly contact you");
    } else if(result.response === "2") {
      alert("A request already exists with the email! Please wait, we will respond to it as soon as possible");
    }
    else if(result.response === "3")
    {
      alert("Resume not save to server");
    }
    else 
    {
      alert("Database Error for /teachingdetails");
    }
  }
  catch
  {
    alert("Server not responding");
  }

  }
  


   return( <div className="teaching-form-container">
    <div className="teaching-form">
    <div className="close-btn-div-tf">
            <button className="close-btn-tf" onClick={() => props.handleTeachingForm(false)}>
             x
            </button>
            </div>

    <div className="tf-heading">Boost up your career</div>

<input type="text"  className= "myinput-tf" name="name" value={name} placeholder="Enter your name.."
onChange={handleUserName}
/>
<input type="phone" className= "myinput-tf" name="phone" value={phone} placeholder="Enter your phone number" pattern="[1-9]{1}[0-9]{9}" onChange={handlePhoneChange} onBlur={validatePhone}/>
{!isVaildPhone && (
        <div className="error-message-tf">
          Please enter a valid Phone Number
        </div>
      )}



<input type="email" className= "myinput-tf" name="email" value={email} placeholder="Enter your email.." onChange={handleEmailChange} onBlur={validateEmail} />
{!isValidEmail && (
        <div className="error-message-tf">
          Please enter a valid Email
        </div>
      )}


<div className="myinput-radio">
<input type="radio" className= "rb rb1" name="gender" value="Male" onChange={(e)=>setGender(e.target.value)} />&nbsp;&nbsp; Male
<input type="radio" className= "rb rb2" name="gender" value="Female" onChange={(e)=>setGender(e.target.value)} />&nbsp;&nbsp; Female
</div>

<div className="cvUpload"> Upload resume &nbsp;
      <input type="file" accept="application/pdf" onChange={handleFileUpload} />
    </div>

<textarea type="text"  className= "myinput-tf" value={address} name="address" placeholder="Enter your address.." onChange={(e)=>setAddress(e.target.value)} ></textarea>

<textarea type="text"  className= "myinput-tf" value={question} name="address" placeholder="How you will make the impact (Explain)" onChange={(e)=>setQuestion(e.target.value)} ></textarea>


<button className="tf-form-btn" onClick={VerifyAndSubmitTeachingDetails}>submit </button>
<div className="tf-note"> note: you can also mail your resume at <b>eduworldinc12@gmail.com</b></div>
    </div>
    </div>
   )
}

const Teaching=()=>{
const [teachingFromVisible,setTeachingFormVisible]=useState(false);
    return(
        <div className="teaching">
            <TeachingPrimary handleTeachingForm={setTeachingFormVisible}/>
            <TeachingSecondary/>
            {teachingFromVisible && <TeachingForm handleTeachingForm={setTeachingFormVisible}/>}
        </div>
    )
}
export default Teaching;