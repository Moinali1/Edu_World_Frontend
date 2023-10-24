import React, { useState,useEffect } from "react";
import './css/CourseDetails.css';


const CourseDetails=(props)=>{
  const [courseDetails, setCourseDetails] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [isVaildEmail,setIsValidEmail]=useState(true);
  const [phone,setPhone]=useState('');
  const [isVaildPhone,setIsValidPhone]=useState(true);

  useEffect(() => {
    const courseName = localStorage.getItem('courseSelected');
    // console.log(course)
    try{
    fetch('https://edu-world-backend.vercel.app/coursedetails', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ courseName }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          // Handle the error case
          console.error(data.error);
          alert("Problem in getting data from database, try to reload")
        } else {
          // Update the state with the received course details
          setCourseDetails(data);
          // console.log(courseDetails);
        }
      })
      .catch(error => {
        // Handle any errors
        // console.error('Error:', error);
        alert("Database Error for /coursedetails or server problem");
      });
    }
    catch
    {
      alert("Server not responding")
    } 
  }, []);

  // useEffect(() => {
  //   console.log(courseDetails);
  //   // console.log(courseDetails.price);
  // }, [courseDetails]);
  // just to check the courseDetails loading

    function handleEnrollBtn()
    {
      setIsFormVisible(true)
    }

    async function submitEnrollDetails()
    {
      if(name=="" || email=="" || phone=="" || !isVaildEmail || !isVaildPhone)
      {
        alert("Enter the details properly");
        return;
      }

      const requestBody = {
        username: name,
        phone: phone,
        email: email,
        course: courseDetails.coursename,
        price: courseDetails.price
      };
      // let cn=courseDetails.coursename;
      // let rate=courseDetails.price;
      try
      {
      let result= await fetch('https://edu-world-backend.vercel.app/enrolldetails',{
      method:"post",  
      body: JSON.stringify({requestBody}),
      headers:{
        'Content-Type':'application/json'
      }
      });
      result= await result.json();
      console.log(result.response)
      if(result.response==="1")
      {
        alert("Course purchase successful! we will shortly send you the details");
      }
      else if(result.response==="2")
      {
        alert("You have already registered for a course, cannot register in multiple at a single time, contact us if have an issue");
      }
      else
      {
        alert("cannot get the response, check database request /enrolldetails")
      }
    }
    catch{
      alert("server not responding");
    }
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


    return (
          <div className="courseDetailsContainer">
            <h1>Course Details - {courseDetails.coursename}</h1>
            <div className="course-details">
              {/* <img src="system-analysis.jpg" alt="System Analysis Course"/> */}
              <h2 className="cd1">{courseDetails.coursename}</h2>
              <p className="cd2">Duration : {courseDetails.duration}</p>
              <p className="cd3">Instructor : {courseDetails.instructor}</p>
              <p className="cd4">Price: ${courseDetails.price}</p>
              <p className="cd5">Description: {courseDetails.description}</p>
              <button className="enroll-btn" onClick={handleEnrollBtn}>Enroll Now</button>
            </div>
                    {isFormVisible && (
                        <div className="extraSpace">
                          <div className="popup-form">
                          <div className="close-btn-div">
                          <button className="close-btn" onClick={() => setIsFormVisible(false)}>x</button>
                          </div>
                          <h2>Register Here</h2>
                          <input type="text" name="name" value={name} placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
                          <input type="email" name="email" value={email} placeholder="Email" onChange={handleEmailChange} onBlur={validateEmail}/>
                          {!isVaildEmail && (
                            <div className="error-message">
                            Please enter a valid Email
                            </div>
                          )}
                          
                          <input type="phone" name="phone" value={phone} placeholder="Phone" onChange={handlePhoneChange} onBlur={validatePhone}/>
                              {!isVaildPhone && (
                                <div className="error-message">
                                Please enter a valid Phone Number
                                </div>
                              )}
                          <div className="form-price-div">Course Price : ${courseDetails.price}</div>
                          <button className="submit-btn" type="submit" onClick={submitEnrollDetails}>Proceed</button>
                          <h5>Note: name entered here will be reflected on the certificate</h5>
                          </div>
                        </div>
                     )}
           </div>
    )
}

export default CourseDetails;