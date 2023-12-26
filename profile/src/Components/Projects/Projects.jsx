/// Import Dependancies ///

import React from "react";

//--//

/// Import Files ///

import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";

// assets //
import frontSeat1 from "../../assets/images/light_screenshot.png";
import Darticon from "../logoComponent/Darticon";
import AndroidStudio from "../logoComponent/AndroiStudio";

//--//

function Projects() {
  return (
    <section className="projects">
      <h2 className="projects__title">Projects</h2>
      <h5 className="projects__description">Projects</h5>
      <div className="projectsCard">
        <ProjectCard
          screenshot=""
          title="FrontSeat"
          description="The mobile version of my web Taxi Maths 
          calculator taken from html and css to Dart and flutter"
          techStack={[<Darticon key="dart" />, <AndroidStudio key="android" />]}
        />
        <ProjectCard
          screenshot=""
          title="FrontSeat"
          description="The mobile version of my web Taxi Maths 
          calculator taken from html and css to Dart and flutter"
          techStack={[<Darticon key="dart" />, <AndroidStudio key="android" />]}
        />
      </div>
    </section>
  );
}

export default Projects;
