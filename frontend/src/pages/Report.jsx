import jsPDF from "jspdf";
import Navbar from "../components/Navbar";
import "../index.css";
import ProgressBar from "../components/ProgressBar";


function Report() {

  const skills = localStorage.getItem("skills");

  const analysis = localStorage.getItem("analysis");

  const careers = JSON.parse(
    localStorage.getItem("careers") || "[]"
  );

  const roadmap = JSON.parse(
    localStorage.getItem("roadmap") || "[]"
  );


  const calculateScore = () => {

    if(!skills) return 0;

    let score = 40;

    if(skills.toLowerCase().includes("python"))
      score += 15;

    if(skills.toLowerCase().includes("react"))
      score += 15;

    if(skills.toLowerCase().includes("sql"))
      score += 15;

    if(skills.toLowerCase().includes("java"))
      score += 10;

    return score > 100 ? 100 : score;

  };


  const score = calculateScore();


  const downloadReport = () => {

    const doc = new jsPDF();


    doc.setFontSize(18);

    doc.text(
      "SkillBridge AI Career Report",
      20,
      20
    );


    doc.setFontSize(12);


    doc.text(
      `Career Readiness Score: ${score}/100`,
      20,
      40
    );


    doc.text(
      `Skills: ${skills}`,
      20,
      60
    );


    doc.text(
      "AI Analysis:",
      20,
      80
    );


    doc.text(
      analysis || "No analysis available",
      20,
      90
    );


    doc.text(
      "Recommended Careers:",
      20,
      120
    );


    careers.forEach((career,index)=>{

      doc.text(
        `${index + 1}. ${career}`,
        20,
        130 + index * 10
      );

    });


    doc.save("SkillBridge_AI_Report.pdf");

  };


  return(

    <>

      <Navbar/>

      <ProgressBar/>


      <div className="container">


        <div className="card">


          <h1>📄 SkillBridge AI Report</h1>


          <button onClick={downloadReport}>
            Download Report PDF
          </button>



          <div className="report-card">

            <h2>📊 Career Readiness Score</h2>

            <h1>{score}/100</h1>

          </div>




          <div className="report-card">

            <h2>💻 Your Skills</h2>

            <p>{skills}</p>

          </div>




          <div className="report-card">

            <h2>🤖 AI Analysis</h2>

            <p>{analysis}</p>

          </div>




          <div className="report-card">

            <h2>🎯 Recommended Careers</h2>


            {careers.map((career,index)=>(

              <p key={index}>
                • {career}
              </p>

            ))}


          </div>





          <div className="report-card">

            <h2>📚 Learning Roadmap</h2>


            {roadmap.map((step,index)=>(

              <p key={index}>
                {index + 1}. {step}
              </p>

            ))}


          </div>



        </div>


      </div>


    </>

  );

}


export default Report;