import React from "react";
import Navbar from "./Navbar";
import HeaderBody from "./HeaderBody";
import HeaderBottom from "./HeaderBottom";
function Header() {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <Navbar />
      <HeaderBody />
      <HeaderBottom />
    </div>
  );
}

export default Header;
