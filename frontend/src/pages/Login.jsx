import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = () => {

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Enter a valid email address");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  navigate("/profile");
};


  return (

    <div className="container">

      <div className="card">

        <h1>🚀 SkillBridge AI</h1>

        <p>Your AI Career Assistant</p>


        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />


        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />


        <button onClick={handleLogin}>
          Login
        </button>


        <p>
            New User? 
            <span 
            onClick={() => navigate("/register")}
            style={{cursor:"pointer", color:"blue"}}
            >
            Register
            </span>
        </p>

      </div>

    </div>

  );

}

export default Login;