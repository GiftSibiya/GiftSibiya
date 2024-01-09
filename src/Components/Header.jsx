// Depandancies Imports //
import React from "react";
//*//

// File Imports //

//*//

// Icon Asset Imports //
import ProfileCard from "./ProfileCard";
import html from "../assets/icons/HTML.png";
import css from "../assets/icons/Css.png";
import javaScript from "../assets/icons/JS.png";
import react from "../assets/icons/React.png";
import node from "../assets/icons/Node.png";
import csharp from "../assets/icons/Csharp.png";
import dart from "../assets/icons/Dart.png";
import github from "../assets/icons/github.png";
import linkedIn from "../assets/icons/linkedIn.png";
import DotNet from "../assets/icons/dotNET.png";

//--//

function Header() {
  function scrollToSection(sectionId, event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <section className="  scroll-smooth h-[400px] w-screen bg-[#fff8dd]">
        <nav className="flex justify-between items-center mt-[2px] mx-[30px] w-screen">
          <div className="">
            <h3>Gift Sibiya</h3>
          </div>

          <div className="flex w-[300px] justify-around">
            <a
              href="#aboutMeSection"
              onClick={(e) => scrollToSection("aboutMeSection", e)}
              className="p-[10px] cursor-pointer"
            >
              {" "}
              About Me
            </a>
            <a
              href="#projectsSection"
              onClick={(e) => scrollToSection("projectsSection", e)}
              className=" p-[10px] cursor-pointer "
            >
              {" "}
              Projects
            </a>
            <a
              href="#getInTouchSection"
              onClick={(e) => scrollToSection("getInTouchSection", e)}
              className=" p-[10px] cursor-pointer bg-[orange] rounded-[20px] text-white "
            >
              {" "}
              Get In Touch
            </a>
          </div>
        </nav>

        <div className="flex  justify-around">
          <div className="p-[20px]">
            <h2 className="text-[2rem] ml-[20px]">Hello World</h2>
            <h2 className="ml-[20px]">I'M GIFT</h2>
            <p className="w-[250px] ml-[20px] sm:w-[400px] mt-[40px] md:text-[20px]  text-[15px]">
              I am a full stack web & mobile developer with a background in
              Electrical Engineering based in Midrand, South Africa with
              extensive experience working and adapting to front and backend
              tech stacks from javascript to ASP.NET CRUD applications.
            </p>
            <div className="flex flex-col ">
              <div className="flex w-[50vw] justify-between ml-2 my-[10px]">
                <img
                  className="object-contain max-w-[60px]"
                  src={html}
                  alt=""
                />
                <img className="object-contain max-w-[60px]" src={css} alt="" />
                <img
                  className="object-contain max-w-[60px]"
                  src={javaScript}
                  alt=""
                />
                <img
                  className="object-contain max-w-[60px]"
                  src={react}
                  alt=""
                />
                <img
                  className="object-contain max-w-[60px]"
                  src={node}
                  alt=""
                />
                <img className="object-contain w-[70px] " src={csharp} alt="" />
                <img className="object-contain w-[40px] " src={dart} alt="" />
                <img
                  className="object-contain max-w-[60px]"
                  src={DotNet}
                  alt=""
                ></img>
              </div>
              <div className="flex  w-screem ">
                <a
                  href="https://github.com/GiftSibiya"
                  className="flex cursor-pointer items-center w-[30vw] mx-[10px] p-[10px] rounded-[10px]  text-decoration-none bg-[#1f1f1f] border-[2px] border-white "
                >
                  <img className="w-[25px] sm:w-[30px]" src={github} alt="" />
                  <p className="text-white text-[2.5vw]">github/GiftSibiya</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/gift-sibiya-38134a21b/"
                  className="flex cursor-pointer items-center w-[30vw] mx-[10px] p-[10px] rounded-[10px] text-decoration-none bg-white border-[2px] border-[#5182cb]"
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
