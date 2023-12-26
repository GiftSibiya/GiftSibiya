// Import Dependencies //
import React from "react";
//--//

// Import Files //
import icon from "../../assets/icons/Dart.png";
//--//

function Darticon() {
  // Define your styles as an object
  const imageStyles = {
    margin: "5px 0px",
    height: "40px",
    width: "40px",
  };

  return <img src={icon} alt="" style={imageStyles} />;
}

export default Darticon;
