import React from "react";
import MobileGlobalMenu from "./MobileGlobalMenu";
import MobileLanguageAndIcon from "./MobileLanguageAndIcon";
import { observer } from "mobx-react-lite";
import HeaderStateStore from "@/app/store/HeaderStateStore";

function MobileMenuWrapper() {
  const { isMobileMenuOpen } = HeaderStateStore;

  return (
    <div
      className={`mobile__menu__wrapper fixed transition-all duration-600 bottom-0 left-0 right-0 bg-[#AA2C28] xl:hidden block z-[10] px-[5.83rem] py-[4.67rem] ${
        !isMobileMenuOpen ? "top-full" : "top-[6rem]"
      }`}
    >
      <MobileGlobalMenu />
      <MobileLanguageAndIcon />
    </div>
  );
}

export default observer(MobileMenuWrapper);
