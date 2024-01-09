// Import Dependencies //
import React from "react";
//--//

// Import Files //
import icon from "../../assets/icons/Csharp.png";
//--//

function CsIcon() {
  // Define your styles as an object
  const imageStyles = {
    margin: "-11px 0px",
    height: "70px",
    width: "70px",
  };

  return <img src={icon} alt="" style={imageStyles} />;
}

export default CsIcon;
