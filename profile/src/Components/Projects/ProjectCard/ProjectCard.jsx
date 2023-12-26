/// Import Dependencies ///
import React from "react";
//--//

/// Import Files ///
import "./ProjectCard.css";
//--//

function ProjectCard() {
  return (
    <div className="cardContainer">
      <div className="projectCard">
        <div className="projectCard__pic">pic here</div>
        <div className="projectCard__info">
          <div className="projectCard__info__title">Title Here</div>
          <div className="projectCard__info__description">Title Here</div>
          <div className="projectCard__info__stack">
            HTML CSS whatever God helped me with
          </div>
          <div className="projectCard__info__links">
            <div className="projectLink1">Code Here</div>
            <div className="projectLink2">Demo Here</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
