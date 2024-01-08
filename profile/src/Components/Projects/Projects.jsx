/// Import Dependancies ///

import React from "react";

//--//

/// Import Files ///

import ProjectCard from "./ProjectCard/ProjectCard";

// assets //
import Darticon from "../logoComponent/Darticon";
import AndroidStudio from "../logoComponent/AndroiStudio";

//--//

function Projects() {
  return (
    <section className="bg-[#fff8dd] h-[150vh] ">
      <h2 className="text-[50px] text-center">Projects</h2>
      <h5 className="text-[20px] text-center mb-[90px]">Projects</h5>
      <div className="my-[20px]">
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
