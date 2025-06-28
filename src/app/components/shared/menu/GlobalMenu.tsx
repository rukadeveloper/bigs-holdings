"use client";

import React from "react";
import { StaticMenu, staticMenu } from "@/app/scripts/staticMenu";
import Link from "next/link";
import LocalMenu from "./LocalMenu";
import { observer } from "mobx-react-lite";
import HeaderStateStore from "@/app/store/HeaderStateStore";

function GlobalMenu() {
  const { menuOpen, menuClose, menuChanged } = HeaderStateStore;

  return (
    <nav id="gnb" className="xl:block hidden">
      <ul className="flex items-center relative">
        {staticMenu.map((statics: StaticMenu, index: number) => (
          <li
            key={statics.firstDetails}
            onMouseOver={() => {
              menuOpen();
              menuChanged(index);
            }}
            onMouseLeave={() => {
              menuClose();
              menuChanged(0);
            }}
            className="group"
          >
            <Link
              href={statics.firstMenu}
              className="font-bold text-xl leading-[6rem] block px-8 relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-[0] after:h-[3px] after:bg-[#aa2c28] after:transition-all group-hover:after:w-full group-hover:text-[#aa2c28]"
            >
              {statics.firstName}
            </Link>
            <LocalMenu statics={statics} index={index} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default observer(GlobalMenu);
