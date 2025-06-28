import React from "react";

export default function FindAccount() {
  return (
    <div className="find__account flex items-center text-[0.965rem]">
      <button className="px-[0.8rem] border-r border-solid border-[rgba(0,0,0,.65)] cursor-pointer">
        아이디 찾기
      </button>
      <button className="px-[0.8rem] cursor-pointer">비밀번호 찾기</button>
    </div>
  );
}
