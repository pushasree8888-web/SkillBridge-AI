import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Profile(){

  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name:"",
    education:"",
    branch:"",
    year:"",
    goal:""
  });


  const handleChange = (e)=>{
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };


  const continueNext = ()=>{

    if(profile.name && profile.goal){
      navigate("/skills");
    }
    else{
      alert("Please fill required details");
    }

  };


  return(

    <div className="container">

      <div className="card">

        <h1>👋 Profile Setup</h1>

        <p>Tell us about yourself</p>


        <input
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        />


        <input
        name="education"
        placeholder="Education (B.Tech, Degree...)"
        onChange={handleChange}
        />


        <input
        name="branch"
        placeholder="Branch (CSE, ECE...)"
        onChange={handleChange}
        />


        <input
        name="year"
        placeholder="Year of Study"
        onChange={handleChange}
        />


        <input
        name="goal"
        placeholder="Career Goal (Software Engineer...)"
        onChange={handleChange}
        />


        <button onClick={continueNext}>
          Continue
        </button>


      </div>

    </div>

  );

}

export default Profile;