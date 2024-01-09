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
      <h5 className="text-[20px] text-center mb-[90px]">
        My latest public development projects that I have developed. There's
        more coming that's currently in production ^ _ ^ .{" "}
      </h5>
      <div className="my-[20px]">
        <ProjectCard
          screenshot={fronSeat}
          title="FrontSeat"
          description="Introducing the official mobile version of Taxi Maths, transitioning from HTML, CSS, and JavaScript to Dart and Flutter. The sleek design ensures a user-friendly experience, enhancing the ease of use for this innovative and efficient calculator."
          techStack={[
            <VsCode key="vsCode" />,
            <AndroidStudio key="android" />,
            <Darticon key="dart" />,
          ]}
          gitLink="https://github.com/GiftSibiya/flutter_FrontSeat"
          demoLink="https://www.tiktok.com/@b0b0.sa/video/7310111195896319237?is_from_webapp=1&sender_device=pc&web_id=7322080456966292997"
        />

        {/* Second Project */}
        <ProjectCard
          screenshot={artisan}
          title="Artisan Finder"
          description="Experience a groundbreaking software solution that streamlines the process of finding qualified, talented, and capable individuals—all at your fingertips. Our innovative technology simplifies talent discovery with user-friendly taps on the screen, offering a seamless and efficient approach to connecting with the best candidates for your needs"
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
          description="Engage in a UI and front-end challenge for a food and snack app. A quick, e-commerce-ready template, designed to elevate the user experience, perfect for culinary enthusiasts exploring delicious offerings."
          techStack={[
            <VsCode key="vsCode" />,
            <Darticon key="dart" />,
            <AndroidStudio key="android" />,
          ]}
          gitLink="https://github.com/GiftSibiya/Sneke"
          demoLink="https://www.tiktok.com/@b0b0.sa/video/7302842159093271814?is_from_webapp=1&sender_device=pc&web_id=7322080456966292997"
        />
      </div>
    </section>
  );
}

export default Projects;
