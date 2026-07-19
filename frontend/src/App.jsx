import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Analysis from "./pages/Analysis";
import Careers from "./pages/Careers";
import Roadmap from "./pages/Roadmap";
import Projects from "./pages/Projects";
import Report from "./pages/Report";
import Register from "./pages/Register";

function App(){

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login/>}/>

        <Route path="/profile" element={<Profile/>}/>

        <Route path="/skills" element={<Skills/>}/>

        <Route path="/analysis" element={<Analysis/>}/>

        <Route path="/careers" element={<Careers />} />

        <Route path="/roadmap" element={<Roadmap />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/report" element={<Report />} />

        <Route path="/register" element={<Register/>}/>

      </Routes>

    </BrowserRouter>

  );

}


export default App;