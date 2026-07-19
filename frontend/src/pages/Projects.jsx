import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Projects() {

  const navigate = useNavigate();

  const projects = [
    {
      name: "AI Resume Analyzer",
      skills: "Python, Flask, AI"
    },
    {
      name: "Job Portal",
      skills: "React, APIs, SQL"
    },
    {
      name: "Expense Tracker",
      skills: "React, Database"
    }
  ];
    return (
      <>
      <Navbar />

      <div className="container">
  

      <div className="card">

        <h1>💡 Recommended Projects</h1>

        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.name}</h3>
            <p>Skills: {project.skills}</p>
          </div>
        ))}

        <button onClick={() => navigate("/report")}>
          Generate Final Report
        </button>

      </div>

        </div>

  </>
);
}

export default Projects;