import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Analysis() {

  const navigate = useNavigate();

  const result = localStorage.getItem("analysis");

  return (
    <>
    <Navbar />
    <div className="container">

      <div className="card">

        <h1>🤖 AI Profile Analysis</h1>

        <p>{result}</p>

        <button onClick={() => navigate("/careers")}>
          View Career Recommendations
        </button>

      </div>

        </div>

  </>
);
}

export default Analysis;