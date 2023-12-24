// Depandancies Imports //
import React from "react";
//*//

// File Imports //
import "./Header.css";
import ProfileCard from "../profileCard/ProfileCard";
//*//

function Header() {
  return (
    <>
      <section className="headerSection">
        <nav className="navbar">
          <div className="navbar--name">
            <h3>Gift Sibiya</h3>
          </div>

          <div className="navbar--links">
            <a className=" navbar--links--item "> About Me</a>
            <a className=" navbar--links--item "> Projects</a>
            <a className=" navbar--links--item navbar--links--item__touch ">
              {" "}
              Get In Touch
            </a>
          </div>
        </nav>

        <div className="hero">
          <div className="hero--text">
            <h2>Hello World</h2>
            <h2>I'M GIFT</h2>
            <p className="bioText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              veritatis voluptates sit non fugit temporibus delectus quos quis
              hic architecto assumenda sint, suscipit neque deleniti tempora
              quibusdam adipisci,
            </p>
          </div>
          <div className="profileCard">
            <ProfileCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
