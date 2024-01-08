import React from "react";
import coder from "../assets/skillIcons/programmer.png";
import warning from "../assets/skillIcons/warning.png";

function Exp() {
  return (
    <div className="relative top-[120px] left-[10px] w-[45vw] h-[500px] rounded-[20px] border-white  bg-[#fff8dd] ">
      <h3 className="font-bold text-[2rem] text-center mb-3">EXPERIENCE</h3>
      <div className="flex justify-around h-fit ">
        {/* Year and Icon */}

        <div className="flex flex-col items-center justify-around h-full w-[12vw]">
          <img src={warning} alt="null" className="size-[80px]"></img>
          <p className="text-[20px] font-bold">2021-2023</p>
        </div>
        {/* Company And Description */}
        <div className="flex flex-col h-full  w-[30vw]">
          <div className="text-center text-2xl font-bold">
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
                Using BMS, Modbus, and BACnet for plant monitoring sites via the
                Tridium workstation integration.
              </li>
              <li>
                Solar Panel, Home battery backup power units, and house wiring.
              </li>
              <li>
                Soldering for in-house custom circuit boards and components.
              </li>
              <li>Testing and fault finding of controller units.</li>
              <li>
                Electrical installation including switchboards, monitoring
                panels, metering, and power control panels to be fully
                commissioned and operated on permanent power including relevant
                COCs.
              </li>
              <li>
                Electrical standby generators and UPS systems for constant plant
                monitoring.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exp;
