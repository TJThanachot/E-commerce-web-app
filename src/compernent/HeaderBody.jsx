import React from "react";
import i1 from "../assets/i1.png";
import R6 from "../assets/R6.png";
import R3 from "../assets/R3.png";
import { Logo2, Yellow } from "../assets/image";

function HeaderBody() {
  return (
    <div
      className="bg-[#F4F6F5] w-[90%] h-[550px] rounded-3xl flex  text-lg 
    max-sm:flex-col-reverse max-sm:gap-10 max-sm:h-auto"
    >
      <div
        className="w-[50%] flex flex-col gap-10 py-10 pl-[5%] relative
      max-sm:w-[100%]"
      >
        <Logo2 width={"300"} />
        <img
          className="w-[50%] absolute z-0 left-10 max-sm:top-[7rem] max-sm:w-[70%]"
          src={R3}
          alt=""
        />
        <img
          className="w-[50%] absolute z-0 top-[11rem] left-9 max-sm:top-[16rem] max-sm:w-[70%]"
          src={R6}
          alt=""
        />
        <p>Live for influential innovative fashion!</p>
        <div className="flex justify-around items-center">
          <Yellow />
          <button className=" w-[30%] p-5 rounded-md bg-black text-white">
            Shop Now
          </button>
        </div>
      </div>

      <img className="w-[60%] max-sm:w-[100%]" src={i1} alt="" />
    </div>
  );
}

export default HeaderBody;
