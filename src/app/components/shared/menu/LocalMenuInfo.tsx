import React from "react";

import { StaticMenu } from "@/app/scripts/staticMenu";
import LocalImageBox from "./LocalImageBox";
import LocalIntro from "./LocalIntro";

export default function LocalMenuInfo({ statics }: { statics: StaticMenu }) {
  return (
    <li className="fixed left-0 top-[6rem] pt-[5rem] px-[5rem] w-full flex 2xl:flex-row flex-col gap-[3rem]">
      <LocalImageBox img={statics.firstImage} />
      <LocalIntro name={statics.firstName} details={statics.firstDetails} />
    </li>
  );
}
