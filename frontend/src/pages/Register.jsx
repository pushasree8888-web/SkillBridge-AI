import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Register(){

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  });


  const handleChange = (e)=>{
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };


  const registerUser = ()=>{

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(!user.name){
      alert("Enter your name");
      return;
    }


    if(!emailPattern.test(user.email)){
      alert("Enter a valid email address");
      return;
    }


    if(user.password.length < 6){
      alert("Password must be at least 6 characters");
      return;
    }


    if(user.password !== user.confirmPassword){
      alert("Passwords do not match");
      return;
    }


    alert("Registration successful! Please login.");

    navigate("/");

  };


  return(

    <div className="container">

      <div className="card">

        <h1>🚀 Create Account</h1>

        <p>Join SkillBridge AI</p>


        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
        />


        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />


        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />


        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
        />


        <button onClick={registerUser}>
          Register
        </button>


      </div>

    </div>

  );

}

export default Register;