import React from "react";

export default function CheckInput() {
  return (
    <div className="check__id">
      <label
        htmlFor="checkId"
        className="flex items-center gap-[10px] text-[rgba(0,0,0,.45)]"
      >
        <input type="checkbox" id="checkId" />
        <span>아이디 기억하기</span>
      </label>
    </div>
  );
}
