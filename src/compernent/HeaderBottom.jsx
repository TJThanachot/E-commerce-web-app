import React from "react";
import hm from "../assets/hm.png";
import obey from "../assets/obey.png";
import shopify from "../assets/shopify.png";
import lacoste from "../assets/lacoste.png";
import levis from "../assets/levis.png";
import amazon from "../assets/amazon.png";

function HeaderBottom() {
  return (
    <div className="flex bg-[#EBD96B] w-full h-[8rem] justify-between items-center px-10 flex-wrap max-sm:flex-col max-sm:h-auto max-sm:gap-5 max-sm:py-5">
      <img src={hm} alt="h&m logo" />
      <img src={obey} alt="obey logo" />
      <img src={shopify} alt="shopify logo" />
      <img src={lacoste} alt="lacoste logo" />
      <img src={levis} alt="levis logo" />
      <img src={amazon} alt="amazon logo" />
    </div>
  );
}

export default HeaderBottom;
