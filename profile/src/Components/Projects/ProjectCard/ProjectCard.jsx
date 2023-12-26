/// Import Dependencies ///
import React from "react";
//--//

/// Import Files ///
import "./ProjectCard.css";
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
    <div className="cardContainer">
      <div className="projectCard">
        <div className="projectCard__pic">{props.screenshot}</div>
        <div className="projectCard__info">
          <div className="projectCard__info__title"> {props.title}</div>
          <div className="projectCard__info__description">
            {props.description}
          </div>
          <div className="projectCard__info__stack"> {props.techStack}</div>
          <div className="projectCard__info__links">
            <div className="projectLinks">
              <a className="linkButton gitLink" href="">
                <img className="buttonIcon" src={github} alt="" />
                <div className="buttonItems">Code Here</div>
              </a>
              <a className="linkButton" href="">
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
