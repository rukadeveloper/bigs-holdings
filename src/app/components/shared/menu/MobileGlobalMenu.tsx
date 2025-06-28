import { StaticMenu, staticMenu } from "@/app/scripts/staticMenu";

import React from "react";
import Link from "next/link";
import MobileLocalMenu from "./MobileLocalMenu";
import HeaderStateStore from "@/app/store/HeaderStateStore";
import { observer } from "mobx-react-lite";

function MobileGlobalMenu() {
  const { menuOpen, menuClose, menuChanged } = HeaderStateStore;

  return (
    <ul id="mobile_gnb">
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
        >
          <Link
            href={statics.firstMenu}
            className="block text-white font-bold text-2xl mb-[3rem]"
          >
            {statics.firstName}
          </Link>
          <MobileLocalMenu statics={statics} index={index} />
        </li>
      ))}
    </ul>
  );
}

export default observer(MobileGlobalMenu);
