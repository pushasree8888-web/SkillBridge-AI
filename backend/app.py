from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import google.generativeai as genai
import os

app = Flask(__name__)
CORS(app)

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.0-flash")


@app.route("/")
def home():
    return jsonify({
        "message": "SkillBridge AI Backend Connected"
    })


def generate_ai_response(prompt):
    try:
        response = model.generate_content(prompt)
        return response.text

    except:
        return """
Strengths:
- Good programming foundation

Skills to improve:
- Data Structures and Algorithms
- APIs
- Databases
- Cloud basics

Recommended Roles:
- Software Engineer
- Full Stack Developer
- Backend Developer

Learning Roadmap:
1. Improve programming concepts
2. Build real projects
3. Learn deployment
"""


@app.route("/analyze", methods=["POST"])
def analyze():

    data = request.json
    skills = data.get("skills", "")

    prompt = f"""
You are SkillBridge AI career mentor.

Analyze these skills:
{skills}

Give:
1. Strengths
2. Missing skills
3. Suitable jobs
4. Learning roadmap
"""

    result = generate_ai_response(prompt)

    return jsonify({
        "analysis": result
    })


@app.route("/career", methods=["POST"])
def career():

    data = request.json
    skills = data.get("skills", "").lower()

    careers = []

    if "python" in skills:
        careers.append("Backend Developer")
        careers.append("AI Engineer")

    if "sql" in skills:
        careers.append("Data Analyst")

    if "react" in skills:
        careers.append("Full Stack Developer")

    if not careers:
        careers.append("Software Engineer")

    return jsonify({
        "careers": careers
    })


@app.route("/roadmap", methods=["POST"])
def roadmap():

    return jsonify({
        "roadmap": [
            "Learn programming fundamentals",
            "Practice Data Structures and Algorithms",
            "Build full-stack projects",
            "Learn APIs and Databases",
            "Prepare for software engineering roles"
        ]
    })


if __name__ == "__main__":
    app.run(debug=True, port=5000)