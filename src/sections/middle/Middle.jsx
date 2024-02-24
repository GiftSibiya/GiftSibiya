/// Import Dependancies ///
import React from "react";
//--//
/// Import Files ///

import "./Middle.css";

import star from "../../assets/icons/star.png";
import illustrator from "../../assets/skillIcons/illustrator.png";
import blender from "../../assets/skillIcons/blender.png";
import linux from "../../assets/skillIcons/linux.png";
import photoshop from "../../assets/skillIcons/photoshop.png";
import unity from "../../assets/skillIcons/unity.png";
import vs from "../../assets/skillIcons/vs.png";
import vscode from "../../assets/skillIcons/vscode.png";
import xd from "../../assets/skillIcons/xd.png";
import coder from "../../assets/skillIcons/programmer.png";
import warning from "../../assets/skillIcons/warning.png";
//--//
function Middle() {
  return (
    <section className="cv--container">
      {/* Experience */}

      <div className="cv--exp">
        {/* Experience Container */}
        <div>
          <div className="exp__container">
            <h3 className="exp__heading">EXPERIENCES</h3>
            <div className="exp__details ">
              {/* Year and Icon */}

              <div className="exp__details--img">
                <img
                  src={warning}
                  alt="null"
                  className="exp--details--pic"
                ></img>
                <p className="exp__details--date">2021-2023</p>
              </div>
              {/* Company And Description */}
              <div className="exp__company">
                <div className="exp__company--position">
                  {" "}
                  Senior BMS & IT Technician
                </div>
                <span className="exp__company--name">
                  {" "}
                  Micropower Modulek (PTY)LTD
                </span>
                <div className="exp__company--details">
                  <ul className="exp__company--details--list">
                    <li>
                      Building high current mining feeder controller units.
                    </li>
                    <li>
                      Using BMS, Modbus, and BACnet for plant monitoring sites
                      via the Tridium workstation integration.
                    </li>
                    <li>
                      Solar Panel, Home battery backup power units, and house
                      wiring.
                    </li>
                    <li>
                      Soldering for in-house custom circuit boards and
                      components.
                    </li>
                    <li>Testing and fault finding of controller units.</li>
                    <li>
                      Electrical installation including switchboards, monitoring
                      panels, metering, and power control panels to be fully
                      commissioned and operated on permanent power including
                      relevant COCs.
                    </li>
                    <li>
                      Electrical standby generators and UPS systems for constant
                      plant monitoring.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Coding */}
          <div className="exp__container">
            <div className="exp__details">
              {/* Year and Icon */}

              <div className="exp__details--img">
                <img src={coder} alt="null" className="exp--details--pic"></img>
                <p className="exp__details--date">2023-PRESENT</p>
              </div>
              {/* Company And Description */}
              <div className="exp__company">
                <div className="exp__company--position">
                  {" "}
                  Full Stack Software Developer
                </div>
                <span className="exp__company--name">
                  {" "}
                  Freelance for Rand Water and Others
                </span>
                <div className="exp__company--details">
                  <ul className="exp__company--details--list">
                    <li>
                      Building and designing mobile and web application UI & UX.
                    </li>
                    <li>
                      Learning and integrating new technologies to meet tech
                      specs.
                    </li>
                    <li>
                      Colaborating with a team to impliment clean and
                      maintainable code up to date with best practices..
                    </li>
                    <li>
                      Working in a Devops environment to maintain proper and
                      professional workflow.
                    </li>
                    <li>Unit testing and debugging techniques</li>
                    <li>Cross platform application planning and development</li>
                    <li>
                      Building 3D models for 8th Wall AR and play-testing in
                      unity game development.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // */}
      <div className="flex flex-col my-[150px] mx-[20px] w-[45vw] md:w-[10vw] rounded-[20px]">
        <div className="flex w-[93vw] md:w-[40vw] h-[300px] mb-[30px] rounded-[20px] bg-white">
          {/* EDUCATION SECTION */}

          {/* Column 1 for stars */}
          <div>
            <img className="mt-[70px]" src={star} alt="Star icon"></img>
            <img className="mt-[50px]" src={star} alt="Star icon"></img>
          </div>
          {/* Column 2 */}
          <div className=" ml-[10px] ">
            <h3 className="text-[2rem] text-center font-bold"> EDUCATION</h3>
            <div className="flex items-center bg-[orange] my-[20px] rounded-2xl border-black w-[75vw] md:w-[30vw] h-[90px]">
              <div className="mx-[30px] md:mx-[10px] text-[25px] md:text-[20px]">
                {" "}
                2020
              </div>
              <div className="mx-[2vw]">
                <div className="text-[20px] font-bold md:text-[14px]">
                  Electrical Engineering N5 <br /> (HEAVY CURRENT)
                </div>
                <div>Denver Technical College</div>
              </div>
            </div>
            <div className="flex items-center bg-[orange] my-[20px] rounded-2xl border-black w-[75vw] md:w-[30vw] h-[90px]">
              <div className="mx-[30px] md:mx-[10px] text-[25px] md:text-[20px]">
                {" "}
                2020
              </div>
              <div className="mx-[2vw]">
                <div className="text-[20px] font-bold md:text-[14px]">
                  Technical Matric
                </div>
                <div>Rhodesfield Technical High School</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Sections */}
        <div className="flex flex-col h-[300px] w-[93vw] md:w-[40vw] rounded-[20px] bg-[#5182cb]">
          {/* Skills Box */}
          <h3 className=" text-[2rem] text-center font-bold"> SKILLS</h3>
          <div className="flex flex-row px-5 md:w-[40vw] justify-between ">
            {/* Software Skills */}
            <div className="flex flex-col md:w-[25vw] justify-center text-center rounded-2xl border-black ">
              <p className="text-2xl mb-4 font-bold text-center w-[40vw] md:w-[20vw] ">
                Software Skils
              </p>
              <div className="flex flex-col  w-[30vw] md:w-[20vw] justify-center">
                <div className="flex items-center justify-between ">
                  <img className="h-[54px] " alt="" src={photoshop}></img>
                  <img className="h-[40px] " alt="" src={illustrator}></img>
                  <img className="h-[54px] " alt="" src={xd}></img>
                  <img className="h-[50px] " alt="" src={blender}></img>
                </div>

                {/* Make Dissapearing Description Titles */}
                <div className="flex items-center justify-between mt-2">
                  <img className="h-[50px] " alt="" src={vs}></img>
                  <img className="h-[50px] " alt="" src={vscode}></img>
                  <img className="h-[50px] " alt="" src={unity}></img>
                  <img className="h-[50px] " alt="" src={linux}></img>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:w-[15vw] items-center text-center rounded-2xl">
              <p className="text-2xl  font-bold mb-4 text-center w-[40vw] md:w-[20vw]">
                Technical Skils
              </p>
              <ul className="flex flex-col w-[30vw] justify-center">
                <li>Hand Tool Skills</li>
                <li>Electrical Fault Finding</li>
                <li> </li>
                <li>Hand Tools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Middle;
