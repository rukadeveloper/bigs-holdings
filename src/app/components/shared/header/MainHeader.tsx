"use client";

import React from "react";
import HeaderInner from "./HeaderInner";
import LogoLink from "../logo/LogoLink";
import GlobalMenu from "../menu/GlobalMenu";
import LanguageAndIcon from "../menu/LanguageAndIcon";
import { observer } from "mobx-react-lite";
import HeaderStateStore from "@/app/store/HeaderStateStore";
import MobileButton from "../menu/MobileButton";
import MobileMenuWrapper from "../menu/MobileMenuWrapper";

function MainHeader() {
  const { isSearchOpen, isMenuOpen } = HeaderStateStore;

  return (
    <header
      className={`w-full h-[6rem] bg-white fixed z-[40] top-0 ${
        isSearchOpen || isMenuOpen
          ? 'before:content-[""] before:absolute before:left-0 before:top-full before:w-full before:h-[521px] before:bg-[#fff] before:border-t before:border-solid before:border-[rgba(0,0,0,.15)'
          : ""
      }`}
    >
      <HeaderInner>
        <LogoLink />
        <GlobalMenu />
        <LanguageAndIcon />
        <MobileButton />
        <MobileMenuWrapper />
      </HeaderInner>
    </header>
  );
}

export default observer(MainHeader);
