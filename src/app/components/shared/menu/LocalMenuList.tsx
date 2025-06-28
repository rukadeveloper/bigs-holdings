import React from "react";

import { Second, StaticMenu } from "@/app/scripts/staticMenu";
import Link from "next/link";

export default function LocalMenuList({ statics }: { statics: StaticMenu }) {
  return (
    <li className="local-menu-list absolute top-full left-0 -right-[200px] pt-[2.5rem]">
      <div className="local-menu-wrapper grid grid-cols-3">
        {statics.second.map((second: Second) => (
          <Link
            key={second.secondName}
            href={second.secondLink}
            className="font-bold block text-2xl p-5 hover:text-[#aa2c28]"
          >
            {second.secondName}
          </Link>
        ))}
      </div>
    </li>
  );
}
