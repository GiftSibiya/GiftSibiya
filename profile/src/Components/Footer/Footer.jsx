// Importing Dependancies //
import React from "react";
//--//

// Import Files //
import "./Footer.css";
//--//

function Footer() {
  return (
    <section className="footerContainer">
      <div className="contactBox"></div>
      <div className="footnote">
        <div className="followText">
          <h5>Follow Me:</h5>
        </div>
        <div className="socialLink"></div>
        <div className="footerBottom"></div>
      </div>
    </section>
  );
}

export default Footer;
