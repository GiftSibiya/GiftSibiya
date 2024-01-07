/// Import Dependancies ///
import React from "react";
//--//
/// Import Files ///
//--//
function Middle() {
  return (
    <section className="flex justify-between my-[20] h-[100vh] bg-[#67bcaa]">
      <div className="relative top-[120px] left-[10px] w-[45vw] h-[380px] rounded-[20px] border-white border-2 bg-[#fff8dd] ">
        EXP
      </div>
      <div className="flex flex-col my-[150px] mx-[20px] w-[45vw] border-2 rounded-[20px]">
        <div className="top[50px] left-[30px] w-[45vw] h-[100px] mb-[30px] rounded-[20px] bg-white">
          EDU
        </div>
        <div className="top-[200px] left-[30px] w-[45vw] h-[300px] rounded-[20px] bg-[#5182cb]">
          SKILLS
        </div>
      </div>
    </section>
  );
}

export default Middle;
