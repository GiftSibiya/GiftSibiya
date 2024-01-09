/// Import Dependancies ///
import React from "react";
//--//
/// Import Files ///
import star from "../assets/icons/star.png";
import illustrator from "../assets/skillIcons/illustrator.png";
import blender from "../assets/skillIcons/blender.png";
import linux from "../assets/skillIcons/linux.png";
import photoshop from "../assets/skillIcons/photoshop.png";
import unity from "../assets/skillIcons/unity.png";
import vs from "../assets/skillIcons/vs.png";
import vscode from "../assets/skillIcons/vscode.png";
import xd from "../assets/skillIcons/xd.png";
import coder from "../assets/skillIcons/programmer.png";
import warning from "../assets/skillIcons/warning.png";
//--//
function Middle() {
  return (
    <section className="flex flex-col justify-between my-[20] w-[120vw] h-[390vh] bg-[#67bcaa]">
      {/* Experience */}

      <div className=" flex flex-col border-2 border-black relative top-[120px] left-[10px] w-[105vw] h-[1420px] rounded-[20px] border-whit  bg-[#fff8dd] ">
        {/* Experience Container */}
        <div className="">
          <h3 className="font-bold text-[2rem] text-center mb-3">EXPERIENCE</h3>
          <div className="flex justify-between h-fit ">
            {/* Year and Icon */}

            <div className="flex flex-col items-center justify-around h-full w-[12vw]">
              <img src={warning} alt="null" className="size-[80px]"></img>
              <p className="text-[20px] font-bold">2021-2023</p>
            </div>
            {/* Company And Description */}
            <div className="flex flex-col h-full  w-[60vw]">
              <div className="text-center text-2xl  font-bold">
                {" "}
                Senior BMS & IT Technician
              </div>
              <span className="text-center font-bold">
                {" "}
                Micropower Modulek (PTY)LTD
              </span>
              <div className="text-md">
                <ul className="list-disc pl-4">
                  <li>Building high current mining feeder controller units.</li>
                  <li>
                    Using BMS, Modbus, and BACnet for plant monitoring sites via
                    the Tridium workstation integration.
                  </li>
                  <li>
                    Solar Panel, Home battery backup power units, and house
                    wiring.
                  </li>
                  <li>
                    Soldering for in-house custom circuit boards and components.
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
        <div className="">
          <div className="flex justify-around w-80vw mt-[20px]">
            {/* Year and Icon */}

            <div className="flex flex-col items-center justify-around h-full w-[12vw]">
              <img src={coder} alt="null" className="size-[80px]"></img>
              <p className="text-[20px] font-bold">2023-PRESENT</p>
            </div>
            {/* Company And Description */}
            <div className="flex flex-col h-full  w-[55vw]">
              <div className="text-center text-2xl font-bold">
                {" "}
                Full Stack Software Developer
              </div>
              <span className="text-center font-bold">
                {" "}
                Freelance for Rand Water and Others
              </span>
              <div className="text-md w-[65vw]">
                <ul className="list-disc pl-4">
                  <li>
                    Building and designing mobile and web application UI & UX.
                  </li>
                  <li>
                    Learning and integrating new technologies to meet tech
                    specs.
                  </li>
                  <li>
                    Colaborating with a team to impliment clean and maintainable
                    code up to date with best practices..
                  </li>
                  <li>
                    Working in a Devops environment to maintain proper and
                    professional workflow.
                  </li>
                  <li>Unit testing and debugging techniques</li>
                  <li>Cross platform application planning and development</li>
                  <li>
                    Building 3D models for 8th Wall AR and play-testing in unity
                    game development.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // */}
      <div className="flex flex-col my-[150px] mx-[20px] w-[45vw] rounded-[20px]">
        <div className="flex w-screen border-2 h-[300px] mb-[30px] rounded-[20px] bg-white">
          {/* EDUCATION SECTION */}

          {/* Column 1 for stars */}
          <div>
            <img className="my-[80px]" src={star} alt="Star icon"></img>
            <img className="my-[40px]" src={star} alt="Star icon"></img>
          </div>
          {/* Column 2 */}
          <div className=" ml-[10px] ">
            <h3 className="text-[2rem] text-center font-bold"> EDUCATION</h3>
            <div className="flex items-center bg-[orange] my-[20px] rounded-2xl border-black w-[88vw] h-[90px]">
              <div className="mx-[30px] text-[25px]"> 2020</div>
              <div className="mx-[2vw]">
                <div className="text-[20px]">
                  Electrical Engineering N5 <br /> (HEAVY CURRENT)
                </div>
                <div>Denver Technical College</div>
              </div>
            </div>
            <div className="flex items-center bg-[orange] my-[20px] rounded-2xl border-black w-[88vw] h-[90px]">
              <div className="mx-[30px] text-[25px]"> 2020</div>
              <div className="mx-[2vw]">
                <div className="text-[20px]">Technical Matric</div>
                <div>Rhodesfield Technical High School</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Sections */}
        <div className="flex flex-col h-[300px] w-[100vw] rounded-[20px] bg-[#5182cb]">
          {/* Skills Box */}
          <h3 className=" text-[2rem] text-center font-bold"> SKILLS</h3>
          <div className="flex flex-row px-5 justify-between ">
            {/* Software Skills */}
            <div className="flex flex-col mx-2 justify-center text-center rounded-2xl border-black ">
              <p className="text-2xl mb-4 font-bold text-center w-[40vw] ">
                Software Skils
              </p>
              <div className="flex flex-col  w-[30vw] justify-center">
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
            <div className="flex flex-col items-center text-center rounded-2xl">
              <p className="text-2xl  font-bold mb-4 text-center w-[40vw] ">
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
