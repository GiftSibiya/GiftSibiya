/// Import Dependancies ///

import React from "react";

//--//

/// Import Files ///

import ProjectCard from "./ProjectCard/ProjectCard";

// assets //
import Darticon from "../logoComponent/Darticon";
import AndroidStudio from "../logoComponent/AndroiStudio";
import fronSeat from "../../assets/images/frontSeatGif.gif";
import artisan from "../../assets/images/artisan.gif";
import sneke from "../../assets/images/sneke.gif";
import VsCode from "../logoComponent/VsCode";

//--//

function Projects() {
  return (
    <section className="bg-[#fff8dd] h-[200vh] ">
      {/* Font Seat */}

      <h2 className="text-[50px] text-center">Public Projects</h2>
      <h5 className="text-[20px] text-center mb-[90px]">Projects</h5>
      <div className="my-[20px]">
        <ProjectCard
          screenshot={fronSeat}
          title="FrontSeat"
          description="The official mobile version of my web Taxi Maths 
          calculator taken from html, css and JavaScript to Dart and flutter. Simple and sleek design for an ease of UX "
          techStack={[
            <VsCode key="vsCode" />,
            <AndroidStudio key="android" />,
            <Darticon key="dart" />,
          ]}
        />

        {/* Second Project */}
        <ProjectCard
          screenshot={artisan}
          title="Artisan Finder"
          description="The software sollution to finsing qualified, talented and capable indivials at a few taps of the screen"
          techStack={[
            <VsCode key="vsCode" />,
            <Darticon key="dart" />,
            <AndroidStudio key="android" />,
          ]}
        />
        {/* Second Project */}
        <ProjectCard
          screenshot={sneke}
          title="Sneke"
          description="A User Interface and front end design challenge foor a food and snack application. Made as a quick template for e-commerce applications"
          techStack={[
            <VsCode key="vsCode" />,
            <Darticon key="dart" />,
            <AndroidStudio key="android" />,
          ]}
        />
      </div>
    </section>
  );
}

export default Projects;
