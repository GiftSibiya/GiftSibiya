/// Import Dependancies ///
import React from "react";
//--//
/// Import Files ///
import star from "../assets/icons/star.png";
//--//
function Middle() {
  return (
    <section className="flex justify-between my-[20] h-[150vh] bg-[#67bcaa]">
      <div className="relative top-[120px] left-[10px] w-[45vw] h-[380px] rounded-[20px] border-white border-2 bg-[#fff8dd] ">
        EXP
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
        <div className="relative top-[50px] w-[45vw] h-[300px] rounded-[20px] bg-[#5182cb]">
          <h3 className="relative top-[-50px] right-[-160px] text-[2rem] font-bold">
            {" "}
            TECHNICAL SKILLS
          </h3>
          <div className="flex items-center bg-[orange] my-[20px] rounded-2xl border-black w-[38vw] h-[90px]"></div>
        </div>
      </div>
    </section>
  );
}

export default Middle;
