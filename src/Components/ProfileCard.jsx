// Dependancies Import //
import React from "react";

// File Imports //
import profileImage from "../assets/images/profile.jpg";

function ProfileCard() {
  return (
    <section className=" flex items-center justify-center h-[300px]">
      <div className="hidden md:flex md:absolute z-20 top-[180px] p-[10px] rounded-[20px] right-[25vw] bg-[orange] ">
        29 April 1997
      </div>
      <div className="">
        {/* Black Box */}

        <div className="  ">
          {/* Picture and box container */}
          <div className=" h-[300px] ">
            {/* Picture */}
            <img
              className="relative top-0 object-contain rounded-[20px] size-[150px] sm:size-[200px] z-10"
              src={profileImage}
              alt="Gift's profile shot"
            />
            <div className="relative pt-[120px] pl-2 bottom-[120px] left-[10px] bg-black w-[150px] sm:w-[190px] h-[230px] size-[200px] rounded-[20px] z-1">
              <div>
                <p className="text-[20px] mb-[5px] text-[orange] font-bold text-center">
                  CONTACT
                </p>
                <div className="">
                  <p className="text-white">Midrand, Gauteng</p>
                  <p className="text-white">giftsibiya.gb@gmail.com</p>
                  <p className="text-white">071 244 2080</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
