import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Careers() {

  const navigate = useNavigate();
  const [careers, setCareers] = useState([]);

  useEffect(() => {

    const loadCareers = async () => {

      const skills = localStorage.getItem("skills");

      const response = await fetch(
        "http://127.0.0.1:5000/career",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            skills
          })
        }
      );

      const data = await response.json();

      setCareers(data.careers);

      localStorage.setItem(
        "careers",
        JSON.stringify(data.careers)
      );
    };

    loadCareers();

  }, []);

  return (
    <>
    <Navbar />
    <div className="container">

      <div className="card">

        <h1>🎯 Recommended Careers</h1>

        {careers.map((career, index) => (
          <p key={index}>
            • {career}
          </p>
        ))}

        <button onClick={() => navigate("/roadmap")}>
          Next
        </button>

      </div>
        </div>

  </>
);
    
}

export default Careers;