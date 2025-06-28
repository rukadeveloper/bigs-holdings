import React from "react";

import { IoIosAlert } from "react-icons/io";

export default function JoinCaption() {
  return (
    <div className="join-caption w-full bg-[#f9f9f9] px-[1.73rem] py-[1.99rem] flex items-center gap-[1.1rem]">
      <IoIosAlert className="xsm:w-[24px] xsm:h-[24px] w-[20px] h-[20px]" />
      <span className="font-bold xsm:text-[1rem] xsm:pt-0 pt-[1px] text-[0.935rem]">
        회원가입이 안될 경우, 챗봇으로 문의 부탁드립니다.
      </span>
    </div>
  );
}
