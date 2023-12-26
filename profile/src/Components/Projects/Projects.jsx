/// Import Dependancies ///

import React from "react";

//--//

/// Import Files ///

import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";

//--//

function Projects() {
  return (
    <section className="projects">
      <h2 className="projects__title">Projects</h2>
      <ProjectCard />
    </section>
  );
}

export default Projects;
