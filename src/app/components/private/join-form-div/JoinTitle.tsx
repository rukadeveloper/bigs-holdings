import React from "react";

export default function JoinTitle() {
  return (
    <div className="join-title w-full pt-[10.25rem] pb-[1.57rem] flex xxsm:flex-row flex-col xxsm:justify-between justify-start gap-[1rem] items-center w-full border-b border-solid border-black">
      <h2 className="font-bold text-2xl">기본 정보</h2>
      <span className="text-[rgba(0,0,0,.35)] font-bold">
        <b className="text-[#AA2F2B]">*</b>이 있는 사항은 반드시 입력하셔야
        합니다.
      </span>
    </div>
  );
}
