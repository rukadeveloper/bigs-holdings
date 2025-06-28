"use client";

import React from "react";
import LocalMenuInfo from "./LocalMenuInfo";
import { StaticMenu } from "@/app/scripts/staticMenu";
import HeaderStateStore from "@/app/store/HeaderStateStore";
import { observer } from "mobx-react-lite";
import LocalMenuList from "./LocalMenuList";

function LocalMenu({ statics, index }: { statics: StaticMenu; index: number }) {
  const { isMenuOpen, menuIdx } = HeaderStateStore;

  //

  return (
    <ul
      id="lnb"
      className={`${isMenuOpen && menuIdx === index ? "block" : "hidden"}`}
    >
      <LocalMenuInfo statics={statics} />
      <LocalMenuList statics={statics} />
    </ul>
  );
}

export default observer(LocalMenu);
