"use client";

import { Second, StaticMenu } from "@/app/scripts/staticMenu";

import React from "react";
import Link from "next/link";
import HeaderStateStore from "@/app/store/HeaderStateStore";
import { observer } from "mobx-react-lite";

function MobileLocalMenu({
  statics,
  index,
}: {
  statics: StaticMenu;
  index: number;
}) {
  const { isMenuOpen, menuIdx } = HeaderStateStore;

  return (
    <ul
      id="mobile_lnb"
      className={`flex-wrap max-w-[40.625rem] pb-[2.25rem] ${
        isMenuOpen && menuIdx === index ? "flex" : "hidden"
      }`}
    >
      {statics.second.map((second: Second) => (
        <li key={second.secondName} className="min-w-[8.83rem]">
          <Link
            href={second.secondLink}
            className="text-[rgba(255,255,255,.85)] text-[1.25rem] pr-[3.45rem] block pb-[1.05rem]"
          >
            {second.secondName}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default observer(MobileLocalMenu);
