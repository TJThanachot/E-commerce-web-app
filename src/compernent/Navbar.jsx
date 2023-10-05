import React from "react";
import { Logo } from "../assets/image";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const nav = useNavigate();
  return (
    <div className="h-auto mt-[46px] w-[90%]  flex justify-between ">
      <div
        onClick={() => {
          nav("/");
        }}
      >
        <Logo />
      </div>
      <div className=" flex gap-[65px] items-center">
        <button>CATALOGUE</button>
        <button>FASHION</button>
        <button>FAVOURITE</button>
        <button>LIFESTYLE</button>
        <button className="h-full w-[134px] p-5 rounded-md bg-black text-white">
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default Navbar;
