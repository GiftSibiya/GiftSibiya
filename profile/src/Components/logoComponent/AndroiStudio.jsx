// Import Dependencies //
import React from "react";
//--//

// Import Files //
import icon from "../../assets/icons/AndroidStudio.png";
//--//

function AndroidStudio() {
  // Define your styles as an object
  const imageStyles = {
    height: "48px",
    width: "48px",
  };

  return <img src={icon} alt="" style={imageStyles} />;
}

export default AndroidStudio;
