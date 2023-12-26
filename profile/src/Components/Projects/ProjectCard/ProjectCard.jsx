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
import Darticon from "../../logoComponent/Darticon";
import AndroidStudio from "../../logoComponent/AndroiStudio";
//--//

function ProjectCard(props) {
  return (
    <div className="cardContainer">
      <div className="projectCard">
        <div className="projectCard__pic">pic here</div>
        <div className="projectCard__info">
          <div className="projectCard__info__title"> {props.title}</div>
          <div className="projectCard__info__description">
            {props.description}
          </div>
          <div className="projectCard__info__stack">
            <Darticon />
            <AndroidStudio />
          </div>
          <div className="projectCard__info__links">
            <div className="projectLink1"></div>
            <div className="projectLink2">Demo Here</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
