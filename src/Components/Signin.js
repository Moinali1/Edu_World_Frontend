import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './css/Login.css';
function Signin(props){
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const [isVaildEmail,setIsValidEmail]=useState(true);
    const[password,setPassword]=useState('');
    const navigate=useNavigate();

    useEffect(()=>{
      const auth= localStorage.getItem('user');
      if(auth && props.clearStorage=="false")//storage clear karna he ya nhi
      {
        navigate("/");
      }
      else
      {
        localStorage.clear('user');
        props.setLoginState(false);
      }
      console.log("useeffect rendered")
    },[])

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




    const collectSignInData=async ()=>{
      if(name=="")
      {
        alert("Enter the name");
        return;
      }
      if(password.length<=7)
      {
        alert("Password length must be greater then 7");
        return;
      }

      if(name!="" && isVaildEmail==true && email.length>0 && password.length>7)
      {



      try{
      let result= await fetch('https://edu-world-backend.vercel.app/register',{
        method:'post',
        body: JSON.stringify({name,email,password}),
        headers:{
          'Content-Type':'application/json'
        }
      });

      result=await result.json();
      console.log(result.response);
      // console.log(typeof(result.response))
      
      // let json= JSON.stringify(result);
      // console.log((json[0]));
      // console.log(typeof(json));
      if(result.response==="1")
      {
        alert("Registration Done!, Try to SignIn")
      }
      else if(result.response==="2")
      {
        alert("Email already exist");
      }
      else{//response==500
        alert("Error in database operation for /register");
      }
    }
    catch{
      alert("server not responding");
    }
    }


    else
    {
      alert("Enter the proper details");
    }
    }

    const verifyDetails= async ()=>{

      if(password.length==0 && email.length==0)
      {
        alert("Enter the details");
        return;
      }
      if(password.length==0)
      {
        alert("Enter the password");
        return;
      }

      try{

      const requestBody={
        email:email.toLocaleLowerCase(),
        password:password
      }  

      let result= await fetch('https://edu-world-backend.vercel.app/',{
        method:'post',
        body: JSON.stringify({requestBody}),
        headers:{
          'Content-Type':'application/json'
        }
      });
      let json= await result.json();
      if(json.response=="1")
      {
        let username=json.name;
        localStorage.setItem("user",JSON.stringify({username,email}));
        props.setLoginState(true);
        navigate("/");
      }
      else if(json.response=="2")
      {
        alert("Details not matched");
      }
      else if(json.response=="3")
      {
        alert("Email not registered, SignUp first");
      }
      else{
        alert("Error in database operation for /");
      }

    }
    catch
    {
      alert("server not responding");
    }

    }

    useEffect(() => {
      document.getElementById("signinbtn").style.height="0";
      document.getElementById("option2").style.display="none";
      // console.log("second use effect rendered")
       },[]);

      function clickSignIn(){
        document.getElementById("option1").style.display="none"; 
        document.getElementById("option2").style.display="block";
        document.getElementById("nameField").style.maxHeight="0";
        // document.getElementById("nameField").style.padding="0";
        document.getElementById("title").innerHTML="Sign In";
      
        document.getElementById("signinbtn").style.height="40px";
        document.getElementById("signupbtn").style.height="0";
      }
      
      function clickSignUp()
      {
        document.getElementById("option1").style.display="block"; 
        document.getElementById("option2").style.display="none"; 
        document.getElementById("nameField").style.maxHeight="65px";
        // document.getElementById("nameField").style.padding="18px 15px";
        document.getElementById("title").innerHTML="Sign Up";
      
        document.getElementById("signinbtn").style.height="0";
        document.getElementById("signupbtn").style.height="40px";
      }
      
      

    return (<div className="container">
      <div id="signin-logo">
        <img src={require('./images/logo.png')} alt=""/>
        <p>Edu World</p>
      </div>
      <div className="form-box">
        <h1 id="title">Sign Up </h1>


          <div className="fields">
            <div className="field" id="nameField"><i className="fa-solid fa-user"></i>
              <input type="text" name="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>



            <div className="field"><i className="fa-solid fa-envelope"></i>
              <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} onBlur={validateEmail}/>
            </div>
            {!isVaildEmail && (
                   <div className="error-message">
                    Please enter a valid Email
                  </div>
             )}


            <div className="field"><i className="fa-solid fa-lock"></i>
              <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>




            <p id="option1"><span id="txt1">Already had account </span><span className="sbtn" id="toSignIn" onClick={clickSignIn}>Sign In </span></p>

            <p id="option2"><span id="txt2">Create an account </span><span className="sbtn" id="toSignUp" onClick={clickSignUp}>Sign Up   </span></p>


            <div className="btn-field">
              <button id="signupbtn" type="submit" onClick={collectSignInData}>Sign Up </button>
              <button id="signinbtn" type="submit" onClick={verifyDetails}>Sign In </button>
            </div>


          </div>
      </div>
    </div>
    )
}

export default Signin;