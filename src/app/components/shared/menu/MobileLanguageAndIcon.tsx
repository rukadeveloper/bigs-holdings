import React from "react";
import Language from "./Language";
import Search from "./Search";
import MobileSearch from "./MobileSearch";
import MobileInfo from "./MobileInfo";

export default function MobileLanguageAndIcon() {
  return (
    <div
      id="mobile__lang__icon"
      className="absolute bottom-0 left-0 w-full flex justify-between items-center flex-row-reverse px-[3.35rem] py-[0.63rem] bg-[#8F2A27]"
    >
      <Language />
      <MobileInfo />
      <MobileSearch />
    </div>
  );
}
