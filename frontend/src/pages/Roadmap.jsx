import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Roadmap() {

  const navigate = useNavigate();

  const [roadmap, setRoadmap] = useState([]);

  useEffect(() => {

    const loadRoadmap = async () => {

      const response = await fetch(
        "https://skillbridge-ai-c28a.onrender.com/roadmap",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      const data = await response.json();

      setRoadmap(data.roadmap);

      localStorage.setItem(
        "roadmap",
        JSON.stringify(data.roadmap)
      );
    };

    loadRoadmap();

  }, []);

  return (
        <>
      <Navbar />
      <div className="container">
        <div className="card">
          <h1>📚 Learning Roadmap</h1>

        {roadmap.map((step, index) => (
          <p key={index}>
            {index + 1}. {step}
          </p>
        ))}

        <button onClick={() => navigate("/projects")}>
          View Project Suggestions
        </button>

      </div>

        </div>

  </>
);
}

export default Roadmap;