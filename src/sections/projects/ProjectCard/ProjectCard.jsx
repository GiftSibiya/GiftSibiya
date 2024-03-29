/// Import Dependencies ///
import React from "react";
//--//

/// Import Files ///

// import CsIcon from "../../logoComponent/CsIcon";
import github from "../../../assets/icons/github.png";
//--//

function ProjectCard(props) {
  return (
    <div className="flex  p-2 justify-around h-auto mt-[40px]">
      <div className="flex justify-around h-[250px] ">
        <div className="size-[140px] ">
          <img src={props.screenshot} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center h-[250px] w-[55vw]">
          {/* Title */}

          <div className="text-center text-[1.7rem] h-[30px]">
            {" "}
            {props.title}
          </div>

          {/* Description */}
          <div className="text-center w-[50vw] text-[12px] md:text-[15px] my-[12px]">
            {props.description}
          </div>

          {/* Tech Stack */}
          <div className="flex justify-around w-[20vw] text-center  my-[12px] text-[1rem] h-[45px]">
            {" "}
            {props.techStack}
          </div>

          {/* Button Links */}
          <div className="flex justify-around items-center text-center text-[1rem] h-[40px] ">
            <div className="flex justify-between h-[30px] w-[300px]">
              <a
                className="flex w-[130px] h-[30px] bg-[#141414] rounded-[20px] text-white text-center justify-center items-center "
                href={props.gitLink}
              >
                <img className="h-[20px] mx-[5px]" src={github} alt="" />
                <div className="">Code Here</div>
              </a>
              <a
                className="flex w-[130px] h-[30px] bg-[orange] rounded-[20px] text-white text-center justify-center items-center "
                href={props.demoLink}
              >
                Demo Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
