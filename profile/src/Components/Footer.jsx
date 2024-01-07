// Importing Dependancies //
import React from "react";
//--//

function Footer() {
  return (
    <section className="flex mt-[500px] h-[200px] bg-[#67bcaa] border-2 ">
      <div className="relative top-[-240px] left-[20px] h-[350px] w-[45vw] rounded-[20px] border-2 border-white bg-[#fff8dd]"></div>
      <div className="flex felx-col border-2 border-black justify-end">
        <div className="relative top[-20px] left[40px] h-[50px] w-[240px] font-[50px]">
          <h5>Follow Me:</h5>
        </div>
        <div className=" "></div>
        <div className="relative bottom-0 right-[330px] h-[40px] w-[320px] border-2 border-red-600"></div>
      </div>
    </section>
  );
}

export default Footer;
