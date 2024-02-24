// Depandancies Imports //
import React from "react";
//*//

// File Imports //
import "./Header.css";
//*//

// Icon Asset Imports //
import ProfileCard from "../../Components/ProfileCard";
import html from "../../assets/icons/HTML.png";
import css from "../../assets/icons/Css.png";
import javaScript from "../../assets/icons/JS.png";
import react from "../../assets/icons/React.png";
import node from "../../assets/icons/Node.png";
import csharp from "../../assets/icons/Csharp.png";
import dart from "../../assets/icons/Dart.png";
import github from "../../assets/icons/github.png";
import linkedIn from "../../assets/icons/linkedIn.png";
import DotNet from "../../assets/icons/dotNET.png";

//--//

function Header() {
  return (
    <>
      <section className="mainSection">
        <nav className="navSection">
          <div className="">
            <h3>Gift Sibiya</h3>
          </div>

          <div className="nav--Links">
            <a href="null" className="nav--Item">
              About Me
            </a>
            <a href="#null" className=" nav--Item">
              Projects
            </a>
            <a href="null" className="nav--Item__Btn ">
              {" "}
              Get In Touch
            </a>
          </div>
        </nav>

        <div className="headerParagraph__con">
          <div className="headerParagraph__Intro">
            <h2 className="headerParagraph__heading">Hello World.</h2>
            <h2 className="headerParagraph__tagline">
              My name is Gift Sibiya & welcome to my early 2024 Portfolio.
            </h2>
            <p className="headerParagraph__bio">
              I am a full stack web & mobile developer with a background in
              Electrical Engineering based in Midrand, South Africa with
              extensive experience working and adapting to frontend and backend
              tech stacks from javascript to ASP.NET CRUD applications.
            </p>
            <div className="headerStack__con ">
              <div className="headerStack__icons">
                <img className="headerStack__icons" src={html} alt="" />
                <img className="headerStack__icons" src={css} alt="" />
                <img className="headerStack__icons" src={javaScript} alt="" />
                <img className="headerStack__icons" src={react} alt="" />
                <img className="headerStack__icons" src={node} alt="" />
                <img className="headerStack__icons" src={csharp} alt="" />
                <img className="headerStack__icons" src={dart} alt="" />
                <img className="headerStack__icons" src={DotNet} alt="" />
              </div>
              <div className="headerStack__socials ">
                <a
                  href="https://github.com/GiftSibiya"
                  className="headerStack__socials__git "
                >
                  <img className="w-[25px] sm:w-[30px]" src={github} alt="" />
                  <p className="text-white text-[2.5vw]">github/GiftSibiya</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/gift-sibiya-38134a21b/"
                  className="headerStack__socials__linkedIn"
                >
                  <img className="w-[25px] sm:w-[30px]" src={linkedIn} alt="" />
                  <p className="text-black text-[2.5vw]">linkedIn/GiftSibiya</p>
                </a>
              </div>
            </div>
          </div>
          <div className=" my-[50px]">
            <ProfileCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
