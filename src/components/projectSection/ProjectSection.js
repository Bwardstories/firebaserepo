import React from "react";
import Project from "../project/Project";
import pokemonImage from "../../assets/images/pokemon.png";
import moodifyImage from "../../assets/images/moodify.png";
import nasaImage from "../../assets/images/nasaAPI.png";
import kwImage from "../../assets/images/companySite.png";
import memoryImage from "../../assets/images/memory.png";
import goodLaughsImage from "../../assets/images/goodlaughs.png";
import "./ProjectSection.scss";

// project list to pass down through props to render project sections dynamically
const projectList = [
  {
    "id": 1,
    "title": "Good Laughs Comedy",
    "skills": [
      "Javascript",
      "CSS",
      "RESTful API",
      "Rreact",
      "Express",
      "Node.js",
      "mongoDB",
      "Redux",
    ],
    "minDesc": "Comedy Show Website",
    "description":
      "This site pulls events from the Eventbrite API and displays them for users to find and purchase tickets.  You can create your own user account to login. With an admin account to create events and upload them to eventbrite using their API.",
    "url": "https://goodlaughscomedy.web.app/",
    "image": goodLaughsImage,
  },
  {
    "id": 2,
    "title": "NASA Image Generator",
    "skills": ["Javascript", "CSS", "HTML", "API", "React", "React-Bootstrap"],
    "minDesc": "NASA Image Generator",
    "description":
      "This is an image generator that uses the NASA Api to generate images through a specific date range.  You then have the ability to like each image.",
    "url": "https://bwardstories.github.io/nasa-image-loader/",
    "image": nasaImage,
    "github": "https://github.com/Bwardstories/nasa-image-loader",
    "fullStack": false,
  },
  {
    "id": 3,
    "title": "Company Landing Page",
    "skills": ["Javascript", "CSS", "HTML", "API", "React", "React-Bootstrap"],
    "minDesc": "Landing page for company",
    "description":
      "This is a landing page for a web design company which has a contact page with email functionality",
    "url": "https://kw-web-integrations.com/",
    "image": kwImage,
    "github": "https://github.com/pkaseta/KW-Web-Integrations-Site",
    "fullStack": false,
  },
  {
    "id": 4,
    "title": "NFL Memory Game",
    "skills": ["Javascript", "CSS", "HTML"],
    "minDesc": "Memory Card Game",
    "description":
      "This is a Memory card game that is NFL themed made with vanilla javascript and CSS",
    "url": "https://bwardstories.github.io/nflmemorygame/",
    "image": memoryImage,
    "github": "https://github.com/Bwardstories/nflmemorygame",
    "fullStack": false,
  },
];

export default function ProjectSection() {
  return (
    <div id="projectSection" className={"projectSectionContainer"}>
      <h1 className="projectSectionHeader">Notable Projects</h1>
      {/* maps through the ProjectList and renders each Project component, and passes down the data for each project through props */}
      {projectList.map((project, index) => (
        <Project project={project} key={index} id={project.id} />
      ))}
    </div>
  );
}
