import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Skills(){

  const navigate = useNavigate();

  const [skills,setSkills] = useState("");


  const analyze = async()=>{

    if(!skills){
      alert("Please enter your skills");
      return;
    }


    const response = await fetch(
      "https://skillbridge-ai-c28a.onrender.com/analyze", {

        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          skills
        })
      }
    );


    const data = await response.json();


    localStorage.setItem(
      "analysis",
      data.analysis
    );

    localStorage.setItem(
      "skills",
      skills
    );


    navigate("/analysis");

  };


  return(

    <div className="container">

      <div className="card">

        <h1>💻 Your Skills</h1>

        <p>Enter your technical skills</p>


        <input
          placeholder="Python, SQL, React..."
          value={skills}
          onChange={(e)=>setSkills(e.target.value)}
        />


        <button onClick={analyze}>
          Analyze Skills
        </button>


      </div>

    </div>

  );

}


export default Skills;