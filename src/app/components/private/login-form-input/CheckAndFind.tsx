import React from "react";
import CheckInput from "./CheckInput";
import FindAccount from "./FindAccount";

export default function CheckAndFind() {
  return (
    <div className="check__and__find sm:max-w-[600px] xxsm:max-w-[400px] max-w-[300px] mx-auto flex xxsm:flex-row flex-col xxsm:justify-between gap-[1rem] justify-center items-center mb-[1.775rem]">
      <CheckInput />
      <FindAccount />
    </div>
  );
}
