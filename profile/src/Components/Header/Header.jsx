// Depandancies Imports //
import React from "react";
//*//

// File Imports //
import "./Header.css";
//*//

// Asset Imports //
import ProfileCard from "../profileCard/ProfileCard";
import html from "../../assets/icons/HTML.png";
import css from "../../assets/icons/Css.png";
import javaScript from "../../assets/icons/JS.png";
import react from "../../assets/icons/React.png";
import node from "../../assets/icons/Node.png";
import csharp from "../../assets/icons/Csharp.png";
import dart from "../../assets/icons/Dart.png";
import github from "../../assets/icons/github.png";
import linkedIn from "../../assets/icons/linkedIn.png";

//--//

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
              I am a full stack web & mobile developer based in Midrand, South
              Africa with extensive experience working and adapting to front and
              backend tech stacks from javascript to ASP.NET CRUD applications.
            </p>
            <p className="text-yellow-500"> Hey there</p>
            <div className="stacks">
              <div className="techIcons">
                <img className="techIconList" src={html} alt="" />
                <img className="techIconList" src={css} alt="" />
                <img className="techIconList" src={javaScript} alt="" />
                <img className="techIconList" src={react} alt="" />
                <img className="techIconList" src={node} alt="" />
                <img className="techIconList" src={csharp} alt="" />
                <img className="dart techIconList " src={dart} alt="" />
              </div>
              <div className="socialLinks">
                <a
                  href="https://github.com/GiftSibiya"
                  className="socialButton socialButton--git"
                >
                  <img className="github__icon" src={github} alt="" />
                  <p className="github__text">github/GiftSibiya</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/gift-sibiya-38134a21b/"
                  className="socialButton socialButton--link"
                >
                  <img className="linkedIn__icon " src={linkedIn} alt="" />
                  <p className="linkedIn__text">linkedIn/GiftSibiya</p>
                </a>
              </div>
            </div>
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
