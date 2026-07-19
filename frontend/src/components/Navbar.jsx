import { useNavigate } from "react-router-dom";
import "../index.css";

function Navbar(){

  const navigate = useNavigate();

  return (

    <div className="navbar">

      <h2 onClick={()=>navigate("/profile")}>
        🚀 SkillBridge AI
      </h2>


      <div>

        <button onClick={()=>navigate("/report")}>
          Report
        </button>


        <button onClick={()=>navigate("/")}>
          Logout
        </button>

      </div>

    </div>

  );

}

export default Navbar;