"use client";

import React from "react";

import { observer } from "mobx-react-lite";

import { GiHamburgerMenu } from "react-icons/gi";
import HeaderStateStore from "@/app/store/HeaderStateStore";

function MobileButton() {
  const { mobileMenuToggle, isMenuOpen } = HeaderStateStore;

  return (
    <button
      id="mobileButton"
      className="xl:hidden block cursor-pointer"
      onClick={() => {
        mobileMenuToggle();
      }}
    >
      <span className="sr-only">햄버거 버튼</span>
      <GiHamburgerMenu size={26} fill={"#000"} />
    </button>
  );
}

export default observer(MobileButton);
