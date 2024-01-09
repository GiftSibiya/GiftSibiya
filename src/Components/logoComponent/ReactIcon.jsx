// Import Dependencies //
import React from "react";
//--//

// Import Files //
import icon from "../../assets/icons/React.png";
//--//

function ReactIcon() {
  // Define your styles as an object
  const imageStyles = {
    height: "50px",
    width: "50px",
  };

  return <img src={icon} alt="" style={imageStyles} />;
}

export default ReactIcon;
