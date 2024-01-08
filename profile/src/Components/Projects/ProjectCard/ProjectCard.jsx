/// Import Dependencies ///
import React from "react";
//--//

/// Import Files ///
import Html from "../../logoComponent/Html";
import Css from "../../logoComponent/Css";
import JavaScript from "../../logoComponent/JavaScript";
import ReactIcon from "../../logoComponent/ReactIcon";
import NodeIcon from "../../logoComponent/NodeIcon";
import CsIcon from "../../logoComponent/CsIcon";
import github from "../../../assets/icons/github.png";
import Darticon from "../../logoComponent/Darticon";
import AndroidStudio from "../../logoComponent/AndroiStudio";
//--//

function ProjectCard(props) {
  return (
    <div className="flex justify-around h-[250px] mt-[40px]">
      <div className="flex justify-around h-[250px] border-b-[1px] border-grey">
        <div className="h-[250px] w-[35vw]">{props.screenshot}</div>
        <div className="flex flex-col justify-center h-[250px] w-[55vw]">
          <div className="text-center text-[1.7rem] h-[30px]">
            {" "}
            {props.title}
          </div>
          <div className="text-center text-[1rem] my-[12px]">
            {props.description}
          </div>
          <div className="text-center my-[12px] text-[1rem] h-[45px]">
            {" "}
            {props.techStack}
          </div>
          <div className="flex justify-around items-center text-center text-[1rem] h-[40px] ">
            <div className="flex justify-between h-[30px] w-[300px]">
              <a
                className="flex w-[130px] h-[30px] bg-[#141414] rounded-[20px] text-white text-center justify-center items-center "
                href="null"
              >
                <img className="h-[20px] mx-[5px]" src={github} alt="" />
                <div className="">Code Here</div>
              </a>
              <a
                className="flex w-[130px] h-[30px] bg-[orange] rounded-[20px] text-white text-center justify-center items-center "
                href="null"
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
