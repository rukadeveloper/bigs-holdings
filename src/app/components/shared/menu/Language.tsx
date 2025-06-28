import React from "react";

export default function Language() {
  return (
    <ul className="language flex items-center">
      <li className="relative after:content-[''] after:absolute after:right-0 after:top-0 after:bottom-0 after:my-auto after:w-[1px] after:h-[1.125rem] xl:after:bg-[rgba(0,0,0,.35)] after:bg-white">
        <button className="py-4 px-3 font-bold text-lg active xl:text-[#AA2C28] text-white cursor-pointer">
          KO
        </button>
      </li>
      <li>
        <button className="py-4 px-3 font-bold text-lg xl:text-black text-[rgba(255,255,255,.65)] cursor-pointer">
          EN
        </button>
      </li>
    </ul>
  );
}
