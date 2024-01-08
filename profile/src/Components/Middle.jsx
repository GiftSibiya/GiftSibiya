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
//--//
function Middle() {
  return (
    <section className="flex justify-between my-[20] h-[150vh] bg-[#67bcaa]">
      <div className="relative top-[120px] left-[10px] w-[45vw] h-[380px] rounded-[20px] border-white  bg-[#fff8dd] ">
        <h3 className="font-bold text-[2rem] text-center mb-3">EXPERIENCE</h3>
        <div className="flex justify-between border-2 h-[120px] border-black">
          <div className="border-2 h-full border-black w-[12vw]"></div>
          <div className="flex flex-col border-2 h-full border-black w-[30vw]">
            <div className="text-center"> Company</div>
            <div className="text-center"> Description</div>
          </div>
        </div>
        <div> Micropower Experience</div>
      </div>
      <div className="flex flex-col my-[150px] mx-[20px] w-[45vw] rounded-[20px]">
        <div className="flex top[50px] left-[30px] w-[45vw] h-[260px] mb-[30px] rounded-[20px] bg-white">
          {/* EDUCATION SECTION */}

          {/* Column 1 for stars */}
          <div>
            <img className="my-[40px]" src={star} alt="Star icon"></img>
            <img className="my-[40px]" src={star} alt="Star icon"></img>
          </div>
          {/* Column 2 */}
          <div className="relative ml-[10px] top-[-40px]">
            <h3 className="relative top-[-20px] right-[-140px] text-[2rem] font-bold">
              {" "}
              EDUCATION
            </h3>
            <div className="flex items-center bg-[orange] my-[20px] rounded-2xl border-black w-[38vw] h-[90px]">
              <div className="mx-[30px] text-[25px]"> 2020</div>
              <div className="mx-[2vw]">
                <div className="text-[20px]">
                  Electrical Engineering N5 <br /> (HEAVY CURRENT)
                </div>
                <div>Denver Technical College</div>
              </div>
            </div>
            <div className="flex items-center bg-[orange] my-[20px] rounded-2xl border-black w-[38vw] h-[90px]">
              <div className="mx-[30px] text-[25px]"> 2020</div>
              <div className="mx-[2vw]">
                <div className="text-[20px]">Technical Matric</div>
                <div>Rhodesfield Technical High School</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Sections */}
        <div className="flex flex-col relative top-[50px] h-[300px] rounded-[20px] bg-[#5182cb]">
          {/* Skills Box */}
          <h3 className=" relative top-[-50px] left-[260px] text-[2rem] font-bold">
            {" "}
            SKILLS
          </h3>
          <div className="flex flex-row justify-around ">
            {/* Software Skills */}
            <div className="flex flex-col mx-2 justify-center text-center rounded-2xl border-black ">
              <p className="text-2xl mb-4 font-bold text-center w-[18vw] ">
                Software Skils
              </p>
              <div className="flex flex-col  w-[18vw] justify-center">
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
            <div className="flex flex-col justify-center text-center rounded-2xl">
              <p className="text-2xl font-bold mb-4 text-center w-[18vw] ">
                Technical Skils
              </p>
              <ul className="flex flex-col w-[20vw] justify-center">
                <li>Hand Tool Skills</li>
                <li>Electrical Fault Finding</li>
                <li> </li>
                <li>Yeah, I can probably fix your printer</li>
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
